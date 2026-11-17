import { test, expect } from "@playwright/test"

const loginTestData: string[][] = [
    ["venus.taylor@example.com", "123456", "valid"],
    ["invaliduser@example.com", "test321", "invalid"],
    ["validuser@example.com", "test321", "invalid"],
    ["", "", "invalid"]
]


for (const [email, password, validity] of loginTestData) {
    test.describe("Login data driven test", async () => {
        test(`Login Test for ${email} and ${password}`, async ({ page }) => {
            await page.goto("https://demowebshop.tricentis.com/login")

            //Fill Login Form
            await page.locator("#Email").fill(email)
            await page.locator("#Password").fill(password);
            await page.locator("input[value='Log in']").click()

            if (validity.toLowerCase() === 'valid') {
                //Assert logout link is visible - indicate successfull login
                const logout = page.locator("a[href='/logout']")
                await expect(logout).toBeVisible({ timeout: 5000 });
            }
            else {
                //Assert error message is visible
                const error = page.locator(".validation-summary-errors");
                await expect(error).toBeVisible({ timeout: 5000 });
                //Assert user is still on login page
                await expect(page).toHaveURL("https://demowebshop.tricentis.com/login");
            }
        })
    })
}
