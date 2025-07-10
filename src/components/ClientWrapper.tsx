"use client";

import React from "react";
import { ThemeProvider } from "@material-tailwind/react";
// Update the import paths below to the actual locations of Layout and FixedPlugin components
import Layout from "@/components/layout";
import{ FixedPlugin } from "@/components";

export default function ClientWrapper({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <Layout>
        {children}
        <FixedPlugin />
      </Layout>
    </ThemeProvider>
  );
}
