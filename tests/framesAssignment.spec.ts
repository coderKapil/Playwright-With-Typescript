import { test, expect, Frame, Locator } from "@playwright/test"

test("Handle Frame1", async ({ page }) => {
    await page.goto("https://ui.vision/demo/webtest/frames/")
    // Total numbers of frames
    const allFrames: Frame[] = page.frames();
    console.log("Number of frames: ", allFrames.length);

    // Approach 1 ---> using page.frame()
    const frame = page.frame({ url: "https://ui.vision/demo/webtest/frames/frame_1" });
    if (frame) {//if the frame is present then locate the ele inside the frame and perform action on it
        await frame.locator("[name='mytext1']").fill("Hello World")
        // await frame.fill("[name='mytext1']", "John");
    }
    else {
        console.log("Frame 1 is not available");
    }

      //Approach 2 ---> using page.frameLocator()
    // const inputBox =  page.frameLocator("[src='frame_1.html']").locator("[name='mytext1']");
    // await inputBox.fill("John");

})

test("Frame 2",async({page})=>{
    await page.goto("https://ui.vision/demo/webtest/frames/")
    // Total numbers of frames
    const frame2 = page.frame({url:"https://ui.vision/demo/webtest/frames/frame_2"})

    if(frame2){
        await frame2.locator("[name='mytext2']").fill("I am frame 2")
    }
    else{
        console.log("Frame 2 not found");
    }

})

test("Inner/child Frame demo", async ({ page }) => {
    await page.goto("https://ui.vision/demo/webtest/frames/")
    const frame3 = page.frame({url:"https://ui.vision/demo/webtest/frames/frame_3"})

    if(frame3){
       await frame3.locator("[name='mytext3']").fill("Welcome")
       const childFrames:Frame[] = frame3.childFrames();//
       console.log("Total number of child frames of frame3: ",childFrames.length);//one child frame exist

       const radioButton:Locator = childFrames[0].getByLabel("I am a human");
      await radioButton.check();
      await expect(radioButton).toBeChecked();
    }
    else{
        console.log("Frame 3 not found.....");
        
    }
})

test("Frame 4",async({page})=>{
    await page.goto("https://ui.vision/demo/webtest/frames/")
    // Total numbers of frames
    const frame4 = page.frame({url:"https://ui.vision/demo/webtest/frames/frame_4"})

    if(frame4){
        await frame4.locator("[name='mytext4']").fill("I am frame 4")
    }
    else{
        console.log("Frame 4 not found");
    }

})

test.only("Frame 5",async({page})=>{
    await page.goto("https://ui.vision/demo/webtest/frames/")
    // Total numbers of frames
    const frame5 = page.frame({url:"https://ui.vision/demo/webtest/frames/frame_5"})

    if(frame5){
        await frame5.locator("[name='mytext5']").fill("I am frame 5")
        const childframes = frame5.childFrames();
        console.log("Total number of Child frames of frame 5: ",childframes.length);
        await frame5.locator("a[href='https://a9t9.com']").click();
        const logo = frame5.getByAltText("Ui.Vision by a9t9 software - Image-Driven Automation")
       await expect(logo).toBeVisible();
    }
    else{
        console.log("Frame 5 not found");
    }

    // await page.waitForTimeout(3000)

})