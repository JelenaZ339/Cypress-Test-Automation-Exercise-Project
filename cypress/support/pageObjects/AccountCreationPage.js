class AccountCreationPage {
  selectTitle() {
    cy.get('#id_gender1').click();
  }

  enterPassword(password) {
    cy.get('#password').type(password);
  }

  selectDOB(day, month, year) {
    cy.get('#days').select(day);
    cy.get('#months').select(month);
    cy.get('#years').select(year);
  }

  checkNewsletter() {
    cy.get('#newsletter').click();
  }

  fillAddressDetails({
    firstName,
    lastName,
    address,
    country,
    state,
    city,
    zipcode,
    mobile,
  }) {
    cy.get('#first_name').type(firstName);
    cy.get('#last_name').type(lastName);
    cy.get('#address1').type(address);
    cy.get('#country').select(country);
    cy.get('#state').type(state);
    cy.get('#city').type(city);
    cy.get('#zipcode').type(zipcode);
    cy.get('#mobile_number').type(mobile);
  }

  clickCreateAccount() {
    cy.get('[data-qa="create-account"]').click();
  }

  verifyAccountCreatedAndContinue() {
    cy.contains('Account Created!').should('be.visible');
    cy.get('[data-qa="continue-button"]').click();
  }
}

export default AccountCreationPage;
