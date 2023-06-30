require('cypress-xpath');
describe('pppp', () =>{
  it('xxxx', () =>{
  cy.visit('http://localhost:4200/#/login');
  cy.get('.form-login').click();
  cy.get('.input-login:nth-child(3)').click();
  cy.get('.input-login:nth-child(3)').type('guillermo');
  cy.get('.input-login:nth-child(5)').type('a');
  cy.get('.mat-focus-indicator').click();
  cy.get('.form-login').submit();
  cy.get('.mat-tooltip-trigger > .mat-button-wrapper path:nth-child(1)').click();
  cy.get('.mat-card-content:nth-child(2) > .shipo-icon-logo-module').click();
  cy.get('.mat-toolbar-row > .mat-focus-indicator svg').click();
  /* cy.get('.ng-tns-c170-18:nth-child(2)').click();
  cy.get('#mat-input-2').click();
  cy.get('#mat-input-2').type('guiller');
  cy.get('.ng-tns-c76-123 > .mat-form-field-flex').click();
  cy.get('#mat-input-2').type('rio');
  cy.get('.cdk-focused svg').click(); */
  cy.get('.mat-menu-trigger .button-card path:nth-child(1)').click();
  cy.get('.cdk-overlay-backdrop').click();
  cy.get('.mat-tooltip-trigger > .mat-button-wrapper > .button-card path:nth-child(1)').click();
  cy.get('.fontA-icon-module').click();
  /*cy.get('.mat-menu-trigger svg').click();*/
   cy.wait(1000);
  // cy.xpath("/html/body/app-root/conf-page/div/mat-toolbar/mat-toolbar-row/shared-button-user-card/button").click(); 
  // cy.xpath("/html/body/div[2]/div[7]/div/mat-dialog-container/shared-user-card/mat-card/mat-card-content/mat-card-content[3]/button").click();
  // cy.xpath("/html/body/div[2]/div[7]/div/mat-dialog-container/dlg-shared-info/div[2]/button[2]").click();
  /* cy.wait(1000);
  cy.get('.cdk-focused > .mat-button-wrapper').click();
  cy.get('.cdk-focused > .mat-button-wrapper').click();
  cy.url().should('contains', 'http://localhost:4200/');
  cy.get('.input-login:nth-child(3)').type('guillermo');
  cy.get('.input-login:nth-child(5)').type('a'); */
  });
});
