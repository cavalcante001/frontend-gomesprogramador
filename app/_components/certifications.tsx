"use client";

import { useState } from "react";
import Image from "next/image";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import Chip from "@mui/material/Chip";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import CodeIcon from "@mui/icons-material/Code";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import StarIcon from "@mui/icons-material/Star";
import VerifiedIcon from "@mui/icons-material/Verified";
import { visuallyHidden } from "@mui/utils";
import { certifications } from "@/content/site";
import { Section } from "./section";

export function Certifications() {
  const [showAll, setShowAll] = useState(false);
  const displayedCertifications = showAll ? certifications : certifications.slice(0, 4);
  return (
    <Section
      id="certificacoes"
      eyebrow="Credenciais"
      title="Certificações"
      description="Cada certificação abaixo pode ser validada na fonte oficial emissora."
      decorIcon={CodeIcon}
      decorSide="left"
    >
      <Grid container spacing={2.5}>
        {displayedCertifications.map((cert) => (
          <Grid key={`${cert.name}-${cert.verifyUrl}`} size={{ xs: 12, sm: 6 }}>
            <Card
              sx={{
                height: "100%",
                position: "relative",
                transition: "transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease",
                border: cert.featured
                  ? "1px solid rgba(0, 145, 255, 0.45)"
                  : "1px solid rgba(255, 255, 255, 0.08)",
                bgcolor: cert.featured ? "rgba(0, 145, 255, 0.03)" : "background.paper",
                boxShadow: cert.featured
                  ? "0 0 20px rgba(0, 145, 255, 0.12)"
                  : "none",
                "&:hover": {
                  transform: "translateY(-3px)",
                  borderColor: "primary.main",
                  boxShadow: "0 8px 24px rgba(0, 145, 255, 0.2)",
                },
              }}
            >
              <CardActionArea
                href={cert.verifyUrl}
                target="_blank"
                rel="noopener noreferrer"
                sx={{ height: "100%", alignItems: "stretch" }}
              >
                <CardContent
                  sx={{ height: "100%", display: "flex", flexDirection: "column", p: 3 }}
                >
                  <Stack direction="row" sx={{ justifyContent: "space-between", alignItems: "center" }}>
                    <Stack direction="row" spacing={1.5} sx={{ alignItems: "center" }}>
                      {cert.icon ? (
                        <Box
                          sx={{
                            width: 38,
                            height: 38,
                            position: "relative",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            borderRadius: "6px",
                            overflow: "hidden",
                            bgcolor: "rgba(255, 255, 255, 0.05)",
                            border: "1px solid rgba(255, 255, 255, 0.08)",
                            p: 0.5,
                            flexShrink: 0,
                          }}
                        >
                          <Image
                            src={cert.icon}
                            alt={`${cert.name} badge`}
                            width={32}
                            height={32}
                            style={{ objectFit: "contain" }}
                          />
                        </Box>
                      ) : (
                        <VerifiedIcon color="primary" />
                      )}
                      {cert.featured ? (
                        <Chip
                          label={
                            <Box component="span" sx={{ display: "inline-flex", alignItems: "center", gap: 0.5 }}>
                              <StarIcon sx={{ color: "#ffffff", fontSize: 13 }} />
                              <span>Destaque</span>
                            </Box>
                          }
                          size="small"
                          color="primary"
                          sx={{
                            height: 22,
                            fontSize: 11,
                            fontWeight: 700,
                            letterSpacing: "0.02em",
                          }}
                        />
                      ) : null}
                    </Stack>
                    <OpenInNewIcon fontSize="small" sx={{ color: "text.secondary" }} />
                  </Stack>

                  <Typography variant="h3" component="h3" sx={{ mt: 2, lineHeight: 1.35 }}>
                    {cert.name}
                  </Typography>

                  <Typography color="text.secondary" sx={{ mt: 0.5, fontSize: 14 }}>
                    {cert.issuer} · {cert.issued}
                  </Typography>

                  {cert.credentialId ? (
                    <Typography
                      sx={{
                        mt: 1.5,
                        fontFamily: "ui-monospace, monospace",
                        fontSize: 12,
                        color: "text.secondary",
                        opacity: 0.7,
                      }}
                    >
                      ID: {cert.credentialId}
                    </Typography>
                  ) : null}

                  <Box sx={{ flexGrow: 1 }} />

                  <Typography sx={{ mt: 2.5, color: "primary.main", fontSize: 13, fontWeight: 600 }}>
                    Validar certificado
                    <Box component="span" sx={visuallyHidden}>
                      {" "}
                      {cert.name} (abre em nova aba)
                    </Box>
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>

      {certifications.length > 4 && (
        <Box sx={{ mt: 4, display: "flex", justifyContent: "center" }}>
          <Button
            onClick={() => setShowAll((prev) => !prev)}
            variant="outlined"
            size="large"
            endIcon={showAll ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            sx={{
              borderRadius: 0,
              px: 4,
              py: 1.25,
              borderColor: "rgba(255, 255, 255, 0.15)",
              color: "text.primary",
              fontWeight: 600,
              letterSpacing: "0.02em",
              "&:hover": {
                borderColor: "primary.main",
                bgcolor: "rgba(0, 145, 255, 0.08)",
              },
            }}
          >
            {showAll ? "Ver menos certificações" : `Ver mais (${certifications.length - 4} outras certificações)`}
          </Button>
        </Box>
      )}
    </Section>
  );
}
