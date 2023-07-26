import LoginPage from '../../pages/login';

describe('Logueo de página Automation Test Store', () => {
  beforeEach(() => {
    cy.visit('https://automationteststore.com')
  })

  it('Logueo Válido', () => {
    const login = new LoginPage();

    // Forzar visibilidad del menú 
    login.getTopMenuUl().invoke('show');

    // Poner mouse encima del elemento li
    login.getAccountLi().trigger('mouseover');

    // Click en el botón Account para redirigir a login
    login.getAccountBtn().click();
    
    // Escribo mi nombre y contraseña real
    login.getNameInput().type('tomicaceres07');
    login.getPasswordInput().type('45241883Tomi');
    
    // Click en el botón Login
    login.getLoginBtn().click();

    // El texto de bienvenida debería contener "Welcome back Tomás"
    login.getWelcomeText().contains('Welcome back Tomás');
  })

  it('Logueo Inválido', () => {
    const login = new LoginPage();

    // Forzar visibilidad del menú 
    login.getTopMenuUl().invoke('show');

    // Poner mouse encima del elemento li
    login.getAccountLi().trigger('mouseover');

    // Click en el botón Account para redirigir a login
    login.getAccountBtn().click();
    
    // Escribo mi nombre y contraseña real
    login.getNameInput().type('tomicaceres07');
    login.getPasswordInput().type('mipasswordfalsa');
    
    // Click en el botón Login
    login.getLoginBtn().click();

    // El texto de la alerta de error debería contener "Error: Incorrect login or password provided."
    login.getAlertText().contains('Error: Incorrect login or password provided.');
  })
})
