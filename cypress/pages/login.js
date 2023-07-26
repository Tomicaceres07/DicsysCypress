class LoginLocators {
  constructor() {
    this.topMenuUl = 'ul#main_menu_top.nav.navbar-nav.main_menu';
    this.accountLi = 'ul#main_menu_top.nav.navbar-nav.main_menu li[data-id="menu_account"]';
    this.accountBtn = 'ul#main_menu_top a[href="https://automationteststore.com/index.php?rt=account/account"]';
    this.nameInput = '[id="loginFrm_loginname"]';
    this.passwordInput = '[id="loginFrm_password"]';
    this.loginBtn = '#loginFrm > fieldset > .btn';
    this.welcomeText = '#customer_menu_top > :nth-child(1) > .top > .menu_text';
    this.alertText = '[class="alert alert-error alert-danger"]';
  }
}

export default class LoginPage {
  constructor() {
    this.locators = new LoginLocators();
  }

  getTopMenuUl(){
    return cy.get(this.locators.topMenuUl);
  }

  getAccountLi(){
    return cy.get(this.locators.accountLi);
  }
  
  getAccountBtn(){
    return cy.get(this.locators.accountBtn);
  }
  
  getNameInput(){
    return cy.get(this.locators.nameInput);
  }
  
  getPasswordInput(){
    return cy.get(this.locators.passwordInput);
  }

  getLoginBtn(){
    return cy.get(this.locators.loginBtn);
  }

  getWelcomeText(){
    return cy.get(this.locators.welcomeText);
  }

  getAlertText(){
    return cy.get(this.locators.alertText);
  }
}