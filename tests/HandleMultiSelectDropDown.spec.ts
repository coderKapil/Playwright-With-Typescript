//Handling multi select drop down
//Single select dropdown
import { test, expect, Locator } from "@playwright/test"

test("Multi Select drop down", async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/")
    //1. select option from the dropDown (4 ways)
    //  await page.locator("#colors").selectOption(['Red','Green','Yellow'])
    // await page.locator("#colors").selectOption(['red','green','yellow'])
    // await page.locator("#colors").selectOption([{label:'Red'},{label:'Blue'},{label:'White'}])
    await page.locator("#colors").selectOption([{ index: 0 }, { index: 2 }, { index: 5 }])
    //2. check number of options in the drop down (count)
    const dropDownOptions: Locator = page.locator(" #colors>option");
    await expect(dropDownOptions).toHaveCount(7)

    //3. check an option in the drop down
    //capture all the options text from the dropdown and trim the value and store it in string array variable
    const optionText: string[] = (await dropDownOptions.allTextContents()).map(text => text.trim())
    expect(optionText).toContain('Blue')//checks if array congtains Japan

    //4.Printing options from the drop down
    for (const option of optionText) {
        console.log(option);
    }

    //pause the execution
    await page.waitForTimeout(2000);
})