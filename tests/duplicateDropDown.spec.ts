//Verify drop down contains duplicate values or not
//Verify the dropdown is sorted or not 
import { test, expect, Locator } from "@playwright/test"

test("Verify dropdown contains duplicate", async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/")
    // const drpDownOptions: Locator = page.locator("#colors>option")//having duplicates
    const drpDownOptions: Locator = page.locator("#animals>option")//not having duplicates
   const optionsText:string[] = (await drpDownOptions.allTextContents()).map(text=>text.trim())

   const myset = new Set<string>();
   const duplicates:string[]=[]

   for(const text of optionsText){
    if(myset.has(text)){
      duplicates.push(text)
    }
    else{
       myset.add(text)
    }
   }

   //printing duplicate values
   console.log("Duplicate options values: ",duplicates);
   
   if(duplicates.length>0){
    console.log("Duplicate options found");
   }
   else{
    console.log("Duplicate options not found");
   }


    //pause the execution
    // await page.waitForTimeout(2000);
})