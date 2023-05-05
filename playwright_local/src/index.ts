import path from "path";
import { chromium } from "playwright";

void (async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();
  const htmlPath = `file://${path.join(__dirname, `../resources/index.html`)}`;
  await page.goto(htmlPath);
  
  const title = await page.title();
  console.log(title);
  const p1 = await page.locator('p#p1').innerText();
  console.log(p1);
  const countOfHoge = await page.locator('p:has-text("hoge")').count();
  console.log(countOfHoge)

  await browser.close();
})();
