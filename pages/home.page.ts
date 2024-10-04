import { Locator, Page } from "playwright";

export class HomePage {
  private readonly productsHeading: Locator
  private readonly hamburgerBtn: Locator
  private readonly logoutMenu: Locator
  private readonly addToCartBtn: Locator
  private readonly cart: Locator
  private readonly shoppingCartBadge: Locator

  constructor(public readonly page: Page) {
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

  async isShoppingCartBadgeVisible(): Promise<boolean>{
    return await this.shoppingCartBadge.isVisible()
  }

  async getProductHeadingText(): Promise<string> {
    return await this.productsHeading.textContent() ?? ''
  }

}