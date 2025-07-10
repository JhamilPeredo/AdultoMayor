// src/components/ClientThemeProvider.tsx
"use client";

import { ThemeProvider } from "@material-tailwind/react";
import React from "react";

export function ClientThemeProvider({ children }: { children: React.ReactNode }) {
  return <ThemeProvider>{children}</ThemeProvider>;
}
