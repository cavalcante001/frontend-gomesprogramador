"use client";

import { useEffect, useState } from "react";
import Box from "@mui/material/Box";

type TypedHeadlineProps = {
  /** Parte em branco, digitada primeiro. Inclua o espaço final antes do destaque. */
  prefix: string;
  /** Parte final, digitada por último, em cor de destaque. */
  accent: string;
  /** Milissegundos entre cada caractere. */
  speedMs?: number;
};

/**
 * Efeito de máquina de escrever que NÃO empurra o layout ao redor nem muda
 * a quebra de linha durante a digitação.
 *
 * A técnica: o texto completo (prefix + accent) fica sempre no DOM, num
 * único fluxo — a parte ainda não "digitada" só recebe `opacity: 0`. Como o
 * conteúdo textual nunca muda de tamanho, o navegador calcula a quebra de
 * linha sempre da mesma forma, então uma palavra que cai na linha de baixo
 * (ex.: "Sênior") não pula de linha conforme os caracteres vão aparecendo —
 * o antigo bug de duas camadas separadas (uma só com o texto já digitado,
 * outra com o texto completo) calculava a quebra de linha de dois jeitos
 * diferentes e por isso "tremia". `opacity`, ao contrário de
 * display:none/visibility:hidden, também não remove o texto da árvore de
 * acessibilidade, então leitores de tela e buscadores sempre veem o texto
 * completo.
 */
export function TypedHeadline({ prefix, accent, speedMs = 45 }: TypedHeadlineProps) {
  const full = prefix + accent;
  const [count, setCount] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount((current) => {
        if (current >= full.length) {
          clearInterval(intervalId);
          return current;
        }
        return current + 1;
      });
    }, speedMs);
    return () => clearInterval(intervalId);
  }, [full, speedMs]);

  const shownPrefixLength = Math.min(count, prefix.length);
  const shownPrefix = prefix.slice(0, shownPrefixLength);
  const hiddenPrefix = prefix.slice(shownPrefixLength);
  const shownAccent = full.slice(prefix.length, count);
  const hiddenAccent = accent.slice(shownAccent.length);

  return (
    <Box component="span">
      {shownPrefix}
      <Box component="span" sx={{ opacity: 0 }}>
        {hiddenPrefix}
      </Box>
      <Box
        component="span"
        sx={{ color: "primary.main", textShadow: "0 0 28px rgba(0, 145, 255, 0.65)" }}
      >
        {shownAccent}
        {/* Cursor colado sem espaço à palavra: se quebrar linha, quebra
            junto com ela — nunca fica sozinho numa linha à parte. */}
        <Box
          component="span"
          sx={{
            animation: "typedCursorBlink 1s steps(1) infinite",
            "@keyframes typedCursorBlink": {
              "0%, 100%": { opacity: 1 },
              "50%": { opacity: 0 },
            },
            "@media (prefers-reduced-motion: reduce)": { animation: "none" },
          }}
        >
          _
        </Box>
      </Box>
      <Box component="span" sx={{ opacity: 0, color: "primary.main" }}>
        {hiddenAccent}
      </Box>
    </Box>
  );
}
