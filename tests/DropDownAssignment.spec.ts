//Drop down assignment

import { test, expect, Locator } from "@playwright/test";

test("Drop down Assignment", async ({ page }) => {
    //nAVIGATE TO THE WEBPAGE
    await page.goto("https://bstackdemo.com/");

    // Locate and select dropdown
    const priceDropDown: Locator = page.locator("select");
    //VERIFY THE DROPDOWN IS DISPLAYED AND ENABLED
    await expect(priceDropDown).toBeVisible();
    await expect(priceDropDown).toBeEnabled();
    //SELECT THE OPTIONS LOWEST TO HIGHEST FROM THE DROPDOWN
    await priceDropDown.selectOption({ value: "lowestprice" });

    // Locate product names and prices
    const productNames: Locator = page.locator(".shelf-item__title");

    const productPrice: Locator = page.locator(
        ".shelf-item__price > div.val > b"
    );

    // Wait until products are sorted in ascending order
    await expect.poll(async () => {

        const prices = await productPrice.allTextContents();

        const numericPrices = prices.map(p =>
            Number(p.replace("$", "").trim())
        );

        return numericPrices.length > 0 &&
            numericPrices.every((p, i) =>
                i === 0 || p >= numericPrices[i - 1]
            );

    }).toBe(true);

    // Retrieve product names
    const names: string[] = await productNames.allTextContents();

    console.log("Product Names:", names);

    // Retrieve product prices
    const price: string[] = await productPrice.allTextContents();

    console.log("Product Prices:", price);

    // Verify product names and prices count are equal
    await expect(productNames).toHaveCount(await productPrice.count());

    // Print each product name with its corresponding price
    for (let i = 0; i < names.length; i++) {
        console.log(names[i] + " ==> " + price[i]);
    }

    // Access first product name and price
    console.log("First Product Name:", names[0]);
    console.log("First Product Price:", price[0]);

    // Print lowest-priced product
    const numericPrices = price.map(p =>
        Number(p.replace("$", "").trim())
    );

    const lowestPrice = Math.min(...numericPrices);

    const lowestIndex = numericPrices.indexOf(lowestPrice);

    console.log("Lowest Price Product:", names[lowestIndex]);
    console.log("Lowest Price:", lowestPrice);

    // Print highest-priced product
    const highestPrice = Math.max(...numericPrices);

    const highestIndex = numericPrices.indexOf(highestPrice);

    console.log("Highest Price Product:", names[highestIndex]);
    console.log("Highest Price:", highestPrice);

    //Access the last eleemnt of the product price list and last elem of the product name list
    console.log("Last element of product price: ", await productPrice.last().textContent());
    console.log("Last element of product name: ", await productNames.last().textContent());
});
