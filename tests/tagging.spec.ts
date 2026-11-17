import { test, expect } from "@playwright/test"

// test("@sanity @regression Check the title of the homepage", async ({ page }) => {
//     await page.goto("https://www.google.com/")
//     expect(page).toHaveTitle("Google")
// })

test("Check the title of the homepage",{tag:'@sanity'}, async ({ page }) => {
    await page.goto("https://www.google.com/")
    expect(page).toHaveTitle("Google")
})

test("Check Navigation to store page",{tag:'@regression'}, async ({ page }) => {
    await page.goto("https://www.google.com/")
    await page.locator("a:has-text('Store')").click();
    await expect(page).toHaveTitle("Google Store for Google Made Devices & Accessories")
})

test("Check logo of the page",{tag:['@sanity','@regression']}, async ({ page }) => {
    await page.goto("https://www.demoblaze.com/")
    const logo = await page.locator("a[id='nava']")
    await expect(logo).toBeVisible();
})