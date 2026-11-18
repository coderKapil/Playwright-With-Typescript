import {test,expect} from "@playwright/test"

test.beforeEach("launching app",async({page})=>{
    await page.goto("https://demowebshop.tricentis.com/")
})

test("logotest",async({page})=>{
    const logo = page.locator("img[alt='Tricentis Demo Web Shop']")
    await expect(logo).toBeVisible();
})

test("title test",async({page})=>{
     expect(await page.title()).toContain("Demo Web Shop")
})

test("search product test",async({page})=>{
    await page.locator("#small-searchterms").fill("laptop")
    await page.locator("input[value='Search']").click()
   await expect(page.locator(".product-title")).toContainText("laptop",{ignoreCase:true})
})