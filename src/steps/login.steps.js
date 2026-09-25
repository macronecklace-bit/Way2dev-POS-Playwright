const assert = require('node:assert/strict');
const { Given, When, Then } = require('@cucumber/cucumber');
const { LoginPage } = require('../pages/login.page');
const { ProductsPage } = require('../pages/products.page');

Given('I navigate to the Way2dev POS login page', async function () {
  this.loginPage = new LoginPage(this.page);
  await this.loginPage.open();
});

When('I log in with username {string} and password {string}', async function (username, password) {
  await this.loginPage.login(username, password);
});

Then('I should see the products page', async function () {
  const productsPage = new ProductsPage(this.page);
  await productsPage.assertTitle();
});

Then('I should be able to logout successfully', async function () {
  await this.loginPage.logout();
});
Then('I verify home page texts', async function () {
  await this.loginPage.assertTitle();
});
When('I click on the Forgot Password link', async function () {
  await this.loginPage.clickForgotPassword();
});

Then('I should see the Reset Password messages', async function () {
  await this.loginPage.assertResetPasswordMessages();
});