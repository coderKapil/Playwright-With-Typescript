import {test,expect} from "@playwright/test"

test("Mouse Drag and Drop Action",async({page})=>{
   await page.goto("https://practice.expandtesting.com/drag-and-drop")

   const columnA = page.locator("#column-a")
   const columnB = page.locator("#column-b")

   //Approach 1 using hover
//    await columnA.hover()
//    await page.mouse.down();

//    await columnB.hover()
//    await page.mouse.up();

//Approach 2
await columnA.dragTo(columnB)

   await page.waitForTimeout(2000)
})