import {
  HomePage,
  ProductPage,
  CategoryPage,
  CartPage,
  SignUpPage,
  AccountCreationPage,
  UserAccountPage
} from '../support/pageObjects';

describe('Test Automation E2E Purchase Process - Automation Exercise Website', () => {
  it('Purchasing products, creating an account and deleting it', () => {

    const homePage = new HomePage();

    homePage.visit();
    homePage.verifyHomePageLoaded();
    homePage.scrollToCategorySection();
    homePage.expandWomenCategory();
    homePage.clickWomenDressesCategory();


    const productPage = new ProductPage();

    productPage.clickProductByHref('/product_details/4');
    productPage.setQuantity(3);
    productPage.clickAddToCart();
    productPage.verifyAddedModal();
    productPage.clickContinueShopping();

    const categoryPage = new CategoryPage();

    //Click on Men category
    categoryPage.clickMenCategory();

    //Click on a specific category product
    categoryPage.clickCategoryProduct('/category_products/3');

    //Hover over product at index 5
    categoryPage.hoverProductByIndex(5);

    //Add product to cart at index 5
    categoryPage.addProductToCartByIndex(5);

    //Close the add-to-cart modal
    categoryPage.closeModal();


    const cartPage = new CartPage();

    cartPage.viewCart();
    cartPage.verifyCartUrl();
    cartPage.verifyProductInCart('Stylish Dress');
    cartPage.verifyProductInCart('GRAPHIC DESIGN MEN T SHIRT - BLUE');
    cartPage.clickCheckout();

    cy.get('[href="/login"]').eq(0).click({ force: true });
    cy.get('[data-qa="signup-name"]').type('Michael Jordan');


    const signUpPage = new SignUpPage();

    signUpPage.visit();
    signUpPage.enterName('Michael Jordan');

    const email = `michael.jordan+${Date.now()}@example.com`;
    signUpPage.enterEmail(email);

    signUpPage.clickSignupButton();


    const accountCreationPage = new AccountCreationPage();

    //Example usage:
    accountCreationPage.selectTitle();
    accountCreationPage.enterPassword('michaeljordan23');
    accountCreationPage.selectDOB('9', '10', '1969');
    accountCreationPage.checkNewsletter();
    accountCreationPage.fillAddressDetails({
      firstName: 'Michael',
      lastName: 'Jordan',
      address: 'Bronx 23/23',
      country: 'United States',
      state: 'New York',
      city: 'Bronx',
      zipcode: '10460',
      mobile: '1245242242'
    });
    accountCreationPage.clickCreateAccount();
    accountCreationPage.verifyAccountCreatedAndContinue();

    const userAccountPage = new UserAccountPage();

    userAccountPage.subscribeToNewsletter('michaeljordanbasketballplayer23@example.com');
    userAccountPage.deleteAccount();
    
  });
});