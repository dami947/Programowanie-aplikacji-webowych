import * as puppeteer from 'puppeteer';

import { getDay } from '../src/utils';

describe('e2e test', () => {
    let page: puppeteer.Page;
    let browser: puppeteer.Browser;
    let creationTime: string;
    beforeAll(async () => {
        // browser = await puppeteer.launch({ headless: false });
        browser = await puppeteer.launch();
        page = await browser.newPage();
        await page.goto('http://localhost:8080/');
        await page.waitForSelector('#add-note');
        await page.click('#add-note');
        await page.waitForSelector('#save-modal-btn');
        await page.type("#note-title", 'Testowy tytuł notatki');
        await page.type("#note-content", 'Notatka testowa');
        creationTime = getDay(Date.now())
        await page.click("#save-modal-btn");
    });

    it('was note created', async () => {
        await page.waitForSelector('#notes-other .note');
        let newestNoteTime = await page.evaluate(() => {
            // just added note should be last in unpinned
            const notes = [...document.querySelectorAll("#notes-other .note time")] as HTMLTimeElement[]; 
            const note = notes[notes.length - 1];
            return note.innerText;
        });

        await expect(newestNoteTime).toBe(creationTime);
    });

    afterAll(async () => {
        await page.screenshot({path: 'tests/screenshot.png'});
        await browser.close();
    })
});
