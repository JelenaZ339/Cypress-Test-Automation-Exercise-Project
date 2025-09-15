class NegativeCases {

  visitHomePage() {
    cy.visit('https://automationexercise.com');
    cy.url().should('include', 'automationexercise.com');
  }

  navigateToKidsCategory() {
    cy.get('[href="#Kids"]').click({ force: true });
    cy.get('[href="/category_products/5"]').click();
  }

  openProductDetails(productId = 11) {
    cy.get(`[href="/product_details/${productId}"]`).click();
  }

  addLargeQuantityToCart() {
    cy.get('input[name="quantity"]').clear().type('111222333444555666777888999000');
    cy.get('button[type="button"]').contains('Add to cart').click();
    cy.get('#cartModal').should('be.visible');
  }

  closeCartModal() {
    cy.get('.btn.btn-success.close-modal.btn-block').click();
  }

  goToCart() {
    cy.get('a[href="/view_cart"]:visible').click();
  }

  subscribeWithMalformedEmail(email) {
    cy.get('#susbscribe_email').type(email);
    cy.get('.fa.fa-arrow-circle-o-right').click();
  }

  goToSignupPage() {
    cy.get('[href="/login"]').first().click();
  }

  fillInvalidSignupForm() {
    const invalidEmail = `user1111111111111${Date.now()}@invalid`;
    cy.get('[data-qa="signup-name"]').type('13314413131');
    cy.get('[data-qa="signup-email"]').type(invalidEmail);
    cy.get('[data-qa="signup-button"]').click();

    cy.get('#password').type('1:)1');
    cy.get('#days').type('Monday');
    cy.get('#first_name').type('1');
    cy.get('#last_name').type('@#$%^&');
    cy.get('#address1').type(';');
    cy.get('#state').type('a');
    cy.get('#city').type('000');
    cy.get('#zipcode').type('-3');
    cy.get('#mobile_number').type('a*=%');
  }

  submitSignupForm() {
    cy.get('[data-qa="create-account"]').click();
    cy.get('[data-qa="continue-button"]').click();
  }

  addNegativeQuantityToCart(productId = 1) {
    cy.get(`[href="/product_details/${productId}"]`).click();
    cy.get('input[name="quantity"]').clear().type('-1');
    cy.get('button[type="button"]').contains('Add to cart').click();
    cy.get('.btn.btn-success').click();
  }

  searchWithInvalidInput(input = -3) {
    cy.get('[href="/products"]').click();
    cy.get('#search_product').type(input);
    cy.get('.fa.fa-search').click();
  }
}

export default new NegativeCases();
