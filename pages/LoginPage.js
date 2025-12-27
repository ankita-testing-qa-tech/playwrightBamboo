class LoginPage {
  constructor(page) {
    this.page = page;
    this.emailInput = page.locator('#Email');
    this.passwordInput = page.locator('#Password');
    this.loginButton = page.locator('input[value="Log in"]');
  }

  async open() {
    await this.page.goto('https://demowebshop.tricentis.com/login');
  }

  async login(email, password) {
    if (!email || !password) {
      throw new Error(
        'Email or Password is undefined. Check your .env file and dotenv config.'
      );
    }

    await this.open();
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);

    await Promise.all([
      this.page.waitForNavigation(),
      this.loginButton.click()
    ]);
  }
}
module.exports = LoginPage;