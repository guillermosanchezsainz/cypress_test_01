require('cypress-xpath');

function TestLogin()
{
  
  cy.get("input[name='nameUser']").clear();
  cy.get("input[name='namePwd']").clear();
  cy.wait(1300);
  cy.get("input[name='nameUser']").type("guillermo");
  cy.get("input[name='namePwd']").type("a");
  cy.get("button.btn-submit").click();
 
/*   cy.get('[shipoid="_nameUser"]').clear();
  cy.get('[shipoid="_namePwd"]').clear();
  // cy.wait(1300);
  cy.get('[shipoid="_nameUser"]').type("guillermo");
  cy.get('[shipoid="_namePwd"]').type("a")
  cy.get('[shipoid="_btnLogin"]').click();
 */
  

  // cy.wait(4300);
}

function TestErrorLogin()
{
  cy.get("input[name='nameUser']").type("guillermo");
  cy.get("input[name='namePwd']").type("guillermo");
  cy.get("button.btn-submit").click();
  //cy.wait(1300);
}

function AbrirMenuSeccion()
{
  cy.xpath("/html/body/app-root/conf-page/div/mat-toolbar/mat-toolbar-row/shared-module-navigator/button").click();
  //cy.wait(100);
}

function SeleccionarSuscripciones()
{
  cy.xpath("/html/body/div[2]/div[2]/div/mat-dialog-container/shared-module-card/mat-card/mat-card-content[1]/mat-card-content[1]/img").click();
  //cy.wait(100);
}

function AbrirMenuSuscripciones()
{
  cy.xpath("/html/body/app-root/susc-page/div/mat-toolbar/mat-toolbar-row/button").click();
  //cy.wait(100);
}

function AbrirGestionComercial()
{
  cy.xpath("/html/body/div[2]/div[2]/div/div/div/button[1]").click();
  //cy.wait(100);
}

function AbrirCrmSuscripcion()
{
  cy.xpath("/html/body/div[2]/div[3]/div/div/div/button[1]").click();
  //cy.wait(2100);
}

function EscribirBuscadosCrmSuscripciones(str)
{
  cy.get("#mat-input-2").clear();
  cy.get("#mat-input-2").type(str);
  cy.wait(2100);
}

function AbrirMenuSeccionDesdeSuscripciones()
{
  cy.xpath("/html/body/app-root/susc-page/div/mat-toolbar/mat-toolbar-row/shared-module-navigator/button").click();
  //cy.wait(100);
}

function SeleccionarConfiguracionDesdeSuscripciones()
{
  cy.get("img.fontA-icon-module").should('be.visible').click();
  //cy.wait(300);
}

function AbrirMenuUsuarioDesdeConfiguracion()
{
  cy.xpath("/html/body/app-root/conf-page/div/mat-toolbar/mat-toolbar-row/shared-button-user-card/button").click();
  //cy.wait(100);
}

function FinalizarDesdeConfiguracion()
{
  cy.xpath("/html/body/div[2]/div[7]/div/mat-dialog-container/shared-user-card/mat-card/mat-card-content/mat-card-content[3]/button").click();
  //cy.wait(100);
}

function ConfirmarFinalizar()
{
  cy.xpath("/html/body/div[2]/div[7]/div/mat-dialog-container/dlg-shared-info/div[2]/button[2]").click();
  //cy.wait(1100);
}

describe('hola mundo 1', () =>{
  it('xxxx', () =>{
    cy.log('popopo');
    cy.visit('http://mdesashipo.protecmedia.com/shipov25desa/');
    // cy.visit('http://localhost:4200');
    //cy.wait(1300);
    
    TestErrorLogin();    
    TestLogin();
    AbrirMenuSeccion();
    SeleccionarSuscripciones();
    AbrirMenuSuscripciones();
    AbrirGestionComercial();
    AbrirCrmSuscripcion();
    EscribirBuscadosCrmSuscripciones("rio{enter}");
    AbrirMenuSeccionDesdeSuscripciones();
    SeleccionarConfiguracionDesdeSuscripciones();   
    AbrirMenuUsuarioDesdeConfiguracion(); 
    FinalizarDesdeConfiguracion();
    ConfirmarFinalizar();    
  });
});

  /* cy.quit();

  cy.xpath("/html/body/div[2]/div[2]/div/mat-dialog-container/shared-module-card/mat-card/mat-card-content[1]/mat-card-content[3]/img").should('be.visible').click();
  cy.get("#mat-input-2").should('be.visible').type('Cypress.io{enter}')
  cy.xpath("/html/body/app-root/susc-page/div/mat-sidenav-container/mat-sidenav-content/div/panel-control/div/div[1]/shared-buscador-clientes/div/div[1]/div[2]/mat-form-field/div/div[1]/div[3]/button[1]").click();
  driver.findElement(By.cssSelector("input[name='nameUser']")).sendKeys("algo");
  driver.findElement(By.cssSelector("input[name='namePwd']")).sendKeys("perico");
  const { describe, it, cy } = require("node:test");

  describe("primer test con cypress", () =>{
    it("Prueba", () =>{
      cy.log("Guille");
    });
  });

  describe('template spec', () => {
    it('passes', () => {
      cy.visit('https://example.cypress.io')
    })
  }); */
