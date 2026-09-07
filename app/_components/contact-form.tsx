"use client";

import { useEffect, useRef, useState, useActionState } from "react";
import Script from "next/script";
import Alert from "@mui/material/Alert";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { visuallyHidden } from "@mui/utils";
import { sendContactMessage } from "@/app/_lib/actions";
import { contactInitialState } from "@/app/_lib/contact-state";

declare global {
  interface Window {
    turnstile?: {
      render: (
        container: string | HTMLElement,
        params: {
          sitekey: string;
          theme?: "light" | "dark" | "auto";
          callback?: (token: string) => void;
          "error-callback"?: () => void;
          "expired-callback"?: () => void;
        }
      ) => string;
      reset: (widgetId?: string) => void;
      remove: (widgetId?: string) => void;
    };
  }
}

export function ContactForm() {
  const [state, formAction, pending] = useActionState(
    sendContactMessage,
    contactInitialState
  );

  const turnstileContainerRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<string | null>(null);
  const [scriptLoaded, setScriptLoaded] = useState(false);

  const siteKey =
    process.env.NEXT_PUBLIC_CLOUDFLARE_TURNSTILE_SITE_KEY ||
    "1x00000000000000000000AA"; // Test key padrão

  useEffect(() => {
    // Se o script já tiver sido carregado (navegação client-side ou cache)
    if (typeof window !== "undefined" && window.turnstile) {
      setScriptLoaded(true);
    }
  }, []);

  useEffect(() => {
    if (!scriptLoaded || !turnstileContainerRef.current || !window.turnstile) return;

    // Se já renderizou, não renderiza de novo
    if (widgetIdRef.current) return;

    try {
      widgetIdRef.current = window.turnstile.render(turnstileContainerRef.current, {
        sitekey: siteKey,
        theme: "dark",
      });
    } catch (e) {
      console.error("[turnstile] render error:", e);
    }

    return () => {
      if (widgetIdRef.current && window.turnstile) {
        window.turnstile.remove(widgetIdRef.current);
        widgetIdRef.current = null;
      }
    };
  }, [scriptLoaded, siteKey]);

  // Reseta o captcha caso haja erro ou sucesso no form
  useEffect(() => {
    if (widgetIdRef.current && window.turnstile) {
      window.turnstile.reset(widgetIdRef.current);
    }
  }, [state]);

  const squareInputSx = {
    "& .MuiFilledInput-root": {
      borderRadius: 0,
      borderTopLeftRadius: 0,
      borderTopRightRadius: 0,
    },
    "& .MuiOutlinedInput-root": {
      borderRadius: 0,
    },
  };

  return (
    <Box component="form" action={formAction} noValidate>
      <Stack spacing={2.5}>
        <TextField
          id="name"
          name="name"
          label="Nome"
          required
          autoComplete="name"
          defaultValue={state.values.name}
          error={Boolean(state.errors.name)}
          helperText={state.errors.name ?? " "}
          slotProps={{ htmlInput: { maxLength: 80 } }}
          sx={squareInputSx}
        />

        <TextField
          id="email"
          name="email"
          type="email"
          label="Seu e-mail"
          required
          autoComplete="email"
          defaultValue={state.values.email}
          error={Boolean(state.errors.email)}
          helperText={state.errors.email ?? " "}
          slotProps={{ htmlInput: { maxLength: 254 } }}
          sx={squareInputSx}
        />

        <TextField
          id="message"
          name="message"
          label="Mensagem"
          required
          multiline
          minRows={5}
          defaultValue={state.values.message}
          error={Boolean(state.errors.message)}
          helperText={state.errors.message ?? " "}
          slotProps={{ htmlInput: { maxLength: 4000 } }}
          sx={squareInputSx}
        />

        {/* Honeypot anti-spam: escondido de humanos, atrativo para bots. */}
        <Box aria-hidden sx={{ position: "absolute", left: -9999, width: 0, height: 0, overflow: "hidden" }}>
          <label htmlFor="company">Empresa</label>
          <input id="company" name="company" type="text" tabIndex={-1} autoComplete="off" />
        </Box>

        {/* Script oficial da Cloudflare Turnstile */}
        <Script
          src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit"
          strategy="afterInteractive"
          onLoad={() => setScriptLoaded(true)}
        />

        {/* Cloudflare Turnstile Widget */}
        <Box sx={{ minHeight: "65px", my: 0.5 }}>
          <div ref={turnstileContainerRef} />
          {state.errors.captcha && (
            <Typography variant="caption" sx={{ color: "error.main", mt: 0.5, display: "block" }}>
              {state.errors.captcha}
            </Typography>
          )}
        </Box>

        <Button
          type="submit"
          variant="contained"
          size="large"
          loading={pending}
          loadingPosition="start"
          sx={{
            alignSelf: "flex-start",
            borderRadius: 0,
            py: "14px",
            px: "36px",
            minHeight: "52px",
            fontWeight: 700,
            letterSpacing: "0.02em",
          }}
        >
          Enviar mensagem
        </Button>

        <Box aria-live="polite" role="status">
          {state.status !== "idle" && state.message ? (
            <Alert
              severity={state.status === "success" ? "success" : "error"}
              variant="outlined"
              sx={{ borderRadius: 0 }}
            >
              {state.message}
            </Alert>
          ) : (
            <Box component="span" sx={visuallyHidden} />
          )}
        </Box>
      </Stack>
    </Box>
  );
}
