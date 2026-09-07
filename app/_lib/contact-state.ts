/**
 * Tipos e estado inicial do formulário de contato.
 *
 * Fica fora de `actions.ts` de propósito: num arquivo com a diretiva
 * `"use server"` todo export precisa ser uma função async, então um objeto
 * exportado de lá chegaria como `undefined` no Client Component.
 */

export type ContactState = {
  status: "idle" | "success" | "error";
  message: string;
  errors: Partial<Record<"name" | "email" | "message" | "captcha", string>>;
  /** Devolvido para repopular o formulário quando a validação falha. */
  values: { name: string; email: string; message: string };
};

export const contactInitialState: ContactState = {
  status: "idle",
  message: "",
  errors: {},
  values: { name: "", email: "", message: "" },
};
