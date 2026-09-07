import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import type { SvgIconProps } from "@mui/material/SvgIcon";
import type { ComponentType, ReactNode } from "react";

type SectionProps = {
  id: string;
  eyebrow: string;
  title: string;
  description?: string;
  children: ReactNode;
  /** Ícone decorativo grande e discreto ao fundo, tipo devdojo.academy. */
  decorIcon?: ComponentType<SvgIconProps>;
  /** De que lado o ícone decorativo aparece. */
  decorSide?: "left" | "right";
};

export function Section({
  id,
  eyebrow,
  title,
  description,
  children,
  decorIcon: DecorIcon,
  decorSide = "right",
}: SectionProps) {
  return (
    <Box
      component="section"
      id={id}
      aria-labelledby={`${id}-title`}
      sx={{ position: "relative", overflow: "hidden", py: { xs: 8, sm: 12 } }}
    >
      {DecorIcon ? (
        <DecorIcon
          aria-hidden
          sx={{
            position: "absolute",
            top: "50%",
            [decorSide]: { xs: "-60px", sm: "-40px", lg: "0px" },
            transform: "translateY(-50%)",
            fontSize: { xs: 220, sm: 320, lg: 380 },
            color: "primary.main",
            opacity: 0.05,
            pointerEvents: "none",
          }}
        />
      ) : null}

      <Container maxWidth="lg" sx={{ position: "relative" }}>
        {/* "//" imita um comentário de código, reforçando a identidade
            "developer" do site — combina com a logo e o "const nome" do Hero. */}
        <Typography
          variant="overline"
          component="p"
          sx={{ fontFamily: "var(--font-fira-code), ui-monospace, monospace" }}
        >
          {`// ${eyebrow}`}
        </Typography>

        <Typography id={`${id}-title`} variant="h2" component="h2" sx={{ mt: 1 }}>
          {title}
        </Typography>

        {description ? (
          <Typography color="text.secondary" sx={{ mt: 2, maxWidth: 640 }}>
            {description}
          </Typography>
        ) : null}

        <Box sx={{ mt: 6 }}>{children}</Box>
      </Container>
    </Box>
  );
}
