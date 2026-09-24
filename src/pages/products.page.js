const assert = require('node:assert/strict');

class ProductsPage {
  constructor(page) {
    this.page = page;
    this.title = page.locator('title');
  }

  async assertTitle() {
    const actualTitle = await this.page.title();
    assert.equal(actualTitle, 'Way2dev POS - Hotel Billing System');
  }
}

module.exports = { ProductsPage };
