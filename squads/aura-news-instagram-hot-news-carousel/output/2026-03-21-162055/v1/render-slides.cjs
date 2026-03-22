/**
 * Renders slide-01.html … slide-08.html to JPEG via Playwright.
 * Run from project root: node squads/.../v1/render-slides.cjs
 */
const { chromium } = require("playwright");
const path = require("path");
const fs = require("fs");
const { pathToFileURL } = require("url");

const V1 = __dirname;
const HTML_DIR = path.join(V1, "html");
const OUT_DIR = path.join(V1, "images");

async function main() {
  fs.mkdirSync(OUT_DIR, { recursive: true });
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: { width: 1080, height: 1350 },
    deviceScaleFactor: 1,
  });

  for (let i = 1; i <= 8; i++) {
    const num = String(i).padStart(2, "0");
    const htmlPath = path.join(HTML_DIR, `slide-${num}.html`);
    if (!fs.existsSync(htmlPath)) {
      console.error("Missing:", htmlPath);
      process.exit(1);
    }
    const page = await context.newPage();
    const url = pathToFileURL(htmlPath).href;
    await page.goto(url, { waitUntil: "networkidle" });
    await page.evaluate(() => document.fonts.ready);
    await new Promise((r) => setTimeout(r, 600));
    const outJpg = path.join(OUT_DIR, `slide-${num}.jpg`);
    await page.screenshot({
      path: outJpg,
      type: "jpeg",
      quality: 92,
      clip: { x: 0, y: 0, width: 1080, height: 1350 },
    });
    await page.close();
    console.log("OK", outJpg);
  }

  await browser.close();
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
