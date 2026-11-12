//Handle dynamic table
import { test, expect, Locator } from "@playwright/test"

test("Verify chrome cpu load in Dynamic Table", async ({ page }) => {
    await page.goto("https://practice.expandtesting.com/dynamic-table");
    const table: Locator = page.locator("table.table tbody");
    await expect(table).toBeVisible();

    //2 Select all the rows then find out the number of rows in atable
    const rows: Locator[] = await table.locator("tr").all();
    console.log("Number of rows in a table: ", rows.length);
    expect(rows).toHaveLength(4);

    //Step1: For chrome process get value of cpu load
    //Read each rows to check for the Chrome presence

    let cpuLoad = ''

    for (let row of rows) {
        const processName: string = await row.locator("td").nth(0).innerText();
        if (processName === 'Chrome') {
            // cpuLoad = await row.locator("td",{hasText:"%"}).innerText();//playwright way of writing
            //css way of writing
            cpuLoad = await row.locator("td:has-text('%')").innerText();
            console.log("Cpu Load of Chrome: ", cpuLoad);
            break;
        }
    }

    //Step 2 compare it with the value in the yellow label

    const yellowTextBox: string = await page.locator("p#chrome-cpu").innerText();
    console.log("Chrome Cpu load from Yellow Box: ", yellowTextBox);

    if (yellowTextBox.includes(cpuLoad)) {
        console.log("Cpu Load of Chrome is Equal");
    }
    else {
        console.log("Cpu Load of Chrome is Not Equal");
    }

    expect(yellowTextBox).toContain(cpuLoad)
    await page.waitForTimeout(3000)
})