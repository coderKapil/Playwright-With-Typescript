import {test,expect} from "@playwright/test"

test("Playwright Assertion Demo",async({page})=>{
  await page.goto("https://demowebshop.tricentis.com/")
  //1 Auto retrying assertions (automatically retries until it passes or timeout)
  await expect(page).toHaveURL("https://demowebshop.tricentis.com/")//waits for correct URL

  //Auto retry : wait for the element to be visible and have the expected text
  await expect(page.locator("h2[class$='topic-html-content-header']")).toBeVisible();
  await expect(page.locator("div[class$='product-grid home-page-product-grid'] strong")).toHaveText("Featured products")

  //2. Non-retrying assertion(executes immediately , no retries)
  const title = await page.title();
  expect(title.includes("Demo Web Shop")).toBeTruthy(); //No auto retry

  const welcomeText = await page.locator("h2[class$='topic-html-content-header']").textContent();
  expect(welcomeText).toContain('Welcome');//no-retrying

  //3. Negating matcher(applicable for both auto-retrying and non-auto retrying assertions)
//   await expect(page.locator("h2[class$='topic-html-content-header']")).not.toBeVisible();//auto-retry
//   expect(welcomeText).not.toContain('Welcome');//no-auto retry

  await page.waitForTimeout(3000)
})