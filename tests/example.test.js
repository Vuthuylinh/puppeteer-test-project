const puppeteer = require('puppeteer')

describe('My first puppeteer test',()=>{
    it('should load the browser', async ()=>{
      const browser = await puppeteer.launch({
        headless: false,
        slowMo: 10,
        devtools: false
      })
      const page = await browser.newPage()
      await page.goto("https://www.amazon.com/")
      await page.type("#twotabsearchtextbox", "cooker", {delay: 1000}) //1st argument is the selector, 2nd is value, 3rd arg-> slow motion -> slow typing speed -> dev to test
      await page.waitFor(5000) // got to the browser for 5secs
      await browser.close()
    })
})
