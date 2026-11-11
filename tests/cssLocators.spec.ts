//Css Locators
import {test,expect, Locator} from "@playwright/test"

test("Css Locators Demo",async({page})=>{
    await page.goto("https://demowebshop.tricentis.com/")
    //page.locator(css/xpath) u can use both inside this locator method
    //1. tag#id
    // const searchBox:Locator = page.locator(" input#small-searchterms")
    // await expect(searchBox).toBeVisible()
    // await searchBox.fill("Tshirt")
//    await page.locator(" input#small-searchterms").fill("shirt")

   //pause the execution for sometime because script is very fast so we can use this way if we want to see the action not mandatory
//    await page.waitForTimeout(2000)

   //2. tag.class

//    await page.locator("input.search-box-text").fill("Tshirt")
// await page.locator(".search-box-text").fill("Tshirt")//input tag name is optional

//3. tag[attribute=value]
//  await page.locator("input[name='q']").fill("Shirt")

//4. tag.class[attribute=value]
// await page.locator("input.search-box-text[name='q']").fill("Shirt")

//Absolute Css Locator



})