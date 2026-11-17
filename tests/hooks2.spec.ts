import { test, expect, Page } from "@playwright/test"

let page: Page;

test.beforeAll("Open App", async ({ browser }) => {
  page = await browser.newPage();
  await page.goto("https://www.demoblaze.com/");
})

test.afterAll("Close app", async () => {
  await page.close();
})

test.beforeEach("Login", async () => {
  await page.locator("#login2").click();
  await page.locator("#loginusername").fill("john.smith@example.com")
  await page.locator("#loginpassword").fill("123456")
  await page.locator("button[onclick='logIn()']").click();
  await page.waitForTimeout(2000);
})

test.afterEach("Logout", async () => {
  await page.locator("#logout2").click();
})


test.describe("mygroup",async()=>{
test("Find No. Product", async () => {
  const products = page.locator("#tbodyid .hrefch");
  const count = await products.count();
  console.log("Number of products: ",count);
  expect(products).toHaveCount(9);
})

test("Add product to cart", async () => {
  await page.locator("a:has-text('Samsung galaxy s6')").click();
  //Handle alert before the click
  page.once("dialog",async(dialog)=>{
    expect(dialog.message).toContain("Product added");//aseerting the alert popup message
    await dialog.accept();//to accept the alert and close it 
  })
  await page.locator("a[class='btn btn-success btn-lg']").click()
})

})

