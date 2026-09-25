const assert = require('node:assert/strict');

class LoginPage {
  constructor(page) {
    this.page = page;
    this.usernameInput = page.getByPlaceholder('Enter your email or mobile number');
    this.passwordInput = page.getByPlaceholder('Enter your password');
    this.loginButton = page.getByRole('button', { name: 'Sign In' });
  }

  async open() {
    await this.page.goto('/');
  }

  async login(username, password) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }
  async logout() {
    await this.page.locator('button[title="Logout"]').first().click();
    await this.page.getByRole('button', { name: 'Yes, Logout' }).click();
  }

  async assertTitle() {
    const actualTitle = await this.page.title();
    console.log(`Actual page title: ${actualTitle}`);
    assert.equal(actualTitle, 'Way2dev POS - Hotel Billing System');
    assert.equal(await this.page.locator('h2').textContent(), 'Welcome back');
    assert.equal(await this.page.locator('p').first().textContent(), 'Sign in to your account to continue');
  }

  async clickForgotPassword() {
    await this.page.getByRole('button', { name: 'Forgot password?' }).click();
  }

  async assertResetPasswordMessages() {
    assert.equal(await this.page.locator('h2').textContent(), 'Reset Password');
    assert.equal(await this.page.locator('p').filter({ hasText: 'Enter your registered email or mobile number' }).textContent(), 'Enter your registered email or mobile number');
    assert.equal(await this.page.locator('p').filter({ hasText: 'Staff users must contact the hotel admin to reset or change their password.' }).textContent(), 'Staff users must contact the hotel admin to reset or change their password.');
    assert.equal(await this.page.locator('span').filter({ hasText: 'A 6-digit verification code & reset link will be sent directly to your registered WhatsApp (+91) and email.' }).textContent(), 'A 6-digit verification code & reset link will be sent directly to your registered WhatsApp (+91) and email.');
    assert.equal(await this.page.getByPlaceholder('e.g. admin@hotel.com or 9876543210').isVisible(), true);
 await this.page.getByRole('button', { name: 'Back to sign in' }).click();  
  assert.equal(await this.page.locator('h2').textContent(), 'Welcome back');
}
}

module.exports = { LoginPage };
