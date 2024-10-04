import { type Locator, type Page } from "playwright";

export class LoginPage {
  private readonly usernameField: Locator
  private readonly passwordField: Locator
  private readonly loginButton: Locator
  private readonly errorMessage: Locator

  constructor(public readonly page: Page) {
    this.usernameField = page.getByTestId('username');
    this.passwordField = page.getByTestId('password');
    this.loginButton = page.getByTestId('login-button');
    this.errorMessage = page.getByTestId('error');
  }

  async goto() {
    await this.page.goto("https://www.saucedemo.com/");
  }

  async clickLoginButton() {
    await this.loginButton.click()
  }

  async loginToApplication(username: string, password: string) {
    await this.usernameField.fill(username)
    await this.passwordField.fill(password)
    await this.loginButton.click()
  }

  async getErrorMessage(): Promise<string> {
    return await this.errorMessage.textContent() ?? ''
  }

  async isUsernameFieldVisible() {
    return await this.usernameField.isVisible()
  }
}