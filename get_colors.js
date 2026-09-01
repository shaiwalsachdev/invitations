const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://www.shrianandpur.org/', {waitUntil: 'networkidle2'});
  
  const colors = await page.evaluate(() => {
    // get top header color
    const header = document.querySelector('header') || document.querySelector('nav') || document.body;
    return {
      headerBg: window.getComputedStyle(header).backgroundColor,
      bodyBg: window.getComputedStyle(document.body).backgroundColor,
      bodyText: window.getComputedStyle(document.body).color
    };
  });
  console.log(colors);
  await browser.close();
})();
