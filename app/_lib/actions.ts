"use server";

import { site } from "@/content/site";
import { contactInitialState, type ContactState } from "./contact-state";

const LIMITS = { name: 80, email: 254, message: 4000 } as const;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function field(formData: FormData, key: string, max: number) {
  return String(formData.get(key) ?? "")
    .trim()
    .slice(0, max);
}

/**
 * Server Action do formulário "Contate-me".
 *
 * Envia via API do Resend usando `fetch` — sem SDK, sem dependência extra.
 * Configure em `.env.local`:
 *   RESEND_API_KEY=re_...
 *   CONTACT_TO_EMAIL=seu@email.com
 *   CONTACT_FROM_EMAIL=contato@seudominio.com  (domínio verificado no Resend)
 *
 * Sem RESEND_API_KEY a mensagem é apenas registrada no terminal do servidor,
 * então a página continua funcionando em desenvolvimento.
 */
export async function sendContactMessage(
  _prevState: ContactState,
  formData: FormData
): Promise<ContactState> {
  const values = {
    name: field(formData, "name", LIMITS.name),
    email: field(formData, "email", LIMITS.email),
    message: field(formData, "message", LIMITS.message),
  };

  // Honeypot: bots preenchem campos escondidos; humanos não.
  // Responde "sucesso" de propósito, para não ensinar o bot a contornar.
  if (field(formData, "company", 100) !== "") {
    return { status: "success", message: "Mensagem enviada. Obrigado!", errors: {}, values: contactInitialState.values };
  }

  const errors: ContactState["errors"] = {};
  if (values.name.length < 2) errors.name = "Informe seu nome.";
  if (!EMAIL_RE.test(values.email)) errors.email = "Informe um e-mail válido.";
  if (values.message.length < 10) errors.message = "Escreva pelo menos 10 caracteres.";

  // Validação do Cloudflare Turnstile (Captcha)
  const turnstileToken = String(formData.get("cf-turnstile-response") ?? "");
  const turnstileSecret = process.env.CLOUDFLARE_TURNSTILE_SECRET_KEY;

  if (turnstileSecret) {
    if (!turnstileToken) {
      errors.captcha = "Por favor, conclua a verificação de segurança.";
    } else {
      try {
        const verifyRes = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: new URLSearchParams({
            secret: turnstileSecret,
            response: turnstileToken,
          }),
        });
        const verifyData = (await verifyRes.json()) as { success: boolean; "error-codes"?: string[] };
        if (!verifyData.success) {
          console.warn("[turnstile] Falha na verificação:", verifyData["error-codes"]);
          errors.captcha = "Verificação de segurança falhou. Tente novamente.";
        }
      } catch (err) {
        console.error("[turnstile] Erro ao validar token:", err);
      }
    }
  }

  if (Object.keys(errors).length > 0) {
    return { status: "error", message: "Confira os campos destacados.", errors, values };
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL ?? site.email;
  const from = process.env.CONTACT_FROM_EMAIL ?? "onboarding@resend.dev";

  if (!apiKey) {
    console.warn(
      `[contato] RESEND_API_KEY ausente — nada foi enviado.\n` +
        `  de: ${values.name} <${values.email}>\n` +
        `  para: ${to}\n` +
        `  mensagem: ${values.message}`
    );
    return {
      status: "success",
      message: "Mensagem recebida (modo de desenvolvimento — veja o terminal).",
      errors: {},
      values: contactInitialState.values,
    };
  }

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: `${site.name} <${from}>`,
        to: [to],
        reply_to: values.email,
        subject: `[${site.name}] Nova mensagem de ${values.name}`,
        text:
          `Nome: ${values.name}\n` +
          `E-mail: ${values.email}\n\n` +
          `${values.message}\n`,
      }),
    });

    if (!response.ok) {
      // Loga o detalhe no servidor, mas não expõe ao visitante.
      console.error("[contato] Resend respondeu", response.status, await response.text());
      throw new Error(`Resend HTTP ${response.status}`);
    }
  } catch (error) {
    console.error("[contato] falha ao enviar", error);
    return {
      status: "error",
      message: `Não consegui enviar agora. Tente novamente ou me chame em ${site.email}.`,
      errors: {},
      values,
    };
  }

  return {
    status: "success",
    message: "Mensagem enviada. Respondo assim que possível!",
    errors: {},
    values: contactInitialState.values,
  };
}
