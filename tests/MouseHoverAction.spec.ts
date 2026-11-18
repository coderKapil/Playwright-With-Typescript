import {test,expect} from "@playwright/test"

test("Mouse Hover Action",async({page})=>{
    await page.goto("https://naveenautomationlabs.com/opencart/")
    const desktop =  page.locator("//a[normalize-space()='Desktops']")
    const macbook = page.locator("//a[normalize-space()='Mac (1)']")

    //mouse hover
    await desktop.hover()
    await macbook.hover();

    await page.waitForTimeout(2000)
})