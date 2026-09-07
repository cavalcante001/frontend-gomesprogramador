import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import Typography from "@mui/material/Typography";
import CodeIcon from "@mui/icons-material/Code";
import { Section } from "./section";

export function Projects() {
  return (
    <Section
      id="projetos"
      eyebrow="Projetos"
      title="Projetos"
      description="Aplicações autorais, protótipos de alta complexidade e soluções de código aberto."
      decorIcon={CodeIcon}
      decorSide="left"
    >
      <Box
        sx={{
          py: 6,
          px: 3,
          textAlign: "center",
          borderRadius: 2,
          border: "1px dashed",
          borderColor: "divider",
          bgcolor: "rgba(255, 255, 255, 0.02)",
        }}
      >
        <Chip
          label="Em breve"
          size="small"
          color="primary"
          variant="outlined"
          sx={{ mb: 2, fontWeight: 600 }}
        />
        <Typography variant="h4" component="h3" sx={{ fontWeight: 700, mb: 1 }}>
          Novos projetos em desenvolvimento
        </Typography>
        <Typography
          color="text.secondary"
          sx={{ maxWidth: 540, mx: "auto", fontSize: { xs: 14, sm: 15 }, lineHeight: 1.7 }}
        >
          Projetos autorais explorando arquiteturas modernas, microserviços em Node.js,
          orquestração com Kubernetes, soluções escaláveis e interfaces com Next.js estarão
          disponíveis para demonstração em breve.
        </Typography>
      </Box>
    </Section>
  );
}
