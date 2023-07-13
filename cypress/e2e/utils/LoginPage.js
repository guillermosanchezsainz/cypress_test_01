class LoginPage {
  /* constructor()
  {
    cy.log('iniciar Login');
  }   */
  elements = {
    usernameInput: () => cy.get("input[name='nameUser"),
    passwordInput: () => cy.get("input[name='namePwd"),
    loginBtn: () => cy.get("button.btn-submit"),
    errorMessage: () => cy.get('h3[data-test="error"]'),
    sessionKey: '',
  };

  typeUsername(username) {
    this.elements.usernameInput().type(username);
  }

  typePassword(password) {
    this.elements.passwordInput().type(password);
  }

  clickLogin() {
    cy.intercept('*Connect*').as('getSettings')    
    this.elements.loginBtn().click();
    cy.wait('@getSettings').then( (interception) => {
    cy.log(interception.response.body.Connect.SessionKey);
    this.elements.sessionKey = interception.response.body.Connect.SessionKey;
    cy.log(this.elements.sessionKey);
      for (const property in interception.response) {
        // cy.log(property);
      }
    });
  }

  submitLogin(username,password){
    this.elements.usernameInput().type(username);
    this.elements.passwordInput().type(password);
    cy.intercept('*Connect*').as('getSettings');
    this.elements.loginBtn().click();
    cy.wait('@getSettings').then( (interception) => {
      // cy.log(interception.response.body.Connect.SessionKey);
      this.elements.sessionKey = interception.response.body.Connect.SessionKey;
      cy.log("++++++++++++++++++++++++++++++++");
      cy.log(this.elements.sessionKey);
      // for (const property in interception.response) {
        // cy.log(property);
      // }
    });
  }
  
  get sessionKey()
  {
    cy.log("------------------------------");
    cy.log(this.elements.sessionKey);
    return this.elements.sessionKey;
  }
}

export const loginPage = new LoginPage();