import { test } from "@playwright/test"

test("Handle popups", async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto("https://testautomationpractice.blogspot.com/")

    // page.waitForEvent("popup")
    // await page.locator("#PopUp").click();
    //Multiple popups
    await Promise.all([page.waitForEvent('popup'), page.locator("#PopUp").click()]);

    const allpopupWindows = context.pages();//returns array of pages
    console.log("Number of pages/windows: ", allpopupWindows.length);//2

    console.log(allpopupWindows[0].url());//returns url of main page
    console.log(allpopupWindows[1].url());

    //Close the page
    for(const pwin of allpopupWindows){
        const title = await pwin.title();

        if(title.includes('Selenium')){
           await pwin.locator("a[href$='/documentation/ai_agents/']").click()
           await page.waitForTimeout(5000)
           //Perform any other actions
           await pwin.close();
        }
    }
})