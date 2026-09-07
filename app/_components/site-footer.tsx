"use client";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { site } from "@/content/site";

export function SiteFooter() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Box component="footer" sx={{ borderTop: 1, borderColor: "divider", py: 5 }}>
      <Container maxWidth="lg">
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={2}
          sx={{
            justifyContent: "space-between",
            alignItems: "center",
            color: "text.secondary",
            fontSize: 13,
          }}
        >
          <Typography variant="inherit">
            © {new Date().getFullYear()} {site.name}
          </Typography>

          <Button
            onClick={scrollToTop}
            startIcon={<KeyboardArrowUpIcon sx={{ fontSize: 18 }} />}
            color="inherit"
            size="small"
            sx={{
              textTransform: "none",
              fontSize: 13,
              color: "text.secondary",
              border: "1px solid",
              borderColor: "divider",
              borderRadius: "999px",
              px: 2,
              py: 0.5,
              transition: "all 0.2s ease",
              "&:hover": {
                color: "primary.main",
                borderColor: "primary.main",
                bgcolor: "rgba(0, 145, 255, 0.08)",
                transform: "translateY(-2px)",
              },
            }}
          >
            Voltar ao topo
          </Button>
        </Stack>
      </Container>
    </Box>
  );
}
