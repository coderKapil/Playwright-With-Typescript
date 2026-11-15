import {test,expect} from "@playwright/test"
test('tracing test', async ({ page,context}) => {

  context.tracing.start({screenshots:true,snapshots:true})

  await page.goto('https://demoblaze.com/');
  await expect(page.getByRole('link', { name: 'Log in' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'PRODUCT STORE' })).toBeVisible();
  await page.getByRole('link', { name: 'Log in' }).click();
  await page.locator('#loginusername').click();
  await page.locator('#loginusername').fill('john.smith@example.com');
  await page.locator('#loginpassword').click();
  await page.locator('#loginpassword').fill('123456');
  await page.getByRole('button', { name: 'Log in' }).click();
  await expect(page.getByRole('link', { name: 'Log out' })).toBeVisible();
  await expect(page.locator('#nameofuser')).toContainText('Welcome john.smith@example.com');
  await page.getByRole('link', { name: 'Log out' }).click();
  await page.waitForTimeout(3000);
  context.tracing.stop({path:'trace.zip'})
});