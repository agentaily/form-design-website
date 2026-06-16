import { useEffect } from "react";
import { ThemeProvider } from "@agentaily/design-system";
import { LocaleProvider, useMessages } from "./i18n";
import { Nav } from "./components/Nav";
import { SiteFooter } from "./components/SiteFooter";
import { Faq } from "./sections/Faq";
import { Features } from "./sections/Features";
import { Hero } from "./sections/Hero";
import { HowTo } from "./sections/HowTo";
import { useReveal } from "./lib/useReveal";

// Single-page landing: Nav → Hero → Features → How it works → FAQ → Footer.
// Features / HowTo / FAQ are wrapped in `.aw-rise` for the scroll-reveal entrance.
function Landing() {
  const m = useMessages();
  useReveal();

  // Keep the tab title in sync with the active locale (DS handles <html lang>;
  // the document title is product-specific, so we mirror it here).
  useEffect(() => {
    document.title = m.meta.title;
  }, [m]);

  return (
    <div className="aw">
      <Nav />
      <Hero />
      <div className="aw-rise">
        <Features />
      </div>
      <div className="aw-rise">
        <HowTo />
      </div>
      <div className="aw-rise">
        <Faq />
      </div>
      <SiteFooter />
    </div>
  );
}

// Theme + locale runtime come from @agentaily/design-system: ThemeProvider applies the
// resolved theme to <html data-theme> (dark by default, cross-subdomain persisted);
// LocaleProvider supplies the i18n context. FOUC is prevented by themeInitScript()
// injected into index.html's <head> (see vite.config.js).
export default function App() {
  return (
    <ThemeProvider defaultTheme="dark">
      <LocaleProvider>
        <Landing />
      </LocaleProvider>
    </ThemeProvider>
  );
}
