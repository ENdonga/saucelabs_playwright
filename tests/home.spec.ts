import { test, expect } from '../fixtures/login.fixture'

test.beforeEach(async ({ page, login }) => {
  await login()
})

test.describe('Home page test', () => {
  test('Add item to cart successfully', async ({homePage}) => {
    await homePage.addItemToCart()
    const isCartBadgeVisible = await homePage.isShoppingCartBadgeVisible()
    expect(isCartBadgeVisible).toBe(true)
  })
})