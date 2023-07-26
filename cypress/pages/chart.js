class ChartLocators {
  constructor() {
    this.productImage = ':nth-child(4) > .thumbnail > :nth-child(1) > img';
    this.quantityInput = '#product_quantity';
    this.addToChartBtn = '.cart';
    this.productName = 'tbody > :nth-child(2) > :nth-child(2) > a';
    this.productQuantity = '#cart_quantity53b1a0e11451071a263d5a530074cc3395';
    this.removeFromChartBtn = ':nth-child(7) > .btn';
    this.contentPanel = '.contentpanel';
  }
}

export default class ChartPage {
  constructor() {
    this.locators = new ChartLocators();
  }

  getProductImage(){
    return cy.get(this.locators.productImage);
  }

  getQuantityInput(){
    return cy.get(this.locators.quantityInput);
  }

  getAddToChartBtn(){
    return cy.get(this.locators.addToChartBtn);
  }

  getProductName(){
    return cy.get(this.locators.productName);
  }

  getProductQuantity(){
    return cy.get(this.locators.productQuantity);
  }

  getRemoveFromChartBtn(){
    return cy.get(this.locators.removeFromChartBtn);
  }

  getContentPanel(){
    return cy.get(this.locators.contentPanel);
  }
}