// cypress/support/pageObjects/HomePage.js

class HomePage {
  visit() {
    cy.visit('https://automationexercise.com');
  }

  verifyHomePageLoaded() {
    cy.url().should('include', 'automationexercise.com');
    cy.get('h2').contains('Category').should('be.visible');
  }

  scrollToCategorySection() {
    cy.contains('h2', 'Category').scrollIntoView({ duration: 1000 });
  }

  expandWomenCategory() {
    cy.get('.fa.fa-plus').first().click();
  }

  clickWomenDressesCategory() {
    cy.get('[href="/category_products/1"]').click();
    cy.url().should('include', '/category_products/1');
  }
}

export default HomePage;
