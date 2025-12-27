class ProductPage {
  constructor(page) {
    this.page = page;

   
    this.productLink = (name) =>
      page.locator('.product-title a', { hasText: name });

    
    this.priceLabel = page.locator('.product-price');
    this.qtyInput = page.locator('input.qty-input');

    
    this.addToCartButton = page.locator('input[id^="add-to-cart-button"]');
  }

  async addProduct(productName, quantity = 1) {
    
    await this.productLink(productName).first().click();

    
    const priceText = await this.priceLabel.innerText();
    const price = parseFloat(priceText);

    
    if (quantity > 1) {
      await this.qtyInput.fill(String(quantity));
    }

    
    await this.addToCartButton.click();

    
    await this.page.waitForSelector('.bar-notification.success', {
      timeout: 10000,
    });

    return price;
  }
}

module.exports = ProductPage;


// class ProductPage {
//   constructor(page) {
//     this.page = page;
//   }

//   async addProductToCart(productName) {
//     const productCard = this.page
//       .locator('.product-item')
//       .filter({ hasText: productName });

//     await productCard.scrollIntoViewIfNeeded();

//     const addToCartButton = productCard.locator(
//       'input.button-2.product-box-add-to-cart-button'
//     );

//     await addToCartButton.click();
//   }
// }

// module.exports = ProductPage;
