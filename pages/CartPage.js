class CartPage {
  constructor(page) {
    this.page = page;
    this.cartTotal = page.locator('td.cart-total-right strong');
  }

  async openViaHeader() {
    await this.page.locator('#topcartlink a').click();
    await this.page.waitForURL('**/cart');
  }

  async getDisplayedTotal() {
    await this.cartTotal.waitFor({ state: 'visible', timeout: 15000 });
    const text = await this.cartTotal.innerText();
    return parseFloat(text.replace(/[^0-9.]/g, ''));
  }
  async acceptTermsAndCheckout() {
  const terms = this.page.locator('#termsofservice');
  if (!(await terms.isChecked())) {
    await terms.check();
  }

  await this.page.locator('#checkout').click();
}
}

module.exports = CartPage;