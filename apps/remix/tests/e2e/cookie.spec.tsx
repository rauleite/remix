import { BrowserContext, Cookie, expect, test } from "@playwright/test";
import { ThemeCookieName } from "~/utils/cookie";

const hasPartnerTheme = async (context: BrowserContext) => {
  const cookies = await context.cookies();
  return cookies.some(
    cookie => cookie.name === ThemeCookieName.PartnerTheme
  )
};

test('shouldn\'t have theme cookie on first navigation', async ({ page, context }) => {
  await page.goto('/');
  // Wait to allow cookies to be set
  await page.waitForTimeout(500);
  expect(await hasPartnerTheme(context)).toBe(false)
});

test('should have theme cookie on subsequent navigations', async ({ page, context }) => {
  await page.goto('/');
  // Wait to allow cookies to be set
  await page.waitForTimeout(500);
  await page.reload();
  expect(await hasPartnerTheme(context)).toBe(true)
});
