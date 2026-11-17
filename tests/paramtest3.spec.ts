
import { test, expect } from "@playwright/test"
import fs from 'fs'

// Reading data from JSON
const jsonData = "testdata/data.json";
const loginData = JSON.parse(fs.readFileSync(jsonData, 'utf-8'));

test.describe("Login data driven test", () => {

    for (const { email, password, validity } of loginData.loginTestData) {

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
