//Hidden bootstrap drop down
import { test, expect, Locator } from "@playwright/test"

test("Handle Hidden Bootstrap Dropdown", async ({ page }) => {
    //Navigating to the page
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    //Login steps
    await page.locator("[name='username']").fill("Admin")
    await page.locator("[name='password']").fill("admin123")
    await page.locator(".oxd-button").click();
    //click on PIM
    await page.getByText('PIM').click();
    //clicked on Job Title drop down
    await page.locator('form i').nth(2).click()
    await page.waitForTimeout(3000);
    //capture all the options from dropdown
   const options:Locator = page.locator("[role='listbox']>div[role='option']>span")
   const count:number = await options.count();
   console.log("Number of options in a drop down: ",count);
   
   //Print all the options
   console.log("Printing all the options.....");
   for(let i=0; i<count; i++){
      const text = await options.nth(i).textContent();
      console.log(text);
   }

   //select / click on option
   for(let i=0; i<count; i++){
    //capturing the text of each and every individual option
    const text = await options.nth(i).textContent();
    if(text==='Content Specialist'){//comparing if text is equal to this then click on that option and immediately break the loop
        await options.nth(i).click();
        break;
    }
   }
   
})