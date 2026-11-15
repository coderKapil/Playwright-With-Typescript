import { test, expect } from "@playwright/test"

test("Hard vs soft assertions demo", async ({ page }) => {
    await page.goto("https://demowebshop.tricentis.com/");

    //Hard assertions
    // await expect(page).toHaveTitle('Demo Web Shop2')//failed rest of the below assertion will not be executed in case of hard assertions
    // await expect(page).toHaveURL("https://demowebshop.tricentis.com/");

    // const logo =  page.locator("img[src$='/Themes/DefaultClean/Content/images/logo.png']");
    // await expect(logo).toBeVisible();

    //Soft assertion
    await expect.soft(page).toHaveTitle('Demo Web Shop2')//failed still rest of the assertions will be executed
    await expect.soft(page).toHaveURL("https://demowebshop.tricentis.com/");

    const logo = page.locator("img[src$='/Themes/DefaultClean/Content/images/logo.png']");
    await expect.soft(logo).toBeVisible();
})