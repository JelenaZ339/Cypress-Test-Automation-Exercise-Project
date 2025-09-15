// cypress/support/pageObjects/SignUpPage.js

class SignUpPage {
  visit() {
    cy.visit('/login');  // Because signup starts from the login page here
  }

  enterName(name) {
    cy.get('[data-qa="signup-name"]').type(name);
  }

  enterEmail(email) {
    cy.get('[data-qa="signup-email"]').type(email);
  }

  clickSignupButton() {
    cy.get('[data-qa="signup-button"]').click();
  }
}

export default SignUpPage;
