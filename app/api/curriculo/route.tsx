import { NextResponse } from "next/server";
import { renderToBuffer } from "@react-pdf/renderer";
import React from "react";
import { ResumeDocument } from "@/app/_components/resume-document";
import { site } from "@/content/site";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const buffer = await renderToBuffer(<ResumeDocument />);

    const filename = `Curriculo_${site.person.replace(/\s+/g, "_")}.pdf`;

    return new NextResponse(new Uint8Array(buffer), {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `inline; filename="${filename}"`,
        "Cache-Control": "no-store, no-cache, must-revalidate, proxy-revalidate",
      },
    });
  } catch (error) {
    console.error("Erro ao gerar PDF do currículo:", error);
    return NextResponse.json(
      { error: "Falha ao gerar o currículo em PDF" },
      { status: 500 }
    );
  }
}
