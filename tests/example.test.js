const puppeteer = require('puppeteer')

describe('My first puppeteer test',()=>{
    xit('should see what is typed in the input field', async ()=>{
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
    xit('should handle button', async ()=>{
      const browser = await puppeteer.launch({
        headless: false,
        slowMo: 10,
        devtools: false
      })
      const page = await browser.newPage()
      await page.goto("https://www.amazon.com/")
      const message = "electric cooker"
      await page.type("#twotabsearchtextbox", message,{delay: 200})
      await page.click("#nav-search-submit-button",{clickCount: 1})
      await page.waitFor(2000)
      await browser.close()
    })

    xit('should handles select/dropdown', async ()=>{
      const browser = await puppeteer.launch({
        headless: false,
        slowMo: 10,
        devtools: false
      })
      const page = await browser.newPage()
      await page.goto("https://devexpress.github.io/testcafe/example/")
      await page.select('#preferred-interface','JavaScript API')
      await page.waitFor(5000)
      await browser.close()
    })
    xit('should handles input, click, select/dropdown and submit', async ()=>{
      const browser = await puppeteer.launch({
        headless: false,
        slowMo: 10,
        devtools: false
      })
      const page = await browser.newPage()
      await page.goto("https://devexpress.github.io/testcafe/example/")
      await page.type("#developer-name","linh Vu",{delay: 500})
      await page.click("#tried-test-cafe")
      await page.select('#preferred-interface','JavaScript API')
      const message ="I am writing something nice in here"
      await page.type("#comments", message, {delay: 150})
      await page.click("#submit-button")
      await page.waitForSelector('.result-content')
      await page.waitFor(5000)
      await browser.close()
    })

    it('should extract title, url of a website ', async ()=>{
      const browser = await puppeteer.launch({
        headless: false,
        slowMo: 10,
        devtools: false
      })
      const page = await browser.newPage()
      await page.goto("https://www.nytimes.com/")
      const title = await page.title()
      const url = await page.url()
      console.log("TITLE: " + title)
      console.log("url " + url)
      await browser.close()
    })

})
