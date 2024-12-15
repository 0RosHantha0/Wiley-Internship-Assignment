import test from "@playwright/test";

test.only ("Register", async ({page}) => {
    
    await page.goto("https://onlinelibrary.wiley.com/ ")
    await page.locator(".sign-in-label").click()
    await page.getByRole('link', {name: 'REGISTER'}).click()
    await page.locator("#email-input-label").fill("roshantha3456@gmail.com")
})

test ("Login", async ({page}) => {
    
    await page.goto("https://onlinelibrary.wiley.com/ ")
    await page.locator(".sign-in-label").click()
    await page.getByRole('link', {name: 'Individual Login'}).click()
    await page.locator("#email-input-label").fill("roshantha3456@gmail.com")
    await page.locator("#pass-input").fill("rosh@3456")
})

test ("Search", async ({page}) => {
    
    await page.goto("https://onlinelibrary.wiley.com/ ")
    await page.locator("#searchField1").fill("Data Science")
    await page.locator(".btn quick-search__button icon-search").click()
})


