import {test,expect} from "@playwright/test"

// test("How to take screenshot",async({page})=>{
//     // await page.goto("https://demowebshop.tricentis.com/");
//     // const timestamp = Date.now();//this will capture current date and time
//     //it will take the screenshot till hwfre the page is visible while launching
//     // await page.screenshot({path:'screenshots/'+'homepage'+timestamp+'.png'})

//     //Full page screenshots
//     // await page.screenshot({path:'screenshots/'+'fullpage'+timestamp+'.png',fullPage:true})

//     //screenshot of specific element
//     // const logo = page.locator("img[alt='Tricentis Demo Web Shop']");
//     // await logo.screenshot({path:'screenshots/'+'logo'+timestamp+'.png'})
//     // await page.locator("img[alt='Tricentis Demo Web Shop']").screenshot({path:'screenshots/'+'logo'+timestamp+'.png'});
//     //capturing screenshot of featured product only from the homepage
//     // await page.locator(".product-grid").screenshot({path:'screenshots/'+'featureproducts'+timestamp+'.png'})
// })

test('test', async ({ page }) => {
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
});