const puppeteer = require('puppeteer')

describe('My first puppeteer test',()=>{
    it('should see what is typing in the input field', async ()=>{
      const browser = await puppeteer.launch({
        headless: false,
        slowMo: 10,
        devtools: false
      })
      const page = await browser.newPage()
      await page.goto("https://www.amazon.com/")
      await page.type("#twotabsearchtextbox", "cooker", {delay: 300}) //1st argument is the selector, 2nd is value, 3rd arg-> slow motion -> slow typing speed -> dev to test
      await page.waitFor(2000) // got to the browser for 5secs
      await browser.close()
    })
    it('should handle button', async ()=>{
      const browser = await puppeteer.launch({
        headless: false,
        slowMo: 10,
        devtools: false
      })
      const page = await browser.newPage()
      await page.goto("https://www.amazon.com/")
      await page.type("#twotabsearchtextbox", "cooker",{delay: 300})
      await page.click("#nav-search-submit-button",{clickCount: 1})
      await page.waitFor(5000)
      await browser.close()
    })

})
