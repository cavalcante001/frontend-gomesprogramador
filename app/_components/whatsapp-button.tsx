import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { site } from "@/content/site";

/** Link wa.me com a mensagem já preenchida. */
export const whatsappHref = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
  site.whatsappMessage
)}`;

const WHATSAPP_GREEN = "#25D366";

/**
 * `@keyframes` cru em vez do helper `keyframes()` do MUI — aquele helper é
 * client-only e quebraria o build ao ser chamado neste Server Component.
 */
const pulseKeyframes = {
  "0%": { transform: "scale(1)", opacity: 0.55 },
  "100%": { transform: "scale(1.9)", opacity: 0 },
};

const ringKeyframes = {
  "0%, 80%, 100%": { transform: "rotate(0deg)" },
  "82%": { transform: "rotate(-16deg)" },
  "85%": { transform: "rotate(13deg)" },
  "88%": { transform: "rotate(-9deg)" },
  "91%": { transform: "rotate(6deg)" },
  "94%": { transform: "rotate(-3deg)" },
  "97%": { transform: "rotate(0deg)" },
};

/**
 * FAB fixo no canto direito da tela, presente em toda a página.
 * Os anéis de pulso e o balanço do ícone respeitam `prefers-reduced-motion`.
 */
export function WhatsAppFloatingButton() {
  return (
    <Box sx={{ position: "fixed", bottom: 24, right: 24, zIndex: 1050 }}>
      {/* Anéis de pulso — decorativos, simulam um sinal de chamada saindo do botão. */}
      <Box
        aria-hidden
        sx={{
          position: "absolute",
          inset: 0,
          borderRadius: "50%",
          bgcolor: WHATSAPP_GREEN,
          pointerEvents: "none",
          animation: "whatsappPulse 2s ease-out infinite",
          "@keyframes whatsappPulse": pulseKeyframes,
          "@media (prefers-reduced-motion: reduce)": { animation: "none" },
        }}
      />
      <Box
        aria-hidden
        sx={{
          position: "absolute",
          inset: 0,
          borderRadius: "50%",
          bgcolor: WHATSAPP_GREEN,
          pointerEvents: "none",
          animation: "whatsappPulse 2s ease-out infinite",
          animationDelay: "1s",
          "@keyframes whatsappPulse": pulseKeyframes,
          "@media (prefers-reduced-motion: reduce)": { animation: "none" },
        }}
      />

      <Fab
        href={whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Conversar comigo no WhatsApp"
        title="Conversar no WhatsApp"
        sx={{
          position: "relative",
          // Verde do WhatsApp fixo, independente da cor primária do tema —
          // um ícone de marca reconhecível não deve seguir o acento do site.
          bgcolor: WHATSAPP_GREEN,
          color: "#ffffff",
          "&:hover": { bgcolor: "#1ebe5a" },
        }}
      >
        <WhatsAppIcon
          sx={{
            animation: "whatsappRing 3.2s ease-in-out infinite",
            "@keyframes whatsappRing": ringKeyframes,
            "@media (prefers-reduced-motion: reduce)": { animation: "none" },
          }}
        />
      </Fab>
    </Box>
  );
}
