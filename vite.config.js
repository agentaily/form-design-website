import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { themeInitScript } from "@agentaily/design-system";

// Inline DS's themeInitScript into <head> (before any paint) so the persisted
// theme is applied on the first frame — no flash of incorrect theme (FOUC). The
// snippet is generated from the installed DS version, so it never drifts.
// defaultTheme="dark" must match <ThemeProvider defaultTheme="dark"> in App.tsx;
// the default storageKey (agentaily:theme) already matches the provider's default.
function themeInitScriptPlugin() {
  return {
    name: "theme-init-script",
    transformIndexHtml() {
      return [
        {
          tag: "script",
          injectTo: "head-prepend",
          children: themeInitScript({ defaultTheme: "dark" }),
        },
      ];
    },
  };
}

// Base path depends on the deploy target:
//   - Cloudflare Pages (the production host, root domain) builds with base "/",
//     which its workflow sets via DEPLOY_BASE="/".
//   - dev / preview-from-root stays at "/".
// Parameterized so a sub-path host (e.g. GitHub Pages project page) can override
// DEPLOY_BASE later without touching code.
export default defineConfig(({ command }) => ({
  base: command === "build" ? (process.env.DEPLOY_BASE ?? "/") : "/",
  plugins: [react(), themeInitScriptPlugin()],
}));
