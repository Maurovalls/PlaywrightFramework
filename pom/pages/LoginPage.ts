import { expect, Locator, Page } from '@playwright/test';

export class LoginPage {
  readonly page: Page;
  readonly user: Locator;
  readonly password: Locator;
  readonly loginButton: Locator;
  

  constructor(page: Page) {
    this.page = page;
    this.user =  page.locator('[data-test="username"]');
    this.password = page.locator('[data-test="password"]');
    this.loginButton = page.locator('[data-test="login-button"]');
  }

  async loginUser(user,password) {
    await this.user.fill(user);
    await this.password.fill(password);
    await this.loginButton.click();
  }

}