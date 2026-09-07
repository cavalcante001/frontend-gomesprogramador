"use client";

import { createTheme } from "@mui/material/styles";

/**
 * Tema único do site — todo estilo sai daqui.
 * Material Design em modo escuro: fundo preto, primária vermelha (red-600
 * do Tailwind, oklch(57.7% .245 27.325) ≈ #dc2626).
 */
const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#0091ff",
      light: "#38bdf8",
      dark: "#0070f3",
      contrastText: "#ffffff",
    },
    background: {
      default: "#16161c",
      paper: "#16161c",
    },
    text: {
      primary: "#ffffff",
      secondary: "#8a8a95",
    },
    divider: "rgba(30, 30, 40, 0.9)",
  },

  shape: { borderRadius: 12 },

  typography: {
    fontFamily: "var(--font-roboto), Roboto, Helvetica, Arial, sans-serif",
    // Syne — fonte de display usada só nos títulos (h1-h3); o corpo do texto
    // continua em Roboto.
    h1: {
      fontFamily: "var(--font-syne), var(--font-roboto), sans-serif",
      fontSize: "clamp(2.25rem, 5vw, 3.25rem)",
      fontWeight: 700,
      lineHeight: 1.12,
      letterSpacing: "-0.02em",
    },
    h2: {
      fontFamily: "var(--font-syne), var(--font-roboto), sans-serif",
      fontSize: "clamp(1.75rem, 3.5vw, 2.25rem)",
      fontWeight: 700,
      letterSpacing: "-0.015em",
    },
    h3: {
      fontFamily: "var(--font-syne), var(--font-roboto), sans-serif",
      fontSize: "1.25rem",
      fontWeight: 600,
    },
    overline: { fontWeight: 700, letterSpacing: "0.18em", color: "#0091ff" },
  },

  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: {
          height: "100%",
          scrollBehavior: "smooth",
          // compensa a AppBar fixa (agora mais alta) ao pular para uma âncora
          scrollPaddingTop: "7rem",
        },
        "@media (prefers-reduced-motion: reduce)": {
          html: { scrollBehavior: "auto" },
          "*, *::before, *::after": {
            animationDuration: "0.01ms !important",
            transitionDuration: "0.01ms !important",
          },
        },
        body: {
          minHeight: "100%",
          display: "flex",
          flexDirection: "column",
        },
        "::selection": { background: "#0091ff", color: "#ffffff" },
      },
    },

    MuiAppBar: {
      defaultProps: { elevation: 0, color: "transparent" },
      styleOverrides: {
        root: {
          backgroundColor: "rgba(22, 22, 28, 0.3)",
          backdropFilter: "blur(8px)",
          WebkitBackdropFilter: "blur(8px)",
          borderBottom: "1px solid rgba(255, 255, 255, 0.06)",
        },
      },
    },

    MuiCard: {
      defaultProps: { elevation: 0 },
      styleOverrides: {
        root: {
          backgroundImage: "none",
          backgroundColor: "#111116",
          border: "1px solid #1e1e28",
        },
      },
    },

    MuiTextField: {
      defaultProps: { variant: "filled", fullWidth: true },
    },

    MuiButton: {
      styleOverrides: {
        root: { fontWeight: 600 },
      },
    },

    MuiChip: {
      styleOverrides: {
        root: { fontWeight: 500 },
      },
    },
  },
});

export default theme;
