import {test,expect} from "@playwright/test"

test("Keyboard actions in Playwright",async({page})=>{
    await page.goto("https://gotranscript.com/text-compare")

    await page.locator("[name='text1']").fill("welcome to automation")
    // await page.type("[name='text1']","welcome to automation")//but it is now depricated i.e type method

    //Ctrl+A
    await page.keyboard.press('Control+A')

    //Ctrl+C
   await page.keyboard.press('Control+C')
    
   //Tab
   await page.keyboard.down('Tab')//to press down the Tab key
   await page.keyboard.up('Tab')//to release the Tab key

    //Ctrl+V

    await page.keyboard.press('Control+V')

    await expect(page.locator("[name='text2']")).toHaveValue("welcome to automation")

})