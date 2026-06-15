import { render, screen, cleanup, within } from "@testing-library/react";
import { afterEach, expect, test } from "vitest";
import App from "../../src/App";

// Outer loop: the landing page renders the Form Design v1 sections (Features +
// How it works + FAQ) with their real product copy. This guards the content
// delta from the agentaily scaffold — the page is about generating forms from a
// conversation, not the agentaily studio's "works" catalogue.

afterEach(cleanup);

test("renders the Form Design v1 sections in zh (default locale)", () => {
  render(<App />);

  // Features 能力 — capability section with its four cards.
  const features = document.querySelector("#features") as HTMLElement;
  expect(features).toBeTruthy();
  expect(within(features).getByText("它能做什么")).toBeInTheDocument();
  expect(within(features).getByText("对话生成")).toBeInTheDocument();
  expect(within(features).getByText("发布即收集")).toBeInTheDocument();

  // How it works 怎么用 — three numbered steps.
  const how = document.querySelector("#how") as HTMLElement;
  expect(how).toBeTruthy();
  expect(within(how).getByText("说需求")).toBeInTheDocument();
  expect(within(how).getByText("发布收数据")).toBeInTheDocument();
  expect(within(how).getAllByText(/^0[123]$/)).toHaveLength(3);

  // FAQ — Form Design questions (not the agentaily collaboration FAQ).
  const faq = document.querySelector("#faq") as HTMLElement;
  expect(faq).toBeTruthy();
  expect(within(faq).getByText("怎么生成一张表单？")).toBeInTheDocument();

  // The agentaily scaffold's "Works" section is gone.
  expect(document.querySelector("#works")).toBeNull();
});

test("the hero badge frames the form-from-conversation value prop", () => {
  render(<App />);
  expect(screen.getByText("对话生成表单")).toBeInTheDocument();
});
