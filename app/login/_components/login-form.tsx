"use client";

import { useActionState, useState } from "react";
import Alert from "@mui/material/Alert";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { loginAction } from "@/app/login/actions";
import { loginInitialState } from "@/app/login/login-state";

export function LoginForm() {
  const [state, formAction, pending] = useActionState(loginAction, loginInitialState);
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Box component="form" action={formAction} noValidate>
      <Stack spacing={2.5}>
        <TextField
          id="email"
          name="email"
          type="email"
          label="E-mail"
          required
          autoComplete="email"
          error={Boolean(state.errors.email)}
          helperText={state.errors.email ?? " "}
        />

        <TextField
          id="password"
          name="password"
          type={showPassword ? "text" : "password"}
          label="Senha"
          required
          autoComplete="current-password"
          error={Boolean(state.errors.password)}
          helperText={state.errors.password ?? " "}
          slotProps={{
            input: {
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label={showPassword ? "Ocultar senha" : "Mostrar senha"}
                    onClick={() => setShowPassword((value) => !value)}
                    edge="end"
                    size="small"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            },
          }}
        />

        <Button type="submit" variant="contained" size="large" loading={pending}>
          Entrar
        </Button>

        <Box aria-live="polite" role="status">
          {state.status === "error" && state.message ? (
            <Alert severity="warning" variant="outlined">
              {state.message}
            </Alert>
          ) : null}
        </Box>
      </Stack>
    </Box>
  );
}
