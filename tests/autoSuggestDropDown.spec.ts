//Auto suggest drop down
import { test, expect, Locator } from "@playwright/test"

test("Auto suggest drop down handling", async ({ page }) => {
    await page.goto("https://www.flipkart.com/");
    await page.locator(".b3wTlE").click()//for closing auto suggesting login popup
    const searchbox: Locator = page.locator("form[class='lilxh_ header-form-search'] input[placeholder='Search for Products, Brands and More']")
    await searchbox.fill("smart");
    await page.waitForTimeout(1000);//to wait to fetch the data from the server from ajax
    //Get all suggested options ---> Ctrl+Shift+p on Dom-->emulate focused page
    const options: Locator = page.locator("ul>li");//greater than symbol means inside ul li tag is there
    //count how many options are there
    const count = await options.count();
    console.log("Number of suggested options: ", count);
    // console.log("5th options: ", await options.nth(5).innerText());//extracting nth option from the suggestion

    //Printing all the suggested options in the console
    console.log("Printing all suggested options from the drop down");
    for (let i = 0; i < count; i++) {
        // console.log(await options.nth(i).innerText());
         console.log(await options.nth(i).textContent());
    }

    //select / clik on the smartphone option
     for (let i = 0; i < count; i++) {
         const text = await options.nth(i).innerText();
         if(text==='smartphone'){
            await options.nth(i).click();
            break;
         }
    }

    await page.waitForTimeout(5000)

})