import {test,expect,Locator} from "@playwright/test"

test("Assignmnet on Auto suggest dropdown",async({page})=>{
  await page.goto("https://www.myntra.com/");

    const searchBox: Locator = page.locator("input.desktop-searchBar");

    await expect(searchBox).toBeVisible();

    await searchBox.click();
   // Type characters one by one
    await searchBox.pressSequentially("mobile", { delay: 150 });
  await page.waitForTimeout(2000);//wait time for ajax call
  //autosuggestion options
  const options:Locator = page.locator("ul[class='desktop-group']>li")
  //count how many options are there
  const count:number = await options.count()
  console.log(count);
  //Printing all the suggested options in the console
  console.log("Printing all the suggested options....");
  
  for(let i=0; i<count; i++){
    const text = await options.nth(i).textContent();
    console.log(text); 
  }

  //select and click Mobile Cases
   for(let i=0; i<count; i++){
    const text = await options.nth(i).textContent();
    if(text === 'Mobile Cases'){
        await options.nth(i).click();
        break;
    }
  }

  //to see the output we will add timeout to pause the script
  await page.waitForTimeout(2000);
  
})