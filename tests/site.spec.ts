import { expect, test } from "@playwright/test";

for (const width of [320, 390, 768, 1440]) {
  test(`page, images and layout at ${width}px`, async ({ page }) => {
    await page.setViewportSize({ width, height: 900 });
    const errors: string[] = [];
    page.on("pageerror", (error) => errors.push(error.message));
    page.on("console", (message) => { if (message.type() === "error") errors.push(message.text()); });
    const response = await page.goto("/");
    expect(response?.status()).toBe(200);
    await expect(page).toHaveTitle("占部 駿祐 | Shunsuke Urabe — Personal Website");
    await expect(page.locator("html")).toHaveAttribute("lang", "ja");
    await expect(page.locator("h1")).toHaveText("コードを動かす楽しさから、チームを動かす挑戦へ。");
    await expect(page.locator("main > section")).toHaveCount(5);
    await expect(page.locator("#favorites article")).toHaveCount(4);
    await expect(page.locator("#activities article")).toHaveCount(4);

    for (const id of ["home", "about", "favorites", "activities", "connect"]) {
      await page.locator(`#${id}`).scrollIntoViewIfNeeded();
      await expect.poll(() => page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);
    }
    const images = page.locator("main img");
    for (const image of await images.all()) {
      await image.scrollIntoViewIfNeeded();
      await expect.poll(() => image.evaluate((node) => (node as HTMLImageElement).complete && (node as HTMLImageElement).naturalWidth > 0)).toBe(true);
      await expect(image).toHaveAttribute("alt", /.+/);
    }
    await expect(page.locator('.email-address')).toHaveText('u.shunke@gmail.com');
    await expect(page.locator('a[href^="mailto:"]')).toHaveCount(0);
    for (const href of ["https://github.com/Shunnsuke-cloud", "https://zenn.dev/shunn0429", "https://www.wantedly.com/id/shunsuke_urabe_a", "https://f-tcv.com/"]) {
      const link = page.locator(`.social-links a[href="${href}"]`);
      await expect(link).toHaveAttribute("target", "_blank");
      await expect(link).toHaveAttribute("rel", "noopener noreferrer");
    }
    await page.locator("#home").scrollIntoViewIfNeeded();
    await expect.poll(() => page.locator(".hero-title .hero-line").first().evaluate((node) => getComputedStyle(node).opacity)).toBe("1");
    await page.screenshot({ path: `test-results/home-${width}.png`, animations: "disabled" });
    await page.locator("#favorites").scrollIntoViewIfNeeded();
    await expect.poll(() => page.locator(".favorite-card").first().evaluate((node) => getComputedStyle(node).opacity)).toBe("1");
    await page.screenshot({ path: `test-results/favorites-${width}.png`, animations: "disabled" });
    expect(errors).toEqual([]);
  });
}

test("desktop navigation and HOME buttons reach their sections", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto("/");
  for (const id of ["about", "favorites", "activities", "connect"]) {
    await page.locator(`.desktop-nav a[href="#${id}"]`).click();
    await expect(page).toHaveURL(new RegExp(`#${id}$`));
    await expect.poll(async () => {
      const top = await page.locator(`#${id}`).evaluate((node) => node.getBoundingClientRect().top);
      return top >= 103 && top < 500;
    }).toBe(true);
  }
  for (const [label, id] of [["私について", "about"], ["これまでの活動", "activities"]]) {
    await page.locator('.footer a[href="#home"]').first().click();
    await page.getByRole("link", { name: label, exact: true }).click();
    await expect(page).toHaveURL(new RegExp(`#${id}$`));
  }
});

test("mobile menu supports click, keyboard and Escape", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");
  const toggle = page.getByRole("button", { name: "メニューを開く" });
  await toggle.focus();
  await page.keyboard.press("Enter");
  await expect(page.locator(".menu-toggle")).toHaveAttribute("aria-expanded", "true");
  await expect(page.locator("#mobile-navigation")).toBeVisible();
  await page.keyboard.press("Escape");
  await expect(page.locator("#mobile-navigation")).toBeHidden();
  await expect(toggle).toBeFocused();
  await toggle.click();
  await page.locator('#mobile-navigation a[href="#favorites"]').click();
  await expect(page).toHaveURL(/#favorites$/);
  await expect(page.locator("#mobile-navigation")).toBeHidden();
  await page.locator(".menu-toggle").click();
  await page.setViewportSize({ width: 1000, height: 900 });
  await expect(page.locator("#mobile-navigation")).toBeHidden();
});

test("reduced motion disables animation and smooth scrolling", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");
  expect(await page.locator("html").evaluate((node) => getComputedStyle(node).scrollBehavior)).toBe("auto");
  expect(await page.locator(".hero-line").first().evaluate((node) => getComputedStyle(node).animationName)).toBe("none");
  await page.locator("#favorites").scrollIntoViewIfNeeded();
  expect(await page.locator(".favorite-card").first().evaluate((node) => getComputedStyle(node).opacity)).toBe("1");
});

test("content and images remain readable without JavaScript", async ({ browser }) => {
  const context = await browser.newContext({ javaScriptEnabled: false, viewport: { width: 390, height: 844 } });
  const page = await context.newPage();
  await page.goto("http://127.0.0.1:3000/");
  await expect(page.locator("h1")).toBeVisible();
  await expect(page.locator("#about h2")).toHaveText("はじめまして、占部 駿祐です。");
  await expect(page.locator("#connect .email-address")).toHaveText("u.shunke@gmail.com");
  await expect(page.locator('a[href^="mailto:"]')).toHaveCount(0);
  expect(await page.locator(".favorite-card").first().evaluate((node) => getComputedStyle(node).opacity)).toBe("1");
  await context.close();
});

test("sharing image and favicon are served", async ({ request }) => {
  const response = await request.get("/");
  const html = await response.text();
  expect(html).toContain('name="twitter:card" content="summary_large_image"');
  expect(html).toContain('property="og:title"');
  expect(html).not.toContain('rel="canonical"');
  const ogPath = html.match(/property="og:image" content="([^"]+)"/)?.[1];
  expect(ogPath).toBeTruthy();
  const og = await request.get(ogPath!.replaceAll("&amp;", "&"));
  expect(og.status()).toBe(200);
  expect(og.headers()["content-type"]).toContain("image/png");
  expect((await request.get("/icon.svg")).status()).toBe(200);
});
