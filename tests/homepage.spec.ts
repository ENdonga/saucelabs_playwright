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
  await loginPage.loginToApplication(USERNAME, PASSWORD);
})

test.describe('Home page test', () => {
  test('Add item to cart successfully', async () => {
    await homePage.addItemToCart()
    await expect(homePage.shoppingCartBadge).toBeVisible()
  })
})