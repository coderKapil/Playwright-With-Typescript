import { test, expect } from "@playwright/test"

test('Upload single file', async ({ page }) => {
    await page.goto("https://practice.expandtesting.com/upload")
    await page.waitForSelector("#fileInput")
    await page.locator("#fileInput").setInputFiles("tests/uploadFiles/test1.txt")
    await page.waitForTimeout(2000)
})

test.only('Upload Multiple Files', async ({ page }) => {
    await page.goto("https://davidwalsh.name/demo/multiple-file-upload.php")
    await page.locator("input[id='filesToUpload']").setInputFiles(['tests/uploadFiles/test1.txt',
        'tests/uploadFiles/test2.txt'
    ])
    await expect(page.locator("#fileList li:nth-child(1)")).toHaveText("test1.txt")
    await expect(page.locator("#fileList li:nth-child(2)")).toHaveText("test2.txt")
    await page.waitForTimeout(3000);
    //Removing uploaded files
    await page.locator("input[id='filesToUpload']").setInputFiles([])

    expect(page.locator("#fileList li")).toHaveText("No Files Selected")
})