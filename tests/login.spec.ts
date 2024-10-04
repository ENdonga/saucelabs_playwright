import { test, expect } from '@playwright/test'
import { LoginPage } from '../pages/login.page'
import { HomePage } from '../pages/home.page';

const USERNAME = "standard_user";
const PASSWORD = "secret_sauce";
let loginPage: LoginPage;
let homePage: HomePage

test.beforeEach(async ({ page }) => {
  loginPage = new LoginPage(page);
  homePage = new HomePage(page)
  await loginPage.goto();
})

test.describe('Login - Logout test', () => {
  test('Login test success', async() => {
    await loginPage.loginToApplication(USERNAME, PASSWORD)
    await expect(homePage.getProductsHeadingLocator()).toContainText('Products')
  })

  test('Login error message', async () => {
    await loginPage.clickLoginButton()
    await expect(loginPage.getErrorMessageLocator()).toContainText('Epic sadface: Username is required');
  })

  test('successful logout of application', async () => {
    await loginPage.loginToApplication(USERNAME, PASSWORD);
    await expect(homePage.getProductsHeadingLocator()).toContainText('Products')
    await homePage.logoutOfApplication()
    await expect(loginPage.getUsernameFieldLocator()).toBeVisible()
  })
})