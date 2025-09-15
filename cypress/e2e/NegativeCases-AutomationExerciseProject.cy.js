//This project demonstrates negative test cases written in Cypress for the [Automation Exercise demo site](https://automationexercise.com), which is a publicly available test site used for automation practice.

//Note: This site does not implement full input validation logic. These tests are written to demonstrate testing skills, even though the site allows invalid actions.


import NegativeCases from '../support/pageObjects/NegativeCases';

describe('Automation Exercise - Negative Test Cases (POM)', () => {
  it('Runs negative scenarios using Page Object Model', () => {
    //Visit and verify home page
    NegativeCases.visitHomePage();

    //Navigate to Kids section and open product
    NegativeCases.navigateToKidsCategory();
    NegativeCases.openProductDetails();

    //Add large quantity to cart
    NegativeCases.addLargeQuantityToCart();
    NegativeCases.closeCartModal();
    NegativeCases.goToCart();

    //Newsletter subscription with malformed email
    NegativeCases.subscribeWithMalformedEmail('thisisnotavalidemail');

    //Attempt registration with invalid inputs
    NegativeCases.goToSignupPage();
    NegativeCases.fillInvalidSignupForm();
    NegativeCases.submitSignupForm();

    //Add negative quantity to cart
    NegativeCases.addNegativeQuantityToCart();

    //Perform invalid product search
    NegativeCases.searchWithInvalidInput();
  });
});
