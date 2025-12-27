class CartPage {
  constructor(page) {
    this.page = page;

    // Stable final total on cart page
    this.cartTotal = page.locator('td.cart-total-right strong');
  }

  async openViaHeader() {
    // Navigate like a real user
    await this.page.locator('#topcartlink a').click();
    // Ensure cart page loaded
    await this.page.waitForURL('**/cart');
  }

  async getDisplayedTotal() {
    // Wait until total is visible (AJAX-safe)
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

// class CartPage {
//   constructor(page) {
//     this.page = page;
//     this.subTotal = '.cart-total-right .value-summary';
//   }

//   async openCart() {
//     await this.page.goto('https://demowebshop.tricentis.com/cart');
//   }

//   async getSubTotal() {
//     await this.page.waitForSelector(this.subTotal);
//     const text = await this.page.locator(this.subTotal).innerText();
//     return parseFloat(text.replace(/[^0-9.]/g, ''));
//   }

//   async acceptTermsAndCheckout() {
//     await this.page.locator('#termsofservice').check();
//     await this.page.locator('#checkout').click();
//   }
// }

// module.exports = CartPage;