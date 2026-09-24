require('dotenv').config();

module.exports = {
  baseURL: process.env.BASE_URL || 'https://stagebilling.way2dev.in/',
  headless: process.env.HEADLESS !== 'false',
  slowMo: Number(process.env.SLOW_MO || 0),
  timeout: Number(process.env.PLAYWRIGHT_TIMEOUT || 30000),
  screenshot: process.env.SCREENSHOT || 'only-on-failure',
  video: process.env.VIDEO || 'retain-on-failure',
  trace: process.env.TRACE || 'retain-on-failure'
};
