import { createI18n } from "@agentaily/web-kit";
import en from "./en.json";
import zh from "./zh.json";

// Bilingual (en/zh) i18n seam for the landing page. The *mechanism* (provider,
// locale state, cross-subdomain persistence, <html lang> sync, navigator
// detection) is shared via @agentaily/web-kit's createI18n; this module only
// injects the product's catalogs and the type contract they're checked against.
// All user-visible copy lives in en.json / zh.json (the message catalogs),
// read through useMessages(). The explicit `Messages` interface below is the
// single shape both catalogs are checked against — a missing/typo'd/extra key is
// a compile error, which keeps the two languages structurally in lock-step.

export type Locale = "en" | "zh";
export const LOCALES: Locale[] = ["en", "zh"];

/** A navigation/anchor link whose visible label is translated. */
export interface NavLink {
  label: string;
  href: string;
}

export interface DemoItem {
  /** Which abstract artifact to draw (form | dash | flow | survey). */
  key: string;
  q: string;
  steps: string[];
  line: string;
  ph: string;
}

export interface FeatureItem {
  /** DS Icon name for the feature glyph (message | spark | pen | box). */
  icon: string;
  name: string;
  desc: string;
}

export interface HowStep {
  /** Step ordinal shown as a mono label, e.g. "01". */
  n: string;
  name: string;
  desc: string;
}

export interface FaqItem {
  id: string;
  title: string;
  content: string;
}

export interface FooterLink {
  label: string;
  href: string | null;
}

export interface FooterCol {
  head: string;
  links: FooterLink[];
}

export interface Messages {
  meta: { title: string };
  nav: { brand: string; links: NavLink[]; switchLang: string; toggleTheme: string };
  hero: {
    badge: string;
    prefix: string;
    phrases: string[];
    sub: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  demo: {
    live: string;
    previewLabel: string;
    model: string;
    /** Brand name shown as the demo assistant's author label (DS Message `name`). */
    assistant: string;
    items: DemoItem[];
  };
  features: { label: string; title: string; subtitle: string; items: FeatureItem[] };
  how: { label: string; title: string; steps: HowStep[] };
  faq: { label: string; title: string; items: FaqItem[] };
  footer: {
    /** Product tagline shown under the brand in the footer's big block. */
    tagline: string;
    cols: FooterCol[];
    company: string;
    /** ICP filing number — a Chinese legal identifier, kept verbatim in both locales. */
    icp: string;
    icpHref: string;
  };
}

// Typed as Record<Locale, Messages> so createI18n binds useMessages() to the
// `Messages` shape (and both catalogs are still checked against it at compile time).
const catalogs: Record<Locale, Messages> = { en, zh };

// Default locale is zh; web-kit additionally honors a persisted choice and the
// visitor's navigator.language before falling back to this default.
export const { LocaleProvider, useLocale, useMessages } = createI18n({
  catalogs,
  defaultLocale: "zh",
});
