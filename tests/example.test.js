const puppeteer = require('puppeteer')

describe('My first puppeteer test',()=>{
    it('should load the browser', async ()=>{
      const browser = await puppeteer.launch({
        headless: false,
        slowMo: 10,
        devtools: false
      })
      const page = await browser.newPage()
      await page.goto('https://www.macys.com/shop/product/tommy-hilfiger-quilted-zip-jacket?ID=11351781&CategoryID=10066&swatchColor=Scarlet')

      await page.waitFor(3000)
      await page.waitForSelector('h1[class="p-name h3"]')

      await browser.close()
    })
})
