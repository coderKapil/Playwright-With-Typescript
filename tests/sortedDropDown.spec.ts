//Verify the dropdown is sorted or not 
import { test, expect, Locator } from "@playwright/test"

test("Verify dropdown is sorted", async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/")
    const drpDownOptions: Locator = page.locator("#animals>option")//sorted
    // const drpDownOptions: Locator = page.locator("#colors>option")//not sorted
    //  console.log(await drpDownoptions.allTextContents());
    const optionValue: string[] = (await drpDownOptions.allTextContents()).map(text => text.trim())
    const originallist: string[] = [...optionValue]//we use spread operator here
    //this sort() is mutable which means it will change the original array after sorting so thats why we used spread operator here
    const sortedlist: string[] = [...originallist].sort()
    console.log("Original list", originallist);
    console.log("Sorted list", sortedlist);
    expect(originallist).toEqual(sortedlist)


    //pause the execution
    // await page.waitForTimeout(2000);
})