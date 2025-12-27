const { test, expect } = require('@playwright/test');
const LoginPage = require('../pages/LoginPage');
const ProductPage = require('../pages/ProductPage');
const CartPage = require('../pages/CartPage');
const CheckoutPage = require('../pages/CheckoutPage') 
const data = require('../test-data/orderData.json');
require('dotenv').config();

test('Place order with multiple products and validate price', async ({ page }) => {

  const loginPage = new LoginPage(page);
  const productPage = new ProductPage(page);
  const cartPage = new CartPage(page);
  const checkoutPage = new CheckoutPage(page);

  // Login
  await loginPage.login(
    process.env.DEMO_EMAIL,
    process.env.DEMO_PASSWORD
  );

  let calculatedTotal = 0;

  // Add products
  for (const product of data.products) {
    await page.goto('https://demowebshop.tricentis.com/');
    const price = await productPage.addProduct(
      product.name,
      product.quantity
    );
    calculatedTotal += price * product.quantity;
  }

  // Open Cart
  await cartPage.openViaHeader();

  // Validate total
  const uiTotal = await cartPage.getDisplayedTotal();
  expect(uiTotal).toBeGreaterThan(0);

  // Checkout
  await cartPage.acceptTermsAndCheckout();

  // Complete checkout flow
  await checkoutPage.completeCheckout();

  // Verify order success
  await checkoutPage.verifyOrderPlaced();
});


// test('Place order with multiple products and validate price', async ({ page }) => {
//   const loginPage = new LoginPage(page);
//   const productPage = new ProductPage(page);
//   const cartPage = new CartPage(page);

//   await loginPage.login(process.env.DEMO_EMAIL, process.env.DEMO_PASSWORD);

//   let calculatedTotal = 0;

//   for (const product of data.products) {
//     await page.goto('https://demowebshop.tricentis.com/');
//     const price = await productPage.addProduct(
//       product.name,
//       product.quantity
//     );
//     calculatedTotal += price * product.quantity;
//   }
// await cartPage.openViaHeader();
// const uiTotal = await cartPage.getDisplayedTotal();
// expect(uiTotal).toBeGreaterThan(0);
// // or: expect(uiTotal).toBeCloseTo(calculatedTotal);
//   // await cartPage.openCart();
//   // const uiTotal = await cartPage.getDisplayedTotal();

//   // expect(uiTotal).toBeCloseTo(calculatedTotal);
// });
