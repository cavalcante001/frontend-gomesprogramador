import type { Metadata } from "next";
import { Fira_Code, Roboto, Syne } from "next/font/google";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v16-appRouter";
import { site } from "@/content/site";
import Box from "@mui/material/Box";
import { SiteFooter } from "./_components/site-footer";
import { SiteHeader } from "./_components/site-header";
import { WhatsAppFloatingButton } from "./_components/whatsapp-button";
import { Providers } from "./_lib/providers";

/** Roboto — a tipografia do Material Design. */
const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  display: "swap",
});

/** Fira Code — usada só na logo do header (app/_components/site-header.tsx). */
const firaCode = Fira_Code({
  variable: "--font-fira-code",
  subsets: ["latin"],
  weight: ["500", "700"],
  display: "swap",
});

/** Syne — fonte de display usada nos títulos (h1/h2/h3), ver app/_lib/theme.ts. */
const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.role}`,
    template: `%s · ${site.name}`,
  },
  description: site.summary,
  openGraph: {
    title: `${site.name} — ${site.role}`,
    description: site.summary,
    url: site.url,
    siteName: site.name,
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.role}`,
    description: site.summary,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR" className={`${roboto.variable} ${firaCode.variable} ${syne.variable}`}>
      <body>
        {/* Integração oficial do Emotion com o App Router (SSR sem flash de estilo). */}
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <Providers>
            <SiteHeader />
            <Box component="main" sx={{ flex: 1 }}>
              {children}
            </Box>
            <SiteFooter />
            <WhatsAppFloatingButton />
          </Providers>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
