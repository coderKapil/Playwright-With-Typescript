import {test,expect} from "@playwright/test"

test.beforeAll('BeforeAll',async()=>{
    console.log("this is before all...")
})

test.afterAll('AfterAll',async()=>{
    console.log("this is after all.....")
})

test.beforeEach('BeforeEach',async()=>{
    console.log("this is before each.....");
    
})

test.afterEach('AfterEach',async()=>{
    console.log("this is after each.....")
})

test('Test1',async()=>{
    //login
    console.log("this is Test1....");
    //logout
})

test('Test2',async()=>{
    //login
    console.log("this is Test2....");
    //logout
})

test('Test3',async()=>{
    console.log("this is Test3....");
})

test('Test4',async()=>{
    console.log("this is Test4....");
})

