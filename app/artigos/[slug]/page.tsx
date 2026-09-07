import type { Metadata } from "next";
import { notFound } from "next/navigation";
import NextLink from "next/link";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Image from "next/image";
import perfil from "@/public/img/perfil.jpeg";
import { articles, site } from "@/content/site";

const dateFormatter = new Intl.DateTimeFormat("pt-BR", {
  day: "2-digit",
  month: "long",
  year: "numeric",
});

function findArticle(slug: string) {
  return articles.find((article) => article.slug === slug);
}

/** Gera uma rota estática por artigo no build. */
export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/artigos/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const article = findArticle(slug);

  if (!article) return { title: "Artigo não encontrado" };

  return {
    title: article.title,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      url: `${site.url}/artigos/${article.slug}`,
      siteName: site.name,
      locale: "pt_BR",
      type: "article",
      publishedTime: article.date,
    },
  };
}

export default async function ArticlePage({ params }: PageProps<"/artigos/[slug]">) {
  const { slug } = await params;
  const article = findArticle(slug);

  if (!article) notFound();

  // Próximo artigo (mais recente antes deste) para o rodapé da leitura.
  const ordered = [...articles].sort((a, b) => b.date.localeCompare(a.date));
  const position = ordered.findIndex((item) => item.slug === article.slug);
  const next = ordered[position + 1] ?? ordered[0];
  const hasNext = next && next.slug !== article.slug;

  return (
    <Container maxWidth="md" sx={{ py: { xs: 6, sm: 10 } }}>
      <NextLink href="/#artigos" style={{ textDecoration: "none" }}>
        <Box
          sx={{
            display: "inline-flex",
            alignItems: "center",
            gap: 0.75,
            color: "text.secondary",
            fontSize: 14,
            "&:hover": { color: "primary.main" },
          }}
        >
          <ArrowBackIcon sx={{ fontSize: 16 }} />
          Todos os artigos
        </Box>
      </NextLink>

      <Box component="article" sx={{ mt: 4 }}>
        <Stack direction="row" spacing={1.5} useFlexGap sx={{ alignItems: "center", flexWrap: "wrap" }}>
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

        <Typography variant="h1" component="h1" sx={{ mt: 2.5, fontSize: { xs: "2rem", sm: "2.75rem" } }}>
          {article.title}
        </Typography>

        <Typography
          sx={{ mt: 3, fontSize: 20, lineHeight: 1.6, color: "text.secondary", fontWeight: 300 }}
        >
          {article.excerpt}
        </Typography>

        {/* Assinatura do autor */}
        <Stack direction="row" spacing={1.75} sx={{ mt: 4, alignItems: "center" }}>
          <Avatar
            sx={{ width: 48, height: 48, border: 1, borderColor: "divider" }}
            aria-hidden
          >
            <Image
              src={perfil}
              alt=""
              width={48}
              height={48}
              placeholder="blur"
              sizes="48px"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </Avatar>

          <Box>
            <Typography sx={{ fontSize: 14, fontWeight: 500 }}>{site.person}</Typography>
            <Typography sx={{ fontSize: 13, color: "text.secondary" }}>{site.role}</Typography>
          </Box>
        </Stack>

        <Divider sx={{ my: 5 }} />

        {article.body.map((paragraph, index) => (
          <Typography
            key={index}
            sx={{ fontSize: 17, lineHeight: 1.85, mb: 3, "&:last-of-type": { mb: 0 } }}
          >
            {paragraph}
          </Typography>
        ))}
      </Box>

      <Divider sx={{ my: 6 }} />

      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={2}
        sx={{ justifyContent: "space-between", alignItems: { xs: "flex-start", sm: "center" } }}
      >
        <NextLink href="/#contato" style={{ textDecoration: "none" }}>
          <Box sx={{ color: "primary.main", fontSize: 14, fontWeight: 600 }}>
            Gostou? Me chame para conversar
          </Box>
        </NextLink>

        {hasNext ? (
          <NextLink href={`/artigos/${next.slug}`} style={{ textDecoration: "none" }}>
            <Box
              sx={{
                display: "inline-flex",
                alignItems: "center",
                gap: 0.75,
                color: "text.secondary",
                fontSize: 14,
                textAlign: { sm: "right" },
                "&:hover": { color: "primary.main" },
              }}
            >
              Próximo: {next.title}
              <ArrowForwardIcon sx={{ fontSize: 16, flexShrink: 0 }} />
            </Box>
          </NextLink>
        ) : null}
      </Stack>
    </Container>
  );
}
