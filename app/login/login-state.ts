/**
 * Tipos e estado inicial do formulário de login.
 *
 * Fica fora de `actions.ts` de propósito: num arquivo com a diretiva
 * `"use server"` todo export precisa ser uma função async, então um objeto
 * exportado de lá chegaria como `undefined` no Client Component.
 */

export type LoginState = {
  status: "idle" | "error";
  message: string;
  errors: Partial<Record<"email" | "password", string>>;
};

export const loginInitialState: LoginState = {
  status: "idle",
  message: "",
  errors: {},
};
