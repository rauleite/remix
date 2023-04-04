import { test } from "@playwright/test";
// import { test, expect } from "@playwright/test";

test("should navigate to the login page", async ({ page, context }) => {
  await page.goto("/");
  // await context.addCookies([]) 
});
