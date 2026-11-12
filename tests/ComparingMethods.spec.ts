//Comparing methods
import {test,expect,Locator} from "@playwright/test"

test("Comparing Methods",async({page})=>{
 
    await page.goto("https://demowebshop.tricentis.com/")
    const products:Locator =  page.locator(".product-title");
    //innerText() vs textContent()
    // console.log(await products.nth(1).innerText());
    // console.log(await products.nth(1).textContent());

    //Printing all the products name
    const count:number = await products.count();

    // for(let i=0; i<count; i++){
    //     //const productName:string | null =  await products.nth(i).innerText();
    // //    console.log(productName);
       
    //     // const productName:string | null =  await products.nth(i).textContent();   
    //     // console.log(productName);

    //     // const productName:string | null =  await products.nth(i).textContent();   
    //     // console.log(productName?.trim());//sometime the output could be a string or null so thats why we have added ? here
    // }

    // console.log("***Comparing all innerText() vs allTextContent()");
    //allInnerText()
    // const product:string[] =await products.allInnerTexts();
     // for(let prod of product){
    //     console.log(prod);
    // }

    //allTextContent()
    // const product:string[] =(await products.allTextContents()).map(text=>text.trim());
    //  for(let prod of product){
    //     console.log(prod);
    // }

    // 3. all()
    const productsLocator:Locator[] = (await products.all())
    //for of loop
    // for(let prod of productsLocator){
    //    const text = await prod.innerText();
    //    console.log(text);  
    // }

    //for in loop
    for(let prod in productsLocator){
        const text = await productsLocator[prod].innerText();
        console.log(text);
        
    }
    

})