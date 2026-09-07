import Image from "next/image";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Timeline from "@mui/lab/Timeline";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TerminalIcon from "@mui/icons-material/Terminal";
import BusinessIcon from "@mui/icons-material/Business";
import { experiences } from "@/content/site";
import { Section } from "./section";

export function Experience() {
  return (
    <Section
      id="experiencia"
      eyebrow="Trajetória"
      title="Experiência profissional"
      description="Onde trabalhei, o que construí e com que ferramentas."
      decorIcon={TerminalIcon}
      decorSide="right"
    >
      <Timeline
        sx={{
          p: 0,
          m: 0,
          // Remove a coluna oposta vazia. Precisa espelhar o seletor do próprio
          // MUI (`:not(:has(...))::before`), senão empata em especificidade e perde.
          "& .MuiTimelineItem-root:not(:has(.MuiTimelineOppositeContent-root))::before": {
            flex: 0,
            padding: 0,
          },
        }}
      >
        {experiences.map((job, index) => (
          <TimelineItem key={`${job.company}-${job.period}`}>
            <TimelineSeparator>
              <TimelineDot
                color={job.current ? "primary" : "grey"}
                variant={job.current ? "filled" : "outlined"}
              />
              {index < experiences.length - 1 ? <TimelineConnector /> : null}
            </TimelineSeparator>

            <TimelineContent sx={{ pb: 6, pt: 0 }}>
              <Stack direction="row" spacing={2} sx={{ alignItems: "flex-start" }}>
                {job.logo ? (
                  <Box
                    sx={{
                      position: "relative",
                      width: { xs: 52, sm: 60 },
                      height: { xs: 52, sm: 60 },
                      borderRadius: 2,
                      overflow: "hidden",
                      bgcolor: "#ffffff",
                      p: 0.75,
                      boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
                      border: 1,
                      borderColor: "divider",
                      flexShrink: 0,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Image
                      src={job.logo}
                      alt={job.company}
                      fill
                      sizes="(max-width: 600px) 52px, 60px"
                      style={{
                        objectFit: "contain",
                        padding: "4px",
                      }}
                    />
                  </Box>
                ) : (
                  <Avatar
                    variant="rounded"
                    sx={{
                      width: { xs: 52, sm: 60 },
                      height: { xs: 52, sm: 60 },
                      borderRadius: 2,
                      bgcolor: "action.selected",
                      color: "text.secondary",
                      border: 1,
                      borderColor: "divider",
                      flexShrink: 0,
                    }}
                  >
                    <BusinessIcon fontSize="small" />
                  </Avatar>
                )}

                <Box sx={{ flex: 1, minWidth: 0 }}>
                  <Stack
                    direction="row"
                    spacing={1.5}
                    useFlexGap
                    sx={{ alignItems: "center", flexWrap: "wrap" }}
                  >
                    <Typography variant="h3" component="h3">
                      {job.role}
                    </Typography>
                    {job.current ? (
                      <Chip label="atual" size="small" color="primary" variant="outlined" />
                    ) : null}
                  </Stack>

                  <Typography sx={{ mt: 0.5, color: "primary.main", fontSize: 14 }}>
                    {job.company}
                    <Box component="span" sx={{ color: "text.secondary" }}>
                      {" · "}
                      {job.period}
                    </Box>
                  </Typography>

                  <Typography
                    color="text.secondary"
                    sx={{ mt: 1.5, maxWidth: 680, lineHeight: 1.7 }}
                  >
                    {job.description}
                  </Typography>

                  <Stack direction="row" spacing={1} useFlexGap sx={{ mt: 2, flexWrap: "wrap" }}>
                    {job.stack.map((tech) => (
                      <Chip key={tech} label={tech} size="small" variant="outlined" />
                    ))}
                  </Stack>
                </Box>
              </Stack>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </Section>
  );
}
