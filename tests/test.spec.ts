import { test, expect } from "@playwright/test"

test.beforeEach(async ({ page }) => {
  await page.goto("https://www.saucedemo.com/inventory.html");
})

test('test using global setup', async ({ page }) => {
  await expect(page.getByText('Products')).toBeVisible()
})