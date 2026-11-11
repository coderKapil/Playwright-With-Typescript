//How to handle dynamci web element

import {test,expect, Locator} from "@playwright/test"

//using Xpath
/*
test("Handle dynamic Web Element",async({page})=>{
//Navigate to the target page
   await page.goto("https://testautomationpractice.blogspot.com/")
   //Loop to click the button 5 times
   for(let i=1; i<=5; i++){
    // let dynamicButton:Locator =page.locator("//button[text()='START' or text()='STOP']")
    // let dynamicButton = page.locator("//button[contains(@name,'st')]")
    // let dynamicButton = page.locator("//button[starts-with(@name,'st')]")
    let dynamicButton = page.locator("//button[@name='start' or @name='stop']")
    //click the button
    await dynamicButton.click()

    //wait for 2 sec
    await page.waitForTimeout(2000)
   }
})
   */

//Using CSS
/*
test("Handle dynamic Web Element",async({page})=>{
   await page.goto("https://testautomationpractice.blogspot.com/")
   //Loop to click the button 5 times
   for(let i=1; i<=5; i++){
     //Locate the button using css attribute selector (name can be start or stop)
  const button = page.locator('button[name="start"], button[name="stop"]')    //click the button
    await button.click()

    //wait for 2 sec
    await page.waitForTimeout(2000)
   }
})

*/

//Using Playwright locator getByRole
test("Handle dynamic Web Element",async({page})=>{
   await page.goto("https://testautomationpractice.blogspot.com/")
   //Loop to click the button 5 times
   for(let i=1; i<=5; i++){
     //Locate the button using css attribute selector (name can be start or stop)
  const button = page.getByRole("button",{name:/START|STOP/})    //click the button
    await button.click()

    //wait for 2 sec
    await page.waitForTimeout(2000)
   }
})