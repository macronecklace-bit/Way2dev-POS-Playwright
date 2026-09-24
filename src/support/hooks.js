const { Before, After, Status, setDefaultTimeout } = require('@cucumber/cucumber');
const { chromium } = require('playwright');
const config = require('../../playwright.config');

setDefaultTimeout(config.timeout);

Before(async function () {
  this.browser = await chromium.launch({
    headless: config.headless,
    slowMo: config.slowMo
  });
  this.context = await this.browser.newContext({
    baseURL: config.baseURL,
    viewport: { width: 1440, height: 900 },
    ignoreHTTPSErrors: true,
    recordVideo: config.video === 'on' || config.video === 'retain-on-failure'
      ? { dir: 'reports/videos' }
      : undefined
  });
  this.page = await this.context.newPage();
});

After(async function ({ result }) {
  if (result?.status === Status.FAILED && this.page) {
    if (config.screenshot !== 'off') {
      await this.page.screenshot({
        path: `reports/screenshots/${Date.now()}-failure.png`,
        fullPage: true
      });
    }
  }

  if (this.context) {
    await this.context.close();
  }
  if (this.browser) {
    await this.browser.close();
  }
});
