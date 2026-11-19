import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Image from "next/image";
import perfil from "@/public/img/perfil.jpeg";
import { site } from "@/content/site";
import { TypedHeadline } from "./typed-headline";

/**
 * Recorte angular da foto — dois cantos opostos cortados (hexágono), a
 * mesma linguagem visual dos botões acima, em vez do círculo padrão do
 * Avatar do MUI. Usado tanto na foto quanto na moldura vermelha atrás dela.
 */
const photoClipPath =
  "polygon(18% 0%, 100% 0%, 100% 82%, 82% 100%, 0% 100%, 0% 18%)";

/** Envolve cada ocorrência exata de uma frase em `<strong>` com a cor de destaque. */
function highlight(text: string, phrases: string[]) {
  if (phrases.length === 0) return text;
  const pattern = new RegExp(`(${phrases.map((p) => p.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|")})`, "g");
  return text.split(pattern).map((chunk, index) =>
    phrases.includes(chunk) ? (
      <Box key={index} component="strong" sx={{ color: "text.primary", fontWeight: 700 }}>
        {chunk}
      </Box>
    ) : (
      chunk
    )
  );
}

export function Hero() {
  // Destaca a última palavra do headline, como o "Return" da referência.
  const headlineWords = site.headline.trim().split(" ");
  const headlineAccent = headlineWords.pop();
  const headlineRest = headlineWords.join(" ");

  return (
    <Box
      component="section"
      id="inicio"
      sx={{
        position: "relative",
        overflow: "hidden",
        // No desktop puxa sob o header (-88px). No mobile, mt: 0 evita que o topo suba atrás do header.
        mt: { xs: 0, lg: "-88px" },
        // Altura automática no mobile para fluir naturalmente e não prender conteúdo
        height: { xs: "auto", lg: "100vh" },
        "@supports (height: 100dvh)": { height: { xs: "auto", lg: "100dvh" } },
        minHeight: { xs: "auto", lg: "720px" },
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        // pt compensatório: no mobile considera a barra fixa de 72px + folga de 32px
        pt: { xs: "104px", sm: "120px", lg: "88px" },
        pb: { xs: "64px", lg: "20px" },
        boxSizing: "border-box",
      }}
    >
      {/* Camada 1: gradiente estático sutil */}
      <Box
        aria-hidden
        sx={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(60% 55% at 50% 0%, rgba(37, 99, 235, 0.08) 0%, transparent 72%)",
        }}
      />

      {/*
        Camada 2: vídeo de fundo em loop.
        TODO: adicione seu arquivo em public/video/hero-bg.mp4 (mp4/H.264, mudo,
        curto, idealmente < 8MB). Sem o arquivo, esta camada fica transparente e
        o gradiente estático acima permanece como fundo — nada quebra.
      */}
      <Box
        component="video"
        aria-hidden
        autoPlay
        muted
        loop
        playsInline
        preload="none"
        sx={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          opacity: 0.15,
          "@media (prefers-reduced-motion: reduce)": { display: "none" },
        }}
      >
        <source src="/video/hero-bg.mp4" type="video/mp4" />
      </Box>

      {/* Camada 3: véu DevDojo Academy (#16161c) */}
      <Box
        aria-hidden
        sx={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(180deg, rgba(22, 22, 28, 0.4) 0%, rgba(22, 22, 28, 0.85) 70%, rgba(22, 22, 28, 1) 100%)",
        }}
      />

      <Container
        maxWidth="lg"
        sx={{
          position: "relative",
          width: "100%",
          flex: "1 1 0%",
          display: "flex",
          alignItems: "center",
          py: 0,
        }}
      >
        <Stack
          direction={{ xs: "column", lg: "row" }}
          useFlexGap
          sx={{
            alignItems: { xs: "flex-start", lg: "center" },
            gap: { xs: "64px", lg: "160px" },
          }}
        >
          <Box
            sx={{
              order: { xs: -1, lg: 1 },
              flexShrink: 0,
              position: "relative",
              width: { xs: 200, sm: 240, md: 300 },
              aspectRatio: "1",
              mx: { xs: "auto", lg: 0 },
              mt: { xs: 2, lg: 0 },
            }}
          >
            {/* Glow ambiente — separado do recorte, porque clip-path também
                cortaria um box-shadow aplicado direto na forma. */}
            <Box
              aria-hidden
              sx={{
                position: "absolute",
                inset: "-20%",
                borderRadius: "50%",
                background:
                  "radial-gradient(closest-side, rgba(0, 145, 255, 0.35), transparent 70%)",
                filter: "blur(4px)",
              }}
            />

            {/*
              Borda que "percorre" o contorno em vez de uma borda fixa
              (inspirado em abdullah-warraich-ch.vercel.app): o ::before é um
              conic-gradient gigante (250%) girando atrás; `isolation: isolate`
              + `overflow: hidden` só deixam à mostra a fresta de ~3px entre
              este wrapper e a foto por dentro — essa fresta é o que parece
              "correr" ao redor conforme o gradiente gira.
            */}
            <Box
              sx={{
                position: "relative",
                width: "100%",
                height: "100%",
                p: "3px",
                isolation: "isolate",
                overflow: "hidden",
                clipPath: photoClipPath,
                "&::before": {
                  content: '""',
                  position: "absolute",
                  zIndex: -1,
                  top: "50%",
                  left: "50%",
                  width: "250%",
                  aspectRatio: "1",
                  background:
                    "conic-gradient(transparent 0deg, transparent 110deg, #0091ff 150deg, #0091ff 210deg, transparent 250deg, transparent 360deg)",
                  transform: "translate(-50%, -50%) rotate(0deg)",
                  animation: "heroPhotoBorderSpin 4s linear infinite",
                },
                "@keyframes heroPhotoBorderSpin": {
                  from: { transform: "translate(-50%, -50%) rotate(0deg)" },
                  to: { transform: "translate(-50%, -50%) rotate(360deg)" },
                },
                "@media (prefers-reduced-motion: reduce)": {
                  "&::before": { animation: "none" },
                },
              }}
            >
              <Box
                sx={{
                  position: "relative",
                  width: "100%",
                  height: "100%",
                  clipPath: photoClipPath,
                  overflow: "hidden",
                  bgcolor: "background.paper",
                }}
              >
                <Image
                  src={perfil}
                  alt={`Retrato de ${site.person}`}
                  fill
                  sizes="(max-width: 600px) 220px, (max-width: 900px) 260px, 300px"
                  priority
                  style={{ objectFit: "cover" }}
                />
              </Box>
            </Box>
          </Box>

          <Box sx={{ flex: 1, maxWidth: 680 }}>
            <Typography
              component="div"
              sx={{
                mb: 2,
                fontFamily: "var(--font-fira-code), ui-monospace, monospace",
                fontSize: { xs: "0.875rem", sm: "1rem" },
                color: "text.secondary",
                letterSpacing: "-0.01em",
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                gap: 0.75,
              }}
            >
              <Box component="span" sx={{ color: "primary.main", fontWeight: 600 }}>
                const
              </Box>{" "}
              <Box component="span" sx={{ color: "#e2e8f0", fontWeight: 500 }}>
                nome
              </Box>{" "}
              <Box component="span" sx={{ color: "primary.main" }}>
                =
              </Box>{" "}
              <Box component="span" sx={{ color: "#38bdf8", fontWeight: 500 }}>
                &quot;{site.person}&quot;
              </Box>
              <Box component="span" sx={{ color: "text.secondary" }}>
                ;
              </Box>
            </Typography>

            <Typography variant="h1" component="h1" sx={{ color: "text.primary" }}>
              <TypedHeadline prefix={`${headlineRest} `} accent={headlineAccent ?? ""} />
            </Typography>

            <Typography
              sx={{
                mt: 3,
                fontSize: { xs: "1.0625rem", sm: "1.1875rem" },
                lineHeight: 1.7,
                color: "text.secondary",
              }}
            >
              {site.summary}
            </Typography>

            {/* Links sociais e e-mail com visual DevDojo Tech — empilhados no mobile */}
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={1.5}
              sx={{
                mt: 2.5,
                width: { xs: "100%", sm: "auto" },
                alignItems: { xs: "stretch", sm: "center" },
              }}
            >
              <Box
                component="a"
                href={site.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn de Paulo Gomes"
                sx={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: { xs: "center", sm: "flex-start" },
                  gap: 0.8,
                  px: 1.75,
                  py: 1,
                  fontSize: "0.875rem",
                  fontWeight: 600,
                  color: "#ffffff",
                  bgcolor: "rgba(255, 255, 255, 0.05)",
                  border: "1px solid rgba(255, 255, 255, 0.12)",
                  textDecoration: "none",
                  transition: "all 0.2s ease",
                  "&:hover": {
                    bgcolor: "rgba(0, 145, 255, 0.15)",
                    borderColor: "primary.main",
                    color: "primary.light",
                    transform: "translateY(-1px)",
                  },
                }}
              >
                <LinkedInIcon sx={{ fontSize: 19, color: "#0091ff" }} />
                <span>LinkedIn</span>
              </Box>

              <Box
                component="a"
                href={site.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub de Paulo Gomes"
                sx={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: { xs: "center", sm: "flex-start" },
                  gap: 0.8,
                  px: 1.75,
                  py: 1,
                  fontSize: "0.875rem",
                  fontWeight: 600,
                  color: "#ffffff",
                  bgcolor: "rgba(255, 255, 255, 0.05)",
                  border: "1px solid rgba(255, 255, 255, 0.12)",
                  textDecoration: "none",
                  transition: "all 0.2s ease",
                  "&:hover": {
                    bgcolor: "rgba(255, 255, 255, 0.12)",
                    borderColor: "rgba(255, 255, 255, 0.3)",
                    transform: "translateY(-1px)",
                  },
                }}
              >
                <GitHubIcon sx={{ fontSize: 19 }} />
                <span>GitHub</span>
              </Box>

              <Box
                component="a"
                href={`mailto:${site.email}`}
                aria-label="Enviar e-mail para Paulo Gomes"
                sx={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: { xs: "center", sm: "flex-start" },
                  gap: 0.8,
                  px: 1.75,
                  py: 1,
                  fontSize: "0.875rem",
                  fontWeight: 600,
                  color: "#ffffff",
                  bgcolor: "rgba(255, 255, 255, 0.05)",
                  border: "1px solid rgba(255, 255, 255, 0.12)",
                  textDecoration: "none",
                  transition: "all 0.2s ease",
                  "&:hover": {
                    bgcolor: "rgba(0, 145, 255, 0.15)",
                    borderColor: "primary.main",
                    color: "primary.light",
                    transform: "translateY(-1px)",
                  },
                }}
              >
                <EmailIcon sx={{ fontSize: 19, color: "primary.main" }} />
                <span>{site.email}</span>
              </Box>
            </Stack>
          </Box>
        </Stack>
      </Container>

      {/* Botão de rolar: visível apenas no desktop/telas grandes para não conflitar nem sobrepor conteúdo no mobile */}
      <Box
        component="a"
        href="#formacao"
        aria-label="Rolar para a próxima seção"
        sx={{
          position: "absolute",
          bottom: { xs: 12, sm: 16 },
          left: "50%",
          transform: "translateX(-50%)",
          display: { xs: "none", lg: "inline-flex" },
          alignItems: "center",
          justifyContent: "center",
          width: { xs: 60, sm: 68 },
          height: { xs: 60, sm: 68 },
          borderRadius: "50%",
          border: "1.5px solid rgba(255, 255, 255, 0.18)",
          color: "rgba(255, 255, 255, 0.75)",
          bgcolor: "rgba(22, 22, 28, 0.4)",
          backdropFilter: "blur(4px)",
          textDecoration: "none",
          transition: "border-color 0.2s, color 0.2s, transform 0.2s",
          animation: "heroScrollBounce 2s ease-in-out infinite",
          "@keyframes heroScrollBounce": {
            "0%, 100%": { transform: "translateY(0)" },
            "50%": { transform: "translateY(5px)" },
          },
          "&:hover": {
            borderColor: "primary.main",
            color: "primary.main",
            transform: "translateY(2px)",
          },
          "@media (prefers-reduced-motion: reduce)": { animation: "none" },
        }}
      >
        <KeyboardArrowDownIcon sx={{ fontSize: { xs: 34, sm: 38 } }} />
      </Box>
    </Box>
  );
}
