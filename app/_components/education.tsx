import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import DataObjectIcon from "@mui/icons-material/DataObject";
import SchoolIcon from "@mui/icons-material/School";
import { education } from "@/content/site";
import { Section } from "./section";

export function Education() {
  return (
    <Section
      id="formacao"
      eyebrow="Educação"
      title="Formação acadêmica"
      description="Onde estudei e o que estudei."
      decorIcon={DataObjectIcon}
      decorSide="left"
    >
      <Box>
        {education.map((course, index) => (
          <Box key={`${course.institution}-${course.period}`}>
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={2.5}
              sx={{ py: index === 0 ? 0 : 4, pb: 4, alignItems: "flex-start" }}
            >
              <Box
                sx={{
                  display: "grid",
                  placeItems: "center",
                  flexShrink: 0,
                  width: 44,
                  height: 44,
                  borderRadius: 2,
                  border: 1,
                  borderColor: "divider",
                  bgcolor: "background.paper",
                  color: "primary.main",
                }}
              >
                <SchoolIcon fontSize="small" />
              </Box>

              <Box>
                <Typography variant="h3" component="h3">
                  {course.field}
                </Typography>

                <Typography sx={{ mt: 0.5, fontSize: 14, color: "primary.main" }}>
                  {course.institution}
                  <Box component="span" sx={{ color: "text.secondary" }}>
                    {" · "}
                    {course.degree}
                    {" · "}
                    {course.period}
                  </Box>
                </Typography>

                {course.description ? (
                  <Typography
                    color="text.secondary"
                    sx={{ mt: 1.5, maxWidth: 680, lineHeight: 1.7 }}
                  >
                    {course.description}
                  </Typography>
                ) : null}
              </Box>
            </Stack>

            {index < education.length - 1 ? <Divider /> : null}
          </Box>
        ))}
      </Box>
    </Section>
  );
}
