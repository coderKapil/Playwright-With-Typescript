import {test,expect} from "@playwright/test"
//syntax for writing test case in playwright
// test("here enter title of the test",()=>{
//     //here inside this arrow function you can write your test case
// })

//fixture: a global variable that is available throught playwright project ex-page, browser

test("Verify page title",async({page})=>{
   await page.goto("https://www.automationexercise.com/");
   let pageTitle:string= await page.title();
   console.log("Title:",pageTitle);
   await expect(page).toHaveTitle("Automation Exercise")
})