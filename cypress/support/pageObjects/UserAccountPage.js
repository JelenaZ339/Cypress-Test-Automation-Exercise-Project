class UserAccountPage {
  subscribeToNewsletter(email) {
    cy.get('#susbscribe_email').type(email);
    cy.get('#subscribe').click();
    cy.contains('You have been successfully subscribed!').should('be.visible');
  }

  deleteAccount() {
    cy.get('[href="/delete_account"]').click();
    cy.contains('Account Deleted!').should('be.visible');
    cy.get('[data-qa="continue-button"]').click();
  }
}

export default UserAccountPage;
