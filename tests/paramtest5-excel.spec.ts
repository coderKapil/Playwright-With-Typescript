
import { test, expect } from "@playwright/test"
import fs from 'fs'
import * as XLSX from "xlsx"

//Loading Excel
//Excel File-->WorkBook--->WorkSheet-->rows and columns
const excelpath = "testdata/data.xlsx"
const workbook = XLSX.readFile(excelpath);
const sheetNames = workbook.SheetNames[0];
const worksheet = workbook.Sheets[sheetNames];

//Convert sheet into json
const loginData:any = XLSX.utils.sheet_to_json(worksheet);

//main test
test.describe("Login data driven test", () => {

    for (const {email,password,validity} of loginData) {

        test(`Login Test for ${email}`, async ({ page }) => {

            await page.goto("https://demowebshop.tricentis.com/login");

            // Fill Login Form
            await page.locator("#Email").fill(email);
            await page.locator("#Password").fill(password);
            await page.locator("input[value='Log in']").click();

            if (validity.toLowerCase() === 'valid') {

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
