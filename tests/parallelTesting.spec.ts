import {test,expect} from "@playwright/test"
// test.describe.configure({mode:'parallel'})

// test.describe.configure({mode:'parallel'})

test.describe("group1",async()=>{
    test("Test1",async({page})=>{
        console.log("this is test1....");
    })

    test("Test2",async({page})=>{
        console.log("this is test2....");
    })

    test("Test3",async({page})=>{
        console.log("this is test3....");
    })

    test("Test4",async({page})=>{
        console.log("this is test4....");
    })

    test("Test5",async({page})=>{
        console.log("this is test5....");
    })
})