//Playwright actions
import { test, expect, Locator } from "@playwright/test"

//Text Input/Input Box/Text Box
test("Text input actions", async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/")
    const textBox: Locator = page.locator("input#name")
    await expect(textBox).toBeVisible()
    await expect(textBox).toBeEnabled()
    const maxLength: string | null = await textBox.getAttribute("maxlength")
    expect(maxLength).toBe("15");
    await textBox.fill("John Kennedy")
    // console.log("Text content of First Name: ",await textBox.textContent());//returns empty
    const inputValue: string | null = await textBox.inputValue();
    console.log("Input value of the First Name: ", inputValue)//returns the input value of the text box
    expect(inputValue).toBe("John Kennedy")

})

//Radio Buttons
test("Radio Buttons actions", async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/")
    const maleradioBtn: Locator = page.locator("input#male")//male radio button
    await expect(maleradioBtn).toBeVisible();
    await expect(maleradioBtn).toBeEnabled();
    expect(await maleradioBtn.isChecked()).toBe(false)//because by default radio button is not checked thats why false
    await maleradioBtn.check()//it will select the radio button
    //    expect(await maleradioBtn.isChecked()).toBe(true)//this time the radio btn is checked so it should returns true
    await expect(maleradioBtn).toBeChecked();//this method is prefferable always

})

//CheckBox Actions
test.only("CheckBox actions", async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/")
    //1 select specific checkbox(Sunday) using getByLabel() and assert
    //   const sundayChkBox:Locator = page.getByLabel("Sunday")
    //    await sundayChkBox.check()
    //    await expect(sundayChkBox).toBeChecked()

    //select all the checkboxes(days of the week) and assert each is checked
    const days: string[] = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    const checkBoxes: Locator[] = days.map(index => page.getByLabel(index));
    expect(checkBoxes.length).toBe(7);

    //select all checkboxes and assert each is checked
    // for (let chkBox of checkBoxes) {
    //     await chkBox.check();
    //     await expect(chkBox).toBeChecked();
    // }

    //uncheck last 3 checkboxes and assert
    // for (let chkBox of checkBoxes.slice(-3)) {
    //     await chkBox.uncheck();//uncheck last 3 checkboxes
    //     await expect(chkBox).not.toBeChecked();
    // }

    //Select checkboxes which are not selected and uncheck checkboxes which are selected. Assert for state flipped
    // for (let chkBox of checkBoxes) {
    //     if (await chkBox.isChecked()) {
    //         //do uncheck if chkbox is already checked
    //         await chkBox.uncheck();
    //         await expect(chkBox).not.toBeChecked();
    //     }
    //     else {
    //         //do this if chkbox is unchecked
    //         await chkBox.check();
    //         await expect(chkBox).toBeChecked();
    //     }
    // }

    //Randomly select check boxes - Select checkboxes by index(1,3,6) and assert
    // const indexes:number[] = [1,3,6];
    // for(const i of indexes){
    //     await checkBoxes[i].check();
    //     await expect(checkBoxes[i]).toBeChecked()
    // }

    //select the check box based on the label
  const weekName:string = "Friday";
  for(const label of days){
    if(label.toLowerCase()===weekName.toLowerCase()){
        const checkBox = page.getByLabel(label);//locate the checkbox with speific label
         checkBox.check();//select the located checkbox
        await expect(checkBox).toBeChecked()//asserting the checkbox is checked or not
    }
  }

}) 