const puppeteer = require('puppeteer');

console.log("Running test..");

describe('Automated Website Tests', () => {
    let browser;
    let page;

    beforeAll(async () => {
        browser = await puppeteer.launch();
        page = await browser.newPage();
    });

    afterAll(async () => {
        await browser.close();
    });

    it('Page should have a title', async () => {
        await page.goto('https://your-website-url');
        const title = await page.title();
        expect(title).toBeTruthy();
    });

    it('Page should have the Navigation Bar', async () => {
        await page.goto('https://your-website-url');
        const navMenu = await page.$('#navbar');
        expect(navMenu).toBeTruthy();
    });
});

console.log("Test completed.");
