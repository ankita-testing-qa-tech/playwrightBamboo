class CheckoutPage {
  constructor(page) {
    this.page = page;

    // Billing
    this.billingContinue =
      '#billing-buttons-container input[value="Continue"]';

    // Shipping
    this.shippingContinue =
      '#shipping-buttons-container input[value="Continue"]';

    // Shipping Method
    this.shippingMethodContinue =
      '#shipping-method-buttons-container input[value="Continue"]';

    // Payment Method (Cash on Delivery)
    this.paymentMethodRadio =
      'input[value="Payments.CashOnDelivery"]';
    this.paymentMethodContinue =
      '#payment-method-buttons-container input[value="Continue"]';

    // Payment Info
    this.paymentInfoContinue =
      '#payment-info-buttons-container input[value="Continue"]';

    // Confirm Order
    this.confirmOrderButton =
      '#confirm-order-buttons-container input[value="Confirm"]';

    // Success message
    this.orderSuccessTitle = '.order-completed';
  }

  async completeCheckout() {
    await this.page.locator(this.billingContinue).click();
    await this.page.locator(this.shippingContinue).click();
    await this.page.locator(this.shippingMethodContinue).click();

    await this.page.locator(this.paymentMethodRadio).check();
    await this.page.locator(this.paymentMethodContinue).click();

    await this.page.locator(this.paymentInfoContinue).click();
    await this.page.locator(this.confirmOrderButton).click();
  }

  async verifyOrderPlaced() {
    await this.page.waitForSelector(this.orderSuccessTitle, {
      timeout: 15000,
    });
  }
}

module.exports = CheckoutPage;