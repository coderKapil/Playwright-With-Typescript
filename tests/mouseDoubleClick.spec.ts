import {test,expect} from "@playwright/test"

test("Mouse Double Click Action",async({page})=>{
   await page.goto("https://testautomationpractice.blogspot.com/")
   const copyBtn = page.locator("//button[normalize-space()='Copy Text']")

   //double click
   await copyBtn.dblclick()

   const secondInputBox = page.locator("#field2")
   await expect(secondInputBox).toHaveValue("Hello World!")

   await page.waitForTimeout(2000)
})