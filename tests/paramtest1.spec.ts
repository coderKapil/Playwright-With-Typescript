import { test, expect } from "@playwright/test"

//testdata
const searchItems: string[] = ['laptop', 'Gift card', 'smartphone', 'monitor']
//we used back ticks operator to use the value of item because everytime when the same test name repeat due to for of loop
//it will be considered as duplicate test name due to which our tets will not be executed

//using for of loop
// for(const item of searchItems){
//     test(`search test for ${item}`,async({page})=>{
//     await page.goto("https://demowebshop.tricentis.com/")
//     await page.locator("input[id='small-searchterms']").fill(item)
//     await page.locator("input[class='button-1 search-box-button']").click()
//     await page.waitForTimeout(2000);
//     console.log(item)
//     await expect.soft(page.locator("h2[class='product-title'] a")).toContainText(item,{ignoreCase:true})
// })
// }


//using forEach function
// searchItems.forEach((item)=>{
//      test(`search test for ${item}`,async({page})=>{
//     await page.goto("https://demowebshop.tricentis.com/")
//     await page.locator("input[id='small-searchterms']").fill(item)
//     await page.locator("input[class='button-1 search-box-button']").click()
//     await page.waitForTimeout(2000);
//     console.log(item)
//     await expect.soft(page.locator("h2[class='product-title'] a")).toContainText(item,{ignoreCase:true})
// })
// })

//describe
test.describe("search items", async () => {
    searchItems.forEach((item) => {
        test(`search test for ${item}`, async ({ page }) => {
            await page.goto("https://demowebshop.tricentis.com/")
            await page.locator("input[id='small-searchterms']").fill(item)
            await page.locator("input[class='button-1 search-box-button']").click()
            await page.waitForTimeout(2000);
            await expect.soft(page.locator("h2[class='product-title'] a")).toContainText(item, { ignoreCase: true })
        })
    })
})