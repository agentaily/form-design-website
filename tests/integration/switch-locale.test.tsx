import { loadFeature, describeFeature } from "@amiceli/vitest-cucumber";
import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import { expect } from "vitest";
import App from "../../src/App";

// Outer loop: realize features/switch-locale.feature against the real landing
// page. We assert user-visible copy (the hero CTAs, which are unique per locale)
// rather than internal state, and drive the language toggle by clicking the
// nav button whose label is the target locale code ("EN" while zh, "ZH" while en).
// The CTAs are queried by button role so the footer's "Start free" link (same
// copy, different element) doesn't collide.

const feature = await loadFeature("features/switch-locale.feature");

function expectChinese() {
  expect(screen.getByRole("button", { name: "开始使用" })).toBeInTheDocument();
  expect(screen.getByRole("button", { name: "看看怎么用" })).toBeInTheDocument();
}

function expectEnglish() {
  expect(screen.getByRole("button", { name: "Start free" })).toBeInTheDocument();
  expect(screen.getByRole("button", { name: "See how it works" })).toBeInTheDocument();
}

function switchLanguage(targetCode: "EN" | "ZH") {
  fireEvent.click(screen.getByText(targetCode));
}

// Simulate the visitor's browser language. DS reads navigator.language to
// pick the initial locale, so this must be set *before* rendering <App />.
function setBrowserLanguage(value: string) {
  Object.defineProperty(window.navigator, "language", { value, configurable: true });
}

describeFeature(feature, ({ Scenario, AfterEachScenario }) => {
  AfterEachScenario(() => cleanup());

  // The test setup pins navigator.language to "zh-CN" before each step, so the
  // ambient default visitor is a Chinese-browser one here.
  Scenario("默认中文(中文浏览器)", ({ Given, Then }) => {
    Given("访客首次打开官网", () => {
      render(<App />);
    });
    Then("落地页文案以中文显示", () => {
      expectChinese();
    });
  });

  // DS detects the locale from navigator.language (→ zh fallback), so an
  // English-browser visitor lands on English without touching the toggle.
  Scenario("英文浏览器默认英文", ({ Given, Then }) => {
    Given("访客的浏览器语言为英文且首次打开官网", () => {
      setBrowserLanguage("en-US");
      render(<App />);
    });
    Then("落地页文案以英文显示", () => {
      expectEnglish();
    });
  });

  Scenario("切到英文", ({ Given, When, Then }) => {
    Given("访客打开官网", () => {
      render(<App />);
    });
    When("访客点击「EN」语言切换", () => {
      switchLanguage("EN");
    });
    Then("落地页文案以英文显示", () => {
      expectEnglish();
    });
  });

  Scenario("切回中文", ({ Given, When, Then }) => {
    Given("访客已切到英文", () => {
      render(<App />);
      switchLanguage("EN");
      expectEnglish();
    });
    When("访客点击「ZH」语言切换", () => {
      switchLanguage("ZH");
    });
    Then("落地页文案以中文显示", () => {
      expectChinese();
    });
  });
});
