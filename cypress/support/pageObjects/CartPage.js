// cypress/support/pageObjects/CartPage.js

class CartPage {
  viewCart() {
    cy.get('a[href="/view_cart"]:visible').click();
  }

  verifyCartUrl() {
    cy.url().should('include', '/view_cart');
  }

  verifyProductInCart(productName) {
    cy.get('.cart_info').should('contain', productName);
  }

  clickCheckout() {
    cy.get('.btn.btn-default.check_out').click();
  }
}

export default CartPage;
