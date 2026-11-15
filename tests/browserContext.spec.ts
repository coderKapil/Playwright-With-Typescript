import {chromium, expect, firefox, test, webkit} from "@playwright/test"

test("Browser context demo",async()=>{
    const browser = await chromium.launch();//creating browser
    const context = await browser.newContext();//creating context

    //creating 2 pages
    const page1 = await context.newPage();
    const page2 = await context.newPage();
    // await page.goto("https://testautomationpractice.blogspot.com/");
    console.log("Number of pages in a context: ",context.pages().length);
    
    await page1.goto("https://www.selenium.dev/");
    await expect(page1).toHaveTitle("Selenium")
    await page2.goto("https://playwright.dev/")
    await expect(page2).toHaveTitle("Fast and reliable end-to-end testing for modern web apps | Playwright")
    await page1.waitForTimeout(3000)
    await page2.waitForTimeout(3000)
})