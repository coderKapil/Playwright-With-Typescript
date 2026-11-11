//Single select dropdown
import { test, expect, Locator } from "@playwright/test"

test("Single Select drop down", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/")
  //1. select option from the dropDown (4 ways)
  //   await page.locator("#country").selectOption('India');//select by visible text
  //    page.locator("#country").selectOption({value:'uk'})//select by using value attribute
  //    page.locator("#country").selectOption({label:'India'});//select by using label
  //    page.locator("#country").selectOption({index:3});//select by using index

  //2. check number of options in the drop down (count)
  const dropDownOptions: Locator = page.locator("#country>option");
  await expect(dropDownOptions).toHaveCount(10)

  //3. check an option in the drop down
  //capture all the options text from the dropdown and trim the value and store it in string array variable
  const optionText: string[] = (await dropDownOptions.allTextContents()).map(text => text.trim())
  expect(optionText).toContain('Japan')//checks if array congtains Japan

  //4.Printing options from the drop down
  for (const option of optionText) {
    console.log(option);

  }

  //pause the execution
  await page.waitForTimeout(2000);
})