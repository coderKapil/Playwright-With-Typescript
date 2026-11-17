import {test,expect} from "@playwright/test"

//only
test("test1",async({page})=>{
    await page.goto("https://www.google.com/")
    expect(page).toHaveTitle("Google")
})

//skip
test.skip("test2",async({page})=>{
    await page.goto("https://www.google.com/")
    expect(page).toHaveTitle("Google")
})//skip the test based on the condition

//skip based on condition
test("test3",async({page,browserName})=>{
    test.skip(browserName === 'chromium','This test will ne skipped if browser is firefox')
    await page.goto("https://www.google.com/")
    expect(page).toHaveTitle("Google")
})

//fail
test.fail("test4",async({page})=>{
    await page.goto("https://www.google.com/")
    expect(page).toHaveTitle("Google")
})

//fixme
test.fixme("test5",async({page})=>{
    await page.goto("https://www.google.com/")
    // expect(page).toHaveTitle("Google")
})

//slow
test("test6",async({page})=>{
    test.slow()//default timeout is 30 sec it will triple the timeout that is 90 sec
    await page.goto("https://www.google.com/")
    expect(page).toHaveTitle("Google")
})