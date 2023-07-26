import LoginPage from '../../pages/login';

describe('Logueo de página Automation Test Store', () => {
  beforeEach(() => {
    cy.visit('https://automationteststore.com')
  })

  it('Logueo Válido', () => {
    cy.login('tomicaceres07', '45241883Tomi');
    // El texto de bienvenida debería contener "Welcome back Tomás"
    new LoginPage().getWelcomeText().contains('Welcome back Tomás');
  })

  it('Logueo Inválido', () => {
    cy.login('tomicaceres07', 'mipasswordfalsa');
    // El texto de la alerta de error debería contener "Error: Incorrect login or password provided."
    new LoginPage().getAlertText().contains('Error: Incorrect login or password provided.');
  })
})
