//Handle Alerts using Playwright
import {test,expect} from "@playwright/test"

test("Simple alert",async({page})=>{
 await page.goto("https://testautomationpractice.blogspot.com/");
 //Register a Dialog Handler
 page.on('dialog',(dialog)=>{
    console.log("Dialog type: ",dialog.type());//returns the type of dialog
    expect(dialog.type()).toContain("alert");
    console.log("Dialog Text: ",dialog.message())//returns the dialog text
    expect(dialog.message()).toContain("I am an alert box!")
    dialog.accept();//it will accept the alert
 })
 await page.locator("#alertBtn").click()
 await page.waitForTimeout(2000);
})

//Confirmation Alert
test("Confirm alert",async({page})=>{
 await page.goto("https://testautomationpractice.blogspot.com/");
 //Register a Dialog Handler
 page.on('dialog',(dialog)=>{
    console.log("Dialog type: ",dialog.type());//returns the type of dialog
    expect(dialog.type()).toContain("confirm");
    console.log("Dialog Text: ",dialog.message())//returns the dialog text
    expect(dialog.message()).toContain("Press a button!")
    dialog.accept();//it will close the alert by accepting
    // dialog.dismiss();//it will close the alert by dismiss
 })
 await page.locator("#confirmBtn").click()
 const text:string = await page.locator("#demo").innerText();
 console.log("Output Text: ",text);
//  expect(page.locator("#demo")).toHaveText("You pressed Cancel!");
 expect(page.locator("#demo")).toHaveText("You pressed OK!");
 await page.waitForTimeout(2000);
})

//Prompt Alert
test.only("Prompt alert",async({page})=>{
 await page.goto("https://testautomationpractice.blogspot.com/");
 //Register a Dialog Handler
 page.on('dialog',(dialog)=>{
    console.log("Dialog type: ",dialog.type());//returns the type of dialog
    expect(dialog.type()).toContain("prompt");
    console.log("Dialog Text: ",dialog.message())//returns the dialog text
    expect(dialog.message()).toContain("Please enter your name:")
    expect(dialog.defaultValue()).toContain("Harry Potter")
    dialog.accept('John');//it will close the alert by accepting
 })
 await page.locator("#promptBtn").click()
 const text:string = await page.locator("#demo").innerText();
 console.log("Output Text: ",text);
//  expect(page.locator("#demo")).toHaveText("You pressed Cancel!");
 expect(page.locator("#demo")).toHaveText("Hello John! How are you today?");
 await page.waitForTimeout(2000);
})