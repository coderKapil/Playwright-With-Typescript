import {test,expect} from "@playwright/test"

test("Autowaiting and forcing" , async({page})=>{
    test.setTimeout(50000)//50 sec
    await page.goto("https://demowebshop.tricentis.com/")
    //Assertions - auto waits works
    await expect(page).toHaveURL("https://demowebshop.tricentis.com/",{timeout:10000})
    await expect(page.locator("h2[class='topic-html-content-header']")).toBeVisible({timeout:10000});//local timeout for expect

    //Actions - auto waits works
    await page.locator("#small-searchterms").fill("Laptop",{force:true})//search box(ForceAction it will not do actionablity checks)
    await page.locator("input[class$='button-1 search-box-button']").click({force:true});//click on search button 
})