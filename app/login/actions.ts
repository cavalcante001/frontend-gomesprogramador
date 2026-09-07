"use server";

import { type LoginState } from "./login-state";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

/**
 * Placeholder: só valida o formato dos campos. Não existe banco de usuários
 * nem verificação de credenciais ainda — este projeto é um portfólio
 * estático, sem backend de autenticação. Plugue aqui uma biblioteca de auth
 * (NextAuth/Auth.js, Lucia, etc.) ou seu próprio provedor quando precisar
 * de login de verdade.
 */
export async function loginAction(
  _prevState: LoginState,
  formData: FormData
): Promise<LoginState> {
  const email = String(formData.get("email") ?? "").trim();
  const password = String(formData.get("password") ?? "");

  const errors: LoginState["errors"] = {};
  if (!EMAIL_RE.test(email)) errors.email = "Informe um e-mail válido.";
  if (password.length < 6) errors.password = "A senha precisa ter pelo menos 6 caracteres.";

  if (Object.keys(errors).length > 0) {
    return { status: "error", message: "Confira os campos destacados.", errors };
  }

  return {
    status: "error",
    message: "Login ainda não está conectado a um backend — esta é só a interface.",
    errors: {},
  };
}
