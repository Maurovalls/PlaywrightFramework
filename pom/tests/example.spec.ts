import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test('homepage has title and links to intro page', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await page.goto('https://www.saucedemo.com/');
  await loginPage.loginUser('standard_user','secret_sauce');
  await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");
});
