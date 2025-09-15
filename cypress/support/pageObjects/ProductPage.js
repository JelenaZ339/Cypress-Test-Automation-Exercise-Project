// cypress/support/pageObjects/ProductPage.js

class ProductPage {
  //Click a product by its href
  clickProductByHref(href) {
    cy.get(`[href="${href}"]`).click();
  }

  //Clear quantity input and enter the desired amount
  setQuantity(quantity) {
    cy.get('input#quantity').clear().type(quantity);
  }

  //Click "Add to cart" button
  clickAddToCart() {
    cy.get('button.btn.btn-default.cart').click();
  }

  //Verify "Added!" modal is visible
  verifyAddedModal() {
    cy.get('.modal-content').should('be.visible');
    cy.get('.modal-content').contains('Added!').should('exist');
  }

  //Click "Continue Shopping" on modal
  clickContinueShopping() {
    cy.get('button.btn.btn-success.close-modal.btn-block').click();
  }

}

export default ProductPage;

