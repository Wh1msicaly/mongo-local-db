import puppeteer from 'puppeteer'
import util from 'node:util'
import { expect } from 'chai';

describe("browser test", function() {

	it('should have no collections by default', async function() {			
    const browser = await puppeteer.launch({headless: false});
    const page = await browser.newPage();
    const timeout = 5000;
    page.setDefaultTimeout(timeout);
  
    try {
      page.on('console', message => { console.log(util.inspect(message,false,null,true)) })

      await page.goto("http://127.0.0.1:8080/index.html");
      
      const pre = await page.waitForSelector(`body pre`, {timeout, visible: true});
      const txt = await pre.evaluate(el => el.textContent)
      expect(txt).to.equal('{"localStorage":{"isCollection":true}}')

    } catch (err) {
      console.log(err);
    } finally {
      await browser.close();
    }
  })
})

