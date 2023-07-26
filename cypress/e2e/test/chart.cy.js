import ChartPage from '../../pages/chart';

describe('Añadir y eliminar productos al carrito de la página Automation Test Store', () => {
  beforeEach(() => {
    cy.visit('https://automationteststore.com')
  })
  
  it('Añadir al carrito 1 producto con cantidad 3', () => {
    cy.addToCartWithQuantity('3');
    const chart = new ChartPage();

    chart.getProductName().contains('Tropiques Minerale Loose Bronzer');
    chart.getProductQuantity().should('have.value', '3');
  })

  it('Añadir al carrito 1 producto con cantidad 5 y borrarlo del carrito', () => {
    cy.addToCartWithQuantity('5');
    const chart = new ChartPage();

    chart.getProductName().contains('Tropiques Minerale Loose Bronzer');
    chart.getProductQuantity().should('have.value', '5');

    cy.removeFromCart();
    cy.checkEmptyCartMessage();
  })
})