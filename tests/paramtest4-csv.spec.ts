
import { test, expect } from "@playwright/test"
import fs from 'fs'
import {parse} from "csv-parse/sync"

interface LoginData {
    email: string;
    password: string;
    validity: string;
}

// Reading data from csv
const csvPath = "testdata/data.csv";
const fileContent = fs.readFileSync(csvPath,"utf-8");
/*
Here's what these properties do:
- columns: true → Treats the first CSV row as column headers and creates objects.
- skip_empty_lines: true → Ignores completely empty rows.
*/
const records:LoginData[] = parse(fileContent,{columns:true,skip_empty_lines:true})

//main test
test.describe("Login data driven test", () => {

    for (const data of records) {

        test(`Login Test for ${data.email}`, async ({ page }) => {

            await page.goto("https://demowebshop.tricentis.com/login");

            // Fill Login Form
            await page.locator("#Email").fill(data.email);
            await page.locator("#Password").fill(data.password);
            await page.locator("input[value='Log in']").click();

            if (data.validity.toLowerCase() === 'valid') {

                // Assert logout link is visible
                const logout = page.locator("a[href='/logout']");
                await expect(logout).toBeVisible({ timeout: 5000 });

            } else {

                // Assert error message is visible
                const error = page.locator(".validation-summary-errors");
                await expect(error).toBeVisible({ timeout: 5000 });

                // Assert user is still on login page
                await expect(page).toHaveURL("https://demowebshop.tricentis.com/login");
            }
        });
    }
});
