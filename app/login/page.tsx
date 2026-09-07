import type { Metadata } from "next";
import NextLink from "next/link";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { site } from "@/content/site";
import { LoginForm } from "./_components/login-form";

export const metadata: Metadata = {
  title: "Entrar",
  robots: { index: false, follow: false },
};

export default function LoginPage() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        "@supports (height: 100dvh)": { minHeight: "100dvh" },
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        py: { xs: 4, sm: 6 },
        px: 2,
      }}
    >
      <Container maxWidth="sm" sx={{ width: "100%" }}>
        <NextLink href="/#inicio" style={{ textDecoration: "none" }}>
          <Box
            sx={{
              display: "inline-flex",
              alignItems: "center",
              gap: 0.75,
              color: "text.secondary",
              fontSize: 14,
              mb: 3,
              transition: "color 0.2s ease, transform 0.2s ease",
              "&:hover": {
                color: "primary.main",
                transform: "translateX(-2px)",
              },
            }}
          >
            <ArrowBackIcon sx={{ fontSize: 16 }} />
            Voltar ao início
          </Box>
        </NextLink>

        <Card>
          <CardContent sx={{ p: { xs: 3, sm: 5 } }}>
            <Typography variant="h2" component="h1" sx={{ fontSize: "1.75rem" }}>
              Entrar
            </Typography>

            <Typography color="text.secondary" sx={{ mt: 1, fontSize: 14 }}>
              Acesse sua conta em {site.name}.
            </Typography>

            <Box sx={{ mt: 4 }}>
              <LoginForm />
            </Box>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
}
