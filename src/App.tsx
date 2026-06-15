import { LocaleProvider } from "./i18n";
import { Nav } from "./components/Nav";
import { SiteFooter } from "./components/SiteFooter";
import { Faq } from "./sections/Faq";
import { Features } from "./sections/Features";
import { Hero } from "./sections/Hero";
import { HowTo } from "./sections/HowTo";
import { useReveal } from "./lib/useReveal";
import { useTheme } from "./lib/useTheme";

// Single-page landing: Nav → Hero → Features → How it works → FAQ → Footer.
// Features / HowTo / FAQ are wrapped in `.aw-rise` for the scroll-reveal entrance.
function Landing() {
  const { theme, toggle } = useTheme();
  useReveal();

  return (
    <div className="aw">
      <Nav theme={theme} onToggleTheme={toggle} />
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

export default function App() {
  return (
    <LocaleProvider>
      <Landing />
    </LocaleProvider>
  );
}
