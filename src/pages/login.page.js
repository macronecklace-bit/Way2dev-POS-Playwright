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
    await expect(this.page.locator('h2', { hasText: 'Welcome back' })).toHaveText('Welcome back');
    await expect(this.page.locator('p', { hasText: 'Welcome back' })).toHaveText('Sign in to your account to continue');
    // return actualTitle;
  }
}

module.exports = { LoginPage };
