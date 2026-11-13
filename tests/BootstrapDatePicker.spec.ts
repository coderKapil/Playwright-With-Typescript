import { test, expect, Locator } from "@playwright/test"

test("Handle Bootstrap DatePicker", async ({ page }) => {
    await page.goto("https://www.booking.com/index.en-gb.html?aid=304142&label=mkt123sc-da75618e-79e1-438e-90cb-5887c71e04be");
    await page.locator("div[class='a5c71b0007'] [aria-label='Dismiss sign in information.']").click();
    //click on the date picker field to open calendar
    await page.locator(".f6bfe2aa01").click();
    // await page.waitForTimeout(2000)

    //Check in date selection 
    let checkinyear: string = "2026"
    let checkinmonth: string = "December"
    let checkinday = "25"

    while (true) {
        const checkInMonthYear = await page.locator("h3[class$='e7addce19e af236b7586']").nth(0).innerText();
        const currMonth = checkInMonthYear.split(" ")[0];//November
        const currYear = checkInMonthYear.split(" ")[1];//2026

        if (checkinmonth === currMonth && checkinyear === currYear) {
            break;
        }
        else {
            await page.locator("[aria-label='Next month']").click();
        }
    }

    //Select specific check-in date
    let allDates: Locator[] = await page.locator("table[class='b8fcb0c66a'] tbody").nth(0).locator("td").all();
    let checkinDateSelected = false;
    for (let date of allDates) {
        const dateText = await date.innerText();
        if (checkinday === dateText) {
            await date.click();
            checkinDateSelected = true;
            break;
        }
    }

    //Assertion to check check in date was selected
    expect(checkinDateSelected).toBeTruthy();

    //Check out date selection 
    let checkoutyear: string = "2027"
    let checkoutmonth: string = "January"
    let checkoutday = "30"

    while (true) {
        const checkOutMonthYear = await page.locator("h3[class$='e7addce19e af236b7586']").nth(1).innerText();
        const currMonth = checkOutMonthYear.split(" ")[0];//December
        const currYear = checkOutMonthYear.split(" ")[1];//2026

        if (checkoutmonth === currMonth && checkoutyear === currYear) {
            break;
        }
        else {
            await page.locator("[aria-label='Next month']").click();
        }
    }

    //Select specific check-in date
    allDates = await page.locator("table[class='b8fcb0c66a'] tbody").nth(1).locator("td").all();
    let checkoutDateSelected = false;
    for (let date of allDates) {
        const dateText = await date.innerText();
        if (checkoutday === dateText) {
            await date.click();
            checkoutDateSelected = true;
            break;
        }
    }
    // Assertion to check check-out date is selected
    expect(checkoutDateSelected).toBeTruthy();

    await page.waitForTimeout(1000);
})