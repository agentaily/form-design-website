// Disable @testing-library/react's automatic afterEach(cleanup). It must be set
// before RTL is first imported (test files import it after setup runs).
// @amiceli/vitest-cucumber runs each Gherkin step as its own test, so an
// auto-cleanup would unmount the React tree between Given/When/Then. Cleanup is
// explicit instead: unit tests call afterEach(cleanup); BDD specs clean up per
// scenario via AfterEachScenario.
process.env.RTL_SKIP_AUTO_CLEANUP = "true";

import { beforeEach } from "vitest";
import "@testing-library/jest-dom/vitest";

// Reset the per-test runtime preferences that @agentaily/web-kit reads, so each
// test starts from a clean, deterministic state:
//
//  - navigator.language: web-kit resolves the default locale as persisted value →
//    navigator.language → defaultLocale (zh). jsdom's default is "en-US", which would
//    resolve to "en" and break the site's Chinese-first default, so pin it to a zh
//    visitor. A test that wants the English-browser path overrides this *after*
//    beforeEach within its own step (and the next test's beforeEach restores zh-CN).
//  - persistence: web-kit persists theme/locale so a choice sticks across reloads.
//    Its "auto" backend lands on cookies in this jsdom env (Node's localStorage isn't
//    enabled here), so clear cookies — and localStorage if present. Otherwise a choice
//    made in one test (e.g. setLocale("en")) leaks into the next. (The old hand-rolled
//    i18n had no persistence, so this isolation step is new with the web-kit adoption.)
beforeEach(() => {
  Object.defineProperty(window.navigator, "language", { value: "zh-CN", configurable: true });
  for (const entry of document.cookie ? document.cookie.split("; ") : []) {
    const name = entry.split("=")[0];
    if (name) document.cookie = `${name}=; path=/; max-age=0; SameSite=Lax`;
  }
  if (typeof localStorage !== "undefined") localStorage.clear();
});

// jsdom doesn't implement matchMedia or ResizeObserver, which some animated DS
// components (RotatingTagline, Composer) and our motion guards touch on mount.
// Provide inert stubs so rendering the real landing page in tests doesn't throw.
if (typeof window.matchMedia !== "function") {
  window.matchMedia = (query) => ({
    matches: false,
    media: query,
    onchange: null,
    addEventListener: () => {},
    removeEventListener: () => {},
    addListener: () => {},
    removeListener: () => {},
    dispatchEvent: () => false,
  });
}

if (typeof window.ResizeObserver !== "function") {
  window.ResizeObserver = class {
    observe() {}
    unobserve() {}
    disconnect() {}
  };
}
