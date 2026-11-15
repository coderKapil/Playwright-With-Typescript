import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://demoblaze.com/');
  await page.getByRole('link', { name: 'Log in' }).click();
  await page.locator('#loginusername').click();
  await page.locator('#loginusername').fill('john.smith@example.com');
  await page.locator('#loginpassword').click();
  await page.locator('#loginpassword').fill('123456');
  await page.getByRole('button', { name: 'Log in' }).click();
  await page.waitForTimeout(10000)
  await expect(page.getByRole('link', { name: 'PRODUCT STORE' })).toBeVisible();
  await page.getByRole('link', { name: 'Log out' }).click();
});