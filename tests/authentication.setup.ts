import { test as setup, expect } from '@playwright/test'
import path from 'path'

const USERNAME = 'standard_user'
const PASSWORD = 'secret_sauce'

const authFile = path.join(__dirname, '../.auth/user.json');

setup('authenticate', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/')
  await page.getByTestId('username').fill(USERNAME)
  await page.getByTestId('password').fill(PASSWORD)
  await page.getByTestId("login-button").click();

  await expect(page.getByText('Products')).toBeVisible()

  await page.context().storageState({path: authFile})
})