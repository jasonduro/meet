import puppeteer from 'puppeteer';

beforeAll(async () => { 
jest.setTimeout(30000); // Set the timeout to 30 seconds
});

describe('show/hide an event details', () => {
  
  test('An event element is collapsed by default', async () => {
    const browser = await puppeteer.launch();

    const page = await browser.newPage();
    await page.goto('http://localhost:3000/');

    await page.waitForSelector('.event');

    const eventDetails = await page.$('.event .event__Details');
    expect(eventDetails).toBeNull();
    browser.close();
  }, 30000); // Set the timeout specifically for this test to 30 seconds)

  test('User can expand an event to see its details', async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('http://localhost:3000/');

    await page.waitForSelector('.event');
    await page.click('.event .details-btn');

    const eventDetails = await page.$('.event .event__Details');
    expect(eventDetails).toBeDefined();
    browser.close();
  });
});