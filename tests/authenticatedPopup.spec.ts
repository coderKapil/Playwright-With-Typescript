import {test,expect} from "@playwright/test"

test("Authenticated popups",async({browser})=>{
    const context = await browser.newContext({httpCredentials: {username:"admin",password:"admin"}});
    const page = await context.newPage();

    //Approach 1
    // await page.goto("https://admin:admin@the-internet.herokuapp.com/basic_auth")
    // await expect(page.locator(".example p")).toBeVisible();

    //Approach 2: pass the login credentials along with the browser context
   await page.goto("https://the-internet.herokuapp.com/basic_auth")
   await expect(page.locator(".example p")).toBeVisible();

    await page.waitForTimeout(2000)
})