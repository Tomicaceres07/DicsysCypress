import LoginPage from '../pages/login';
import ChartPage from '../pages/chart';

// Función para loguearse
Cypress.Commands.add('login', (username, password) => {
  const login = new LoginPage();

  // Forzar visibilidad del menú
  login.getTopMenuUl().invoke('show');

  // Poner mouse encima del elemento li
  login.getAccountLi().trigger('mouseover');

  // Click en el botón Account para redirigir a login
  login.getAccountBtn().click();

  // Escribir el nombre de usuario y contraseña proporcionados
  login.getNameInput().type(username);
  login.getPasswordInput().type(password);

  // Click en el botón Login
  login.getLoginBtn().click();
});

// Función para agregar productos al carrito con una cantidad específica
Cypress.Commands.add('addToCartWithQuantity', (quantity = 1) => {
  const chart = new ChartPage();

  chart.getProductImage().click();
  chart.getQuantityInput().clear().type(quantity);
  chart.getAddToChartBtn().click();
});

// Función para eliminar productos del carrito
Cypress.Commands.add('removeFromCart', () => {
  const chart = new ChartPage();

  chart.getRemoveFromChartBtn().click();
});

// Función para verificar el contenido del carrito vacío
Cypress.Commands.add('checkEmptyCartMessage', () => {
  const chart = new ChartPage();

  chart.getContentPanel().contains(/Your shopping cart is empty!/).should('be.visible');
});