// import puppeteer from 'puppeteer';

const URL = 'https://flagpedia.net/continent/africa';


// Source - https://stackoverflow.com/a/56534741
// Posted by Ben Adam, modified by community. See post 'Timeline' for change history
// Retrieved 2026-04-07, License - CC BY-SA 4.0

const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    page.on('response', async response => {
        const url = response.url();
        if (response.request().resourceType() === 'image') {
            response.buffer().then(file => {
                const fileName = url.split('/').pop();
                const filePath = path.resolve(__dirname, fileName);
                const writeStream = fs.createWriteStream(filePath);
                writeStream.write(file);
            });
        }
    });
    // await page.goto('https://flagpedia.net/continent/africa');
    await browser.close();
})();
