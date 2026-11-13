//Jquery datepicker
import { test, expect, Locator, Page } from "@playwright/test"

async function selectDate(targetYear: string, targetMonth: string, targetDate: string, isFuture: boolean, page: Page) {
    //Now we don't know how many times we have to click on next button so we will use while loop here
    while (true) {
        //Now we will capture year and month
        const currYear = await page.locator(".ui-datepicker-year").textContent()
        const currMonth = await page.locator(".ui-datepicker-month").textContent()
        if (currMonth === targetMonth && currYear === targetYear) {
            //if curr month and year matches with the target month and year then no need to click next button simply break
            break;
        }

        if (isFuture) {
            //Future date then click next
            await page.locator(".ui-datepicker-next").click() //click on next button to select future month and year
        }
        else {
            //Past date 
            await page.locator(".ui-datepicker-prev").click();
        }
    }

    //Now capturing date from date table
    const allDates = await page.locator(".ui-datepicker-calendar td").all();

    for (let dt of allDates) {
        const dateText = await dt.innerText();//extracting date text
        if (dateText === targetDate) {//if my curr date text is equal to the target date text
            await dt.click();//just click on that date
            break;
        }
    }
}



test("jQuery Date Picker", async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/")
    const dateInput: Locator = page.locator("#datepicker")
    expect(dateInput).toBeVisible()

    //Approach 1: using fill() method
    // await dateInput.fill("11/12/2026")//mm/dd/yyyy

    //Approach 2 : - using date picker
    await dateInput.click();//to open the date picker
    //select future target date
    // const month = "April"
    // const year = "2027"
    // const date = "30"

    //Past target date
     const month = "January"
    const year = "2023"
    const date = "27"

    selectDate(year,month,date,false,page);//for future-true for past -false
   
    // const expectedFutureDate = "04/30/2027" //mm/dd/yyyy
    const expectedPastDate = "01/27/2023"
    await expect(dateInput).toHaveValue(expectedPastDate)


})