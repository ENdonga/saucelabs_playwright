import { Locator, Page } from "playwright";

export class HomePage {
  readonly page: Page
  readonly productsHeading: Locator
  readonly hamburgerBtn: Locator
  readonly logoutMenu: Locator
  readonly addToCartBtn: Locator
  readonly cart: Locator
  readonly shoppingCartBadge: Locator

  constructor(page: Page) {
    this.page = page
    this.productsHeading = page.getByTestId('title')
    this.hamburgerBtn = page.locator("#react-burger-menu-btn");
    this.logoutMenu = page.getByTestId("logout-sidebar-link");
    this.addToCartBtn = page.getByText('Add to cart')
    this.cart = page.getByTestId('shopping-cart-link')
    this.shoppingCartBadge = page.getByTestId('shopping-cart-badge')
  }

  async clickHamburgerMenu() {
    await this.hamburgerBtn.click()
  }

  async logoutOfApplication() {
    await this.hamburgerBtn.click();
    await this.logoutMenu.click()
  }
  
  async addItemToCart() {
    await this.addToCartBtn.first().click()
  }

}