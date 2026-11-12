import {test,expect,Locator} from "@playwright/test"

test("Handle Static web tables",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
   const table:Locator =  page.locator(" table[name='BookTable'] tbody");
   await expect(table).toBeVisible();

   //1. count number of rows in a table
//    const rows:Locator =  page.locator(" table[name='BookTable'] tbody tr") //returns all the rows including headers
//as we already have this much part for table (table[name='BookTable'] tbody) locator
const rows:Locator =  table.locator("tr");//this is called chaining of locators
  const rowcount:number = await rows.count();
   await expect(rows).toHaveCount(7);//Approach 1
   console.log("Row count: ",rowcount);
   expect(rowcount).toBe(7);//Approach 2

   //2. count number of columns in a table
//    const cols:Locator = page.locator(" table[name='BookTable'] tbody th"); //returns all the columns in a table
const cols:Locator =  rows.locator("th");//chaining of locators
   const colCount:number = await cols.count();
   await expect(cols).toHaveCount(4);//Appraoch 1
   console.log("Columns count: ",colCount);
   expect(colCount).toBe(4);

   //3. Read all the data from 2nd row (index 2 means 3rd row including headers)
   const secondRowCells:Locator = rows.nth(2).locator('td');
  const secondRowText:string[] = await secondRowCells.allInnerTexts();

  console.log("Second row data: ",secondRowText);//[ 'Learn Java', 'Mukesh', 'Java', '500' ]
  await expect(secondRowCells).toHaveText([ 'Learn Java', 'Mukesh', 'Java', '500' ])

//   console.log("printing 2nd row data");

//   for(let data of secondRowText){
//    console.log(data);
   
//   }

//4.Read all the data from the header (excluding header)
console.log("Printing all table data....");
 const allRowData:Locator[] = await rows.all();//returns array of locator
 console.log("BookName Author Subject Price");
 
 for(let row of allRowData.slice(1)){//slice(skips the 1st row header row)
    const rowdata = await row.locator('td').allInnerTexts();
//join() → Combines array elements into a single string. \t → Adds horizontal tab spacing between elements.    
    console.log(rowdata.join("\t"));
 }

 //5. Print booknames where author is Mukesh
 console.log("Books written by Mukesh....")
 const mukeshBooks:string[] = [];
   for(let row of allRowData.slice(1)){//slice(skips the 1st row header row)
    const cells = await row.locator('td').allInnerTexts();
    const author = cells[1]
    const book = cells[0]

    if(author==='Mukesh'){
      console.log(`${author} \t ${book}`);
      mukeshBooks.push(book)
    }
 }

  expect(mukeshBooks).toHaveLength(2);
  
  //6. calculate the total price of the books
  let totalPrice = 0;
    for(let row of allRowData.slice(1)){//slice(skips the 1st row header row)
    const cells = await row.locator('td').allInnerTexts();
    const price = cells[3]
    totalPrice = totalPrice+parseInt(price);
 }

 console.log("Total price of all the books are: ",totalPrice);
 expect(totalPrice).toBe(7100)
  
})