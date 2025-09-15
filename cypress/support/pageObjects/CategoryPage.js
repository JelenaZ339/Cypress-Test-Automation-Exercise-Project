// cypress/support/pageObjects/CategoryPage.js

class CategoryPage {
  clickMenCategory() {
    cy.get('[href="#Men"]').click();
  }

  clickCategoryProduct(categoryLink = '/category_products/3') {
    cy.get(`[href="${categoryLink}"]`).click();
  }

  hoverProductByIndex(index) {
    cy.get('.product-image-wrapper').eq(index).trigger('mouseover');
  }

  addProductToCartByIndex(index) {
    cy.get('.product-image-wrapper')
      .eq(index)
      .find('a.add-to-cart')
      .first()
      .click();
  }

  closeModal() {
    cy.get('button.btn.btn-success.close-modal.btn-block').click();
  }
}

export default CategoryPage;
