import {test,expect, Locator} from "@playwright/test"

test("Verify playwright locator",async({page})=>{
  // await page.goto("https://www.automationexercise.com/");
  await page.goto("https://naveenautomationlabs.com/opencart/index.php?route=account/register");
  //getByAltText()
//   const logo:Locator = page.getByAltText("naveenopencart")
  //Assertion
  // await expect(page.getByAltText("naveenopencart")).toBeVisible();
  // await expect(page.getByAltText("Website for automation practice")).toBeVisible();

  //page.getByText()
//   await expect(page.getByText("Featured")).toBeVisible();//full string
//    await expect(page.getByText("Feat")).toBeVisible();//provided substring/partial text
//writing same statement using Regular expression with case insensitivity
//  await expect(page.getByText(/Featured/)).toBeVisible();//regular expression
// await expect(page.getByText("Category")).toBeVisible();

//page.getByRole()
  // await page.getByRole("link",{name:'Software'}).click();
  //we can also use getByText here for heading as it is non interactable
  // await expect(page.getByRole("heading",{name:'Software'})).toBeVisible();
  // await page.getByRole("link",{name:" Signup / Login"}).click();
  // await expect(page.getByRole("heading",{name:"New User Signup!"})).toBeVisible();

  //page.getByLabel()
  // await page.getByLabel("First Name").type("John")//prev we were using type rather than fill but it is now depricated
  await page.getByLabel("First Name").fill("John")
  await page.getByLabel("Last Name").fill("Kumar")
  await page.getByLabel("E-Mail").fill("kumar.john@abc.com")

  //page.getByPlaceholder()
  await page.getByPlaceholder("Search").fill("T shirt")

  //page.getByTitle()
  await page.goto("file:///C:/Users/HP/Downloads/playwright-practice-lab.html")
  //this will returns a element
 const link:Locator = page.getByTitle("Save changes to your account")
  await expect(link).toBeVisible();

  //page.getByTestId()
  await expect(page.getByTestId("customer-name")).toHaveText("Jordan Lee");
  await expect(page.getByTestId("customer-plan")).toHaveText("Premium plan")

})