// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import {loginPage} from '../e2e/utils/LoginPage.js';
import {utilsPage} from '../e2e/utils/UtilsPage.js';
require('cypress-xpath');

Cypress.Commands.add('login', (email, password) => {
  cy.visit(utilsPage.url);
  loginPage.submitLogin(email, password)
});

Cypress.Commands.add('abrirMenuSeccion', () => { 
  cy.xpath("//mat-toolbar/mat-toolbar-row/shared-module-navigator/button").click();
});

Cypress.Commands.add('seleccionarSuscripciones', () => { 
  cy.xpath("//mat-dialog-container/shared-module-card/mat-card/mat-card-content[1]/mat-card-content[1]/img").click();
});

Cypress.Commands.add('abrirMenuSuscripciones', () => { 
  cy.xpath("/html/body/app-root/susc-page/div/mat-toolbar/mat-toolbar-row/button").click();
});

Cypress.Commands.add('abrirGestionComercial', () => { 
  cy.xpath("/html/body/div[2]/div[2]/div/div/div/button[1]").click();
});
