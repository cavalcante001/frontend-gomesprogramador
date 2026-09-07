import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import MemoryIcon from "@mui/icons-material/Memory";
import { site } from "@/content/site";
import { ContactForm } from "./contact-form";
import { Section } from "./section";

export function Contact() {
  return (
    <Section
      id="contato"
      eyebrow="Contato"
      title="Contate-me"
      description="Preencha o formulário abaixo e a mensagem chega direto na minha caixa de entrada."
      decorIcon={MemoryIcon}
      decorSide="left"
    >
      <Box sx={{ maxWidth: 560 }}>
        <ContactForm />
      </Box>
    </Section>
  );
}
