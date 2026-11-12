//Handle pagination table
import { test, expect, Locator } from "@playwright/test"

test("Read data from all the table pages", async ({ page }) => {
    //Navigating to target page
    await page.goto("https://datatables.net/examples/core/basic_init/zero_configuration.html")

    //we are assuming that the table is having more pages at the start
    let hasmorepages = true;

    //till we have more page click on next buttons
    while (hasmorepages) {
        //capturing all the rows from a table
        const rows = await page.locator("table#example tbody tr").all();
        for (let row of rows) {
            console.log(await row.innerText());
        }

        //capture next button(3 ways to locate)
        //button[aria-label='Next']
        //button:has-text('›')
        //button:nth-child(9)

        const nextButton: Locator = page.locator("button[aria-label='Next']");
        const isDisabled = await nextButton.getAttribute('class')//dt-paging-button disabled next(attribute value for disabled next button)
        //if disbaled text is present in next button class it means the next button is now disabled and we dont't need to click on next button
        if (isDisabled?.includes("disabled")) {
            hasmorepages = false;//no more pages if next button is disabled
        }
        else {
            await nextButton.click();//if has more pages then click next button
        }

    }
})


test("Filter the rows and check the rows count", async ({ page }) => {
    await page.goto("https://datatables.net/examples/core/basic_init/zero_configuration.html");
    const dropdown: Locator = page.locator("#dt-length-0")
    await dropdown.selectOption({ label: '25' });

    //Approach 1
    const rows = await page.locator("table#example tbody tr").all()
    expect(rows.length).toBe(25);

    //Approach 2
    const rows2: Locator = page.locator("table#example tbody tr")
    await expect(rows2).toHaveCount(25)
})


//search functionality 
test.only("Search for specific data in the table",async({page})=>{
    await page.goto("https://datatables.net/examples/core/basic_init/zero_configuration.html");
    const searchbox:Locator = page.locator("#dt-search-0")
    await searchbox.fill("Michelle House")

    await page.waitForTimeout(2000);

    const rows = await page.locator("table#example tbody tr").all()
    if(rows.length>=1){
        let matchFound = false;
      for(let row of rows){
        const text = await row.innerText();
        if(text.includes("Michelle House")){
            console.log("Record exist - Found");
            matchFound = true;
            break;
        }
      }
    //   expect(matchFound).toBe(true);
    expect(matchFound).toBeTruthy()
    }
    else{
        console.log("No Rows found with search text");
        
    }
})