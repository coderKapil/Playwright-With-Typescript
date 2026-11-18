# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: uploadFiles.spec.ts >> Upload single file
- Location: tests\uploadFiles.spec.ts:3:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: page.waitForSelector: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('#fileInpu') to be visible

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - paragraph [ref=e3]:
    - link "PMP Practice" [ref=e4] [cursor=pointer]:
      - /url: https://pmp.expandtesting.com/
    - text: "| Free PMP Certification Mock Exam Test +900 Questions & Quizzes"
    - link "Software testing courses" [ref=e5] [cursor=pointer]
  - banner [ref=e10]:
    - navigation "Main navigation" [ref=e11]:
      - link "SUT" [ref=e12] [cursor=pointer]:
        - /url: /
        - 'img "Best Website for Practice Automation Testing: Free UI and REST API Examples and Apps. Using Cypress, Playwright, Selenium, WebdriverIO and Postman." [ref=e13]'
        - text: Practice
      - generic [ref=e14]:
        - list [ref=e15]:
          - listitem [ref=e16]:
            - button "Demos" [ref=e17] [cursor=pointer]
          - listitem [ref=e18]:
            - link "Tools" [ref=e19] [cursor=pointer]:
              - /url: /#tools
          - listitem [ref=e20]:
            - link "Tips" [ref=e21] [cursor=pointer]:
              - /url: /tips
          - listitem [ref=e22]:
            - link "Test Cases" [ref=e23] [cursor=pointer]:
              - /url: /test-cases
          - listitem [ref=e24]:
            - link "API Testing" [ref=e25] [cursor=pointer]:
              - /url: /notes/api/api-docs/
          - listitem [ref=e26]:
            - link "About" [ref=e27] [cursor=pointer]:
              - /url: /about
        - list
        - link "Free ISTQB Mock Exams" [ref=e28] [cursor=pointer]:
          - /url: https://istqb.expandtesting.com/
  - main [ref=e29]:
    - insertion [ref=e33]:
      - generic [ref=e36]:
        - heading "These are topics related to the article that might interest you" [level=2] [ref=e38]: Discover more
        - link "Test automation tools" [ref=e39] [cursor=pointer]
        - link "Automation practice website" [ref=e44] [cursor=pointer]
        - link "Cypress automation course" [ref=e49] [cursor=pointer]
    - paragraph [ref=e55]:
      - text: Do you enjoy this platform? ❤️
      - link "Buy us a coffee" [ref=e56] [cursor=pointer]:
        - /url: https://www.buymeacoffee.com/expandtesting
    - generic [ref=e60]:
      - navigation "breadcrumb mb-2" [ref=e61]:
        - list [ref=e62]:
          - listitem [ref=e63]:
            - link "Home" [ref=e64] [cursor=pointer]:
              - /url: /
          - listitem [ref=e65]: / File Uploader
      - heading "File Uploader page for Automation Testing Practice" [level=1] [ref=e66]
      - paragraph [ref=e67]: Only a file less than 500KB will be accepted.
      - generic [ref=e69]:
        - paragraph [ref=e70]:
          - text: A file upload feature that can be used by QA, SDET, and developers to practice uploading test automation scenarios
          - link "Test automation tools" [ref=e71] [cursor=pointer]
        - paragraph [ref=e75]: Choose a file on your system and then click upload. Or, drag and drop a file into the area below.
        - generic [ref=e76]:
          - button "Choose File" [ref=e78] [cursor=pointer]
          - button "Upload" [ref=e79] [cursor=pointer]
  - contentinfo [ref=e80]:
    - generic [ref=e85]:
      - heading "Practice Test Automation WebSite for Web UI and Rest API" [level=4] [ref=e86]
      - paragraph [ref=e87]:
        - text: "Version: e64cd80e | Copyright"
        - link "Expand Testing" [ref=e88] [cursor=pointer]:
          - /url: https://expandtesting.com/
        - text: "2026"
        - link "Software testing tutorials" [ref=e89] [cursor=pointer]
  - generic [ref=e93] [cursor=pointer]
```

# Test source

```ts
  1  | import {test,expect} from "@playwright/test"
  2  | 
  3  | test('Upload single file',async({page})=>{
  4  |   await page.goto("https://practice.expandtesting.com/upload")
> 5  |   await page.waitForSelector("#fileInpu")
     |              ^ Error: page.waitForSelector: Test timeout of 30000ms exceeded.
  6  |   await page.locator("#fileInput").setInputFiles("tests/uploadFiles/test1.txt")
  7  |   await page.waitForTimeout(2000)
  8  | })
  9  | 
  10 | // test('Upload Multiple Files',async({page})=>{
  11 | 
  12 | // })
```