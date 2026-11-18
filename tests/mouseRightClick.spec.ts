import {test,expect} from "@playwright/test"

test("Mouse Right Click Action",async({page})=>{
    await page.goto("https://swisnl.github.io/jQuery-contextMenu/demo/input.html")
    const button = page.locator("span[class='context-menu-one btn btn-neutral']")
    //right click action
    await button.click({button:'right'});
    await page.waitForTimeout(2000)
})