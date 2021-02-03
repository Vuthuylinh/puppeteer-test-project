const puppeteer = require('puppeteer');

const fse = require('fs-extra'); // v 5.0.0
const path = require('path');
const { URL } = require('url');

const fs = require("fs");
const scrapeWikipedia = async () => {
  const browser = await puppeteer.launch({
    headless: false
    // defaultViewport: null
  });
  const page = await browser.newPage();

  const wikiUrl = 'https://en.wikipedia.org/wiki/Groundhog_Day_(film)'
  // await page.goto(wikiUrl, { waitUntil: 'networkidle2' });
  // // Full access to the browser environment.
  // await page.evaluate(() => {
  //   const links = document.querySelectorAll('ul.sidebar li a');
  //   console.log(links)
  // });
  // try {
  //   // Take a screenshot
  //   await page.screenshot({ path: 'wikiScreenShot/example2.png' });

  //   // Create a PDF
  //   await page.pdf({
  //     path: 'example3.pdf',
  //     format: 'A6',
  //     printBackground: true,
  //     scale: 0.5
  //   });

  // } catch (error) {
  //   console.log(error)
  // }
  // page.on('response', async (response) => {
  //   const url = new URL(response.url());
  //   let filePath = path.resolve(`./output${url.pathname}`);
  //   if (path.extname(url.pathname).trim() === '') {
  //     filePath = `${filePath}/index.html`;
  //   }
  //   await fse.outputFile(filePath, await response.buffer());
  // });

  // /* 3 */
  // await page.goto(wikiUrl, {
  //   waitUntil: 'networkidle2'
  // });

  await page.goto(wikiUrl, { waitUntil: "networkidle2" });
	// hacky defensive move but I don't know a better way:
	// wait a bit so that the browser finishes executing JavaScript
	// await page.waitFor(1 * 1000);
	const html = await page.content();
	fs.writeFileSync("./outputHTML/index.html", html);

  //never forget to close
  await browser.close();

}

scrapeWikipedia()
