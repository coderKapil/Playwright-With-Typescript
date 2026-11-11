import {test,expect,Locator} from "@playwright/test"
import { log } from "node:console";

test("xpath demo in playwright",async({page})=>{
 await page.goto("https://demowebshop.tricentis.com/")
 //1. Absolute xpath
//const absoluteLogo:Locator = page.locator("xpath=/html[1]/body[1]/div[4]/div[1]/div[1]/div[1]/a[1]/img[1]")//using xpath keyword is optional
   const absoluteLogo:Locator = page.locator("//html[1]/body[1]/div[4]/div[1]/div[1]/div[1]/a[1]/img[1]")//u can use // slash
   await expect(absoluteLogo).toBeVisible();

   //2. Relative xpath
    const relativeLogo:Locator = page.locator("//img[@alt='Tricentis Demo Web Shop']")
   
   await expect(relativeLogo).toBeVisible();

   //3.xpath with contains() method 
   //target group of elemengts usign contains()
   const products:Locator =page.locator("//h2/a[contains(@href,'computer')]");
   const productCount:number = await products.count()//returns the number of elements matching the locator
   console.log("Number of computer related products: ",productCount);
   expect(productCount).toBeGreaterThan(0);
//    console.log(await products.textContent())//strict mode violation
   console.log("First computer related product: ",await products.first().textContent());//this will extract the first product text
   console.log("Last computer related product: ",await products.last().textContent());//this will extract the last product text
   console.log("Random computer related product: ",await products.nth(1).textContent());//this will extract the nth product text
   let productTitles:string[] = await products.allTextContents();
   console.log("All product titles: ",productTitles);
   
   //printing values using for of loop
   for(let pt of productTitles){//here in for of loops pt is having actual values of array
     console.log(pt);
   }

//printing array values using for in loop
// for(let pt in productTitles){//here in for in loop pt is having index numbers
//     console.log(productTitles[pt]);
    
// }

//4. using starts-with()
    let buildProduct:Locator = page.locator("//h2/a[starts-with(@href,'/build')]");
   const count = await buildProduct.count()
    expect(count).toBeGreaterThan(0)

//5. text()
const registerLink:Locator = page.locator("//a[text()='Register']")
await expect(registerLink).toBeVisible();

//6. last()
const lastItem:Locator = page.locator("//div[@class='column follow-us']//li[last()]");
   await expect(lastItem).toBeVisible();
   console.log("Last item: ",await lastItem.textContent());
   

   //7. position()-->for specific position element
   const fourthItem:Locator = page.locator("//div[@class='column follow-us']//li[position()=4]")
   console.log("Fourth Item: ",await fourthItem.textContent());
   
   
})