import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

// Source-only regression checks. No browser, Analytics, provider or form traffic.
const source = (path) => readFileSync(new URL(`../${path}`, import.meta.url), "utf8");
const css = source("src/app/globals.css");
const portfolio = source("src/components/Portfolio.tsx");
const footer = source("src/components/Footer.tsx");

function color(name) {
  const match = css.match(new RegExp(`--color-${name}:\\s*#([0-9a-f]{6})\\s*;`, "i"));
  assert.ok(match, `Missing theme color: ${name}`);
  return [0, 2, 4].map((offset) => parseInt(match[1].slice(offset, offset + 2), 16));
}

function luminance(rgb) {
  const channels = rgb.map((value) => {
    const srgb = value / 255;
    return srgb <= 0.04045 ? srgb / 12.92 : ((srgb + 0.055) / 1.055) ** 2.4;
  });
  return channels[0] * 0.2126 + channels[1] * 0.7152 + channels[2] * 0.0722;
}

function contrast(foreground, background, alpha = 1) {
  const composed = foreground.map((channel, index) => alpha * channel + (1 - alpha) * background[index]);
  const a = luminance(composed);
  const b = luminance(background);
  return (Math.max(a, b) + 0.05) / (Math.min(a, b) + 0.05);
}

test("contrast calculation retains full precision and alpha compositing", () => {
  assert.equal(contrast([0, 0, 0], [255, 255, 255]), 21);
  assert.equal(contrast([255, 255, 255], [255, 255, 255]), 1);
  assert.ok(contrast([0, 0, 0], [255, 255, 255], 0.5) > 3.9);
  assert.ok(contrast([0, 0, 0], [255, 255, 255], 0.5) < 4);
});

test("the concept-project disclosure remains unchanged and fully readable", () => {
  assert.ok(portfolio.includes('<p className="text-sm text-theme-text-light italic max-w-2xl mx-auto">These are concept projects that demonstrate design capabilities, not commissioned client sites.</p>'));
  assert.ok(contrast(color("theme-text-light"), color("theme-bg")) >= 4.5);
});

test("the footer enquiry explanation keeps its copy and full-white text", () => {
  assert.ok(footer.includes('<p className="text-white mb-10 leading-relaxed max-w-md">'));
  assert.ok(footer.includes('Tell us about your business and goals, and we&apos;ll get back to you by email about the next step.'));
  assert.ok(contrast([255, 255, 255], color("theme-accent")) >= 4.5);
});

test("the legal row keeps its layout and links without inherited transparency", () => {
  assert.ok(footer.includes('gap-4 text-[10px] uppercase tracking-widest text-theme-text-dark font-bold'));
  assert.ok(!footer.includes("opacity-60"));
  assert.ok(footer.includes('href="/privacy-policy"'));
  assert.ok(footer.includes('href="/terms"'));
  assert.ok(footer.includes('${showProposalCta ? "mt-24" : ""}'));
  assert.ok(contrast(color("theme-text-dark"), color("theme-bg")) >= 4.5);
  assert.ok(contrast(color("theme-accent"), color("theme-bg")) >= 4.5);
});

test("the three former reduced-opacity combinations fail small-text contrast", () => {
  assert.ok(contrast(color("theme-text-light"), color("theme-bg"), 0.7) < 4.5);
  assert.ok(contrast([255, 255, 255], color("theme-accent"), 0.7) < 4.5);
  assert.ok(contrast(color("theme-text-dark"), color("theme-bg"), 0.6) < 4.5);
});

test("proposal destination, button styling and optional-footer behavior are unchanged", () => {
  assert.ok(footer.includes('href="/contact#proposal"'));
  assert.ok(footer.includes('bg-white text-theme-accent rounded-full text-xs font-bold'));
  assert.ok(footer.includes('{showProposalCta && ('));
  assert.ok(footer.includes('export default function Footer({ showProposalCta = true }'));
});
