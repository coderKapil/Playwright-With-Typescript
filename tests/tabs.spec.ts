import {chromium, test} from "@playwright/test"

test("handle tabs",async()=>{
    const browser = await chromium.launch()
    const context = await browser.newContext();
   
    //Creating page 1
    const parentPage = await context.newPage();
    await parentPage.goto("https://testautomationpractice.blogspot.com/"); 

    //2 statements should go parallely
    // context.waitForEvent("page")//Pending,fulfilled,rejected
    // parentPage.locator("button:has-text('New Tab')").click();//opens new page/new tab from parent page
    const [childPage] = await Promise.all([context.waitForEvent("page"),parentPage.locator("button:has-text('New Tab')").click()])

    //Approach 1 switch between pages and get titles (using context)
    const pages = context.pages();//returns an array
    console.log("Number of pages created: ",pages.length);
    
    console.log("Title of the parent page: ",await pages[0].title());
     console.log("Title of the child page: ",await pages[1].title());

     //Approach 2: alternate
     console.log("Title of the parent page: ",await parentPage.title());
     console.log("Title of the child page: ",await childPage.title());

})