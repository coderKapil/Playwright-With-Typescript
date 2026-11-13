import { test, expect, Frame, Locator } from "@playwright/test"

test("Handle Frames", async ({ page }) => {
    await page.goto("https://ui.vision/demo/webtest/frames/")
    //Total numbers of frames
    // const allFrames: Frame[] = page.frames();
    // console.log("Number of frames: ", allFrames.length);

    //Approach 1 ---> using page.frame()
    // const frame = page.frame({ url: "https://ui.vision/demo/webtest/frames/frame_1" });
    // if (frame) {//if the frame is present then locate the ele inside the frame and perform action on it
    //     await frame.locator("[name='mytext1']").fill("Hello World")
    //     // await frame.fill("[name='mytext1']", "John");
    // }
    // else {
    //     console.log("Frame is not available");
    // }

      //Approach 2 ---> using page.frameLocator()
    const inputBox =  page.frameLocator("[src='frame_1.html']").locator("[name='mytext1']");
    await inputBox.fill("John");

})

test.only("Inner/child Frame demo", async ({ page }) => {
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