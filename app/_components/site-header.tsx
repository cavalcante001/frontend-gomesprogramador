"use client";

import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import { site } from "@/content/site";

const links = [
  { href: "/#formacao", label: "Formação" },
  { href: "/#experiencia", label: "Experiência" },
  { href: "/#certificacoes", label: "Certificações" },
  { href: "/#projetos", label: "Projetos" },
  { href: "/#artigos", label: "Artigos" },
  { href: "/#contato", label: "Contato" },
];

export function SiteHeader() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  return (
    // fixed (não sticky): tira o header do fluxo do documento, para o vídeo
    // do Hero poder se estender por baixo dele — ver o -mt/pt compensatório
    // em Hero (app/_components/hero.tsx).
    <AppBar position="fixed">
      <Container maxWidth="lg" disableGutters>
        <Toolbar sx={{ px: { xs: 2, sm: 3 }, minHeight: { xs: 72, sm: 88 } }}>
          <Typography
            component="a"
            href="/#inicio"
            sx={{
              fontFamily: "var(--font-fira-code), ui-monospace, monospace",
              fontSize: { xs: 17, sm: 20 },
              fontWeight: 700,
              letterSpacing: "-0.01em",
              color: "text.primary",
              textDecoration: "none",
              flexGrow: 1,
            }}
          >
            <Box component="span" sx={{ color: "primary.main" }}>
              &lt;
            </Box>
            {site.name}
            <Box component="span" sx={{ color: "primary.main" }}>
              /&gt;
            </Box>
          </Typography>

          {/* Desktop */}
          <Box sx={{ display: { xs: "none", md: "flex" }, alignItems: "center", gap: 2 }}>
            {links.map((link) => (
              <Button key={link.href} href={link.href} color="inherit" size="medium">
                {link.label}
              </Button>
            ))}
            <Button
              href="/api/curriculo"
              target="_blank"
              rel="noopener noreferrer"
              variant="outlined"
              size="small"
              startIcon={<FileDownloadIcon />}
              sx={{
                ml: 1,
                borderColor: "rgba(255, 255, 255, 0.2)",
                color: "primary.light",
                textTransform: "none",
                fontSize: 13.5,
                fontWeight: 600,
                "&:hover": {
                  borderColor: "primary.main",
                  bgcolor: "rgba(37, 99, 235, 0.08)",
                },
              }}
            >
              Currículo PDF
            </Button>
          </Box>

          {/* Mobile */}
          <Box sx={{ display: { xs: "flex", md: "none" }, alignItems: "center", gap: 1.5 }}>
            <IconButton
              color="inherit"
              edge="end"
              aria-label="Abrir menu de navegação"
              aria-controls={anchorEl ? "menu-navegacao" : undefined}
              aria-haspopup="true"
              aria-expanded={anchorEl ? "true" : undefined}
              onClick={(event) => setAnchorEl(event.currentTarget)}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-navegacao"
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={() => setAnchorEl(null)}
            >
              {links.map((link) => (
                <MenuItem
                  key={link.href}
                  component="a"
                  href={link.href}
                  onClick={() => setAnchorEl(null)}
                >
                  {link.label}
                </MenuItem>
              ))}
              <MenuItem
                component="a"
                href="/api/curriculo"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setAnchorEl(null)}
                sx={{ color: "primary.light", fontWeight: 600, gap: 1 }}
              >
                <FileDownloadIcon fontSize="small" />
                Visualizar Currículo
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
