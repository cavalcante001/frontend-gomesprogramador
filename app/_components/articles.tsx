import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import StorageIcon from "@mui/icons-material/Storage";
import NextLink from "next/link";
import { articles } from "@/content/site";
import { Section } from "./section";

const dateFormatter = new Intl.DateTimeFormat("pt-BR", {
  day: "2-digit",
  month: "short",
  year: "numeric",
});

/**
 * NextLink é usado como ELEMENTO externo, nunca como `component={NextLink}`:
 * passar um componente por prop para um Client Component do MUI cruza uma
 * função pela fronteira RSC e o build recusa.
 */
const linkReset = {
  display: "block",
  textDecoration: "none",
  color: "inherit",
} as const;

export function Articles() {
  // Mais recentes primeiro, independente da ordem do arquivo de conteúdo.
  const recent = [...articles].sort((a, b) => b.date.localeCompare(a.date)).slice(0, 4);

  return (
    <Section
      id="artigos"
      eyebrow="Escrita"
      title="Artigos"
      description="Reflexões sobre carreira, engenharia de software e desenvolvimento autoral."
      decorIcon={StorageIcon}
      decorSide="right"
    >
      {recent.length === 0 ? (
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
            Artigos técnicos em elaboração
          </Typography>
          <Typography
            color="text.secondary"
            sx={{ maxWidth: 540, mx: "auto", fontSize: { xs: 14, sm: 15 }, lineHeight: 1.7 }}
          >
            Novos conteúdos autorais abordando arquitetura de software, ecossistema Node.js,
            Kubernetes, práticas modernas de desenvolvimento e desafios reais de engenharia estarão
            disponíveis em breve.
          </Typography>
        </Box>
      ) : (
        <Box sx={{ borderTop: 1, borderColor: "divider" }}>
          {recent.map((article) => (
            <Box key={article.slug}>
              <NextLink href={`/artigos/${article.slug}`} style={linkReset}>
                <Box
                  sx={{
                    py: 3,
                    px: { xs: 1, sm: 2 },
                    transition: "background-color 120ms",
                    "&:hover": { bgcolor: "action.hover" },
                    "&:hover h3": { color: "primary.main" },
                  }}
                >
                  <Stack
                    direction="row"
                    spacing={1.5}
                    useFlexGap
                    sx={{ alignItems: "center", flexWrap: "wrap" }}
                  >
                    <Chip label={article.tag} size="small" color="primary" variant="outlined" />
                    <Typography
                      component="time"
                      dateTime={article.date}
                      sx={{ fontSize: 13, color: "text.secondary" }}
                    >
                      {dateFormatter.format(new Date(`${article.date}T12:00:00`))}
                    </Typography>
                    <Typography sx={{ fontSize: 13, color: "text.secondary" }}>
                      · {article.readingTime} de leitura
                    </Typography>
                  </Stack>

                  <Typography
                    variant="h3"
                    component="h3"
                    sx={{ mt: 1.5, lineHeight: 1.35, transition: "color 120ms" }}
                  >
                    {article.title}
                  </Typography>

                  <Typography color="text.secondary" sx={{ mt: 1, maxWidth: 680, lineHeight: 1.7 }}>
                    {article.excerpt}
                  </Typography>

                  <Stack
                    direction="row"
                    spacing={0.75}
                    sx={{
                      mt: 1.5,
                      alignItems: "center",
                      color: "primary.main",
                      fontSize: 13,
                      fontWeight: 600,
                    }}
                  >
                    <span>Ler artigo</span>
                    <ArrowForwardIcon sx={{ fontSize: 16 }} />
                  </Stack>
                </Box>
              </NextLink>
              <Divider />
            </Box>
          ))}
        </Box>
      )}
    </Section>
  );
}
