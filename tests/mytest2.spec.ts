import {test,expect} from "@playwright/test"

test("Verify page title",async({page})=>{
   await page.goto("https://www.automationexercise.com/");
   let url:string= await page.url();
   console.log("url:",url);
   await expect(page).toHaveURL("https://www.automationexercise.com/")
})