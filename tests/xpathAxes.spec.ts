//Xpath Axes
import {test,expect, Locator} from "@playwright/test"

test("Xpath Axes Demo",async({page})=>{
  await page.goto("https://www.w3schools.com/html/html_tables.asp")
  //1. self axis - select td element that contains the germany
  const germanyCell:Locator = page.locator("//td[text()='Germany']/self::td")
  console.log(await germanyCell.textContent());
  await expect(germanyCell).toHaveText("Germany")

  //2. parent axis - Get parent tr of the "Germany" cell
  const parentRow:Locator = page.locator("//td[text()='Germany']/parent::tr");
  await expect(parentRow).toContainText("Germany")  
  await expect(parentRow).toContainText("Alfreds Futterkiste Maria Anders Germany")  
  console.log(await parentRow.textContent());

  //3. child axis - Get all the td childrens of the second tr in the table
  const secondRowCells:Locator = page.locator("//table[@id='customers']//tr[2]/child::td")//returns multiple elements (td)
  await expect(secondRowCells).toHaveCount(3);

  //4. ancestor axis: Get ancestor <table> of the Germany cell
  const table:Locator = page.locator("//td[text()='Germany']/ancestor::table")
  await expect(table).toHaveAttribute('id','customers')

  //5. descendent axis: Get all <td> elements under the table
  let allTds:Locator = page.locator("//table[@id='customers']/descendant::td")
  await expect(allTds).toHaveCount(18);

  //6. following axis - Get the <td> that comes after "Germany" in the document order
  let followingTds:Locator = page.locator("//td[text()='Germany']/following::td[1]")
  await expect(followingTds).toHaveText("Centro comercial Moctezuma")

  //7. following-sibling - Get <td> to the right of "Germany"
  // let followingSibling:Locator = page.locator("//td[text()='Germany']/following-sibling::td")
  // await expect(followingSibling).toHaveCount(0);
  let rightSibling:Locator = page.locator("//td[text()='Maria Anders']/following-sibling::td")
  // await expect(rightSibling).toHaveText("Germany")
  await expect(rightSibling).toHaveCount(1)

  //8. Preceding axis: Get <td> just before "Germany"
  let precedingSiblings:Locator = page.locator("//td[text()='Germany']/preceding::td[1]")
  await expect(precedingSiblings).toHaveText("Maria Anders")

  //9. Preceding sibling axis - Get <td>s to the left of "Germany"
  let leftSibling:Locator = page.locator("//td[text()='Germany']/preceding-sibling::td")
  await expect(leftSibling.nth(0)).toHaveText("Alfreds Futterkiste")
  await expect(leftSibling.nth(1)).toHaveText("Maria Anders")
})