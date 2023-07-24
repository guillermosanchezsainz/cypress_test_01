require('cypress-xpath');
import "cypress-real-events/support";
import {loginPage} from './utils/LoginPage.js'

function TestLogin()
{
  
  /* cy.get("input[name='nameUser']").clear();
  cy.get("input[name='namePwd']").clear();
  // cy.wait(1300);
  cy.get("input[name='nameUser']").type("guillermo");
  cy.get("input[name='namePwd']").type("a");
  cy.get("button.btn-submit").click(); */

  // loginPage.submitLogin('guillermo', 'a');
 
/*   cy.get('[shipoid="_nameUser"]').clear();
  cy.get('[shipoid="_namePwd"]').clear();
  // cy.wait(1300);
  cy.get('[shipoid="_nameUser"]').type("guillermo");
  cy.get('[shipoid="_namePwd"]').type("a")
  cy.get('[shipoid="_btnLogin"]').click();
 */
  

  // cy.wait(4300);
  loginPage.submitLogin('guillermo', 'a');

  /* cy.intercept('*Connect*').as('getSettings')    
  loginPage.submitLogin('guillermo', 'a');
  cy.wait('@getSettings').then( (interception) => {
    cy.log(interception.response.body.Connect.SessionKey);
    for (const property in interception.response) {
      cy.log(property);
    }
    // interception.forEach( f => {
    //    cy.log(f);
    //  }
    // );
    // SessionKey = response.body.Connect.SessionKey;
  }); */

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
  cy.xpath("//mat-toolbar/mat-toolbar-row/shared-module-navigator/button").click();
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
  // cy.xpath("/html/body/div[2]/div[2]/div/div/div/button[1]/div[1]").click();

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

function AbrirEventosSubscripcion()
{
  cy.xpath("/html/body/div[2]/div[3]/div/div/div/button[8]").click();
  //cy.wait(2100);
}

function AbrirSubEventosSubscripcion()
{
  cy.xpath("/html/body/div[2]/div[4]/div/div/div/button[1]").click();
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


function HoverEditRow()
{ 
  cy.wait(400);
  cy.xpath("/html/body/app-root/susc-page/div/mat-sidenav-container/mat-sidenav-content/div/gestion-eventos/div/div[2]/shared-data-table/div/div[2]/div[2]/cdk-virtual-scroll-viewport/div[1]/div[5]/div[9]").realHover('mouse');
  // cy.xpath("/html/body/app-root/susc-page/div/mat-sidenav-container/mat-sidenav-content/div/gestion-eventos/div/div[2]/shared-data-table/div/div[2]/div[2]/cdk-virtual-scroll-viewport/div[1]/div[3]/div[9]").trigger('mouseover')
  // cy.xpath("/html/body/app-root/susc-page/div/mat-sidenav-container/mat-sidenav-content/div/gestion-eventos/div/div[2]/shared-data-table/div/div[2]/div[2]/cdk-virtual-scroll-viewport/div[1]/div[5]").trigger('mouseenter');
  // cy.xpath("/html/body/app-root/susc-page/div/mat-sidenav-container/mat-sidenav-content/div/gestion-eventos/div/div[2]/shared-data-table/div/div[2]/div[2]/cdk-virtual-scroll-viewport/div[1]/div[5]").click();
  // cy.xpath("/html/body/app-root/susc-page/div/mat-sidenav-container/mat-sidenav-content/div/gestion-eventos/div/div[2]/shared-data-table/div/div[2]/div[2]/cdk-virtual-scroll-viewport/div[1]/div[5]").trigger('contextmenu');

}

function EditRow()
{
  cy.wait(300);
  // cy.xpath("/html/body/app-root/susc-page/div/mat-sidenav-container/mat-sidenav-content/div/gestion-eventos/div/div[2]/shared-data-table/div/div[2]/div[2]/cdk-virtual-scroll-viewport/div[1]/div[5]/div[9]/button[1]/span[1]/mat-icon/svg/path[1]").click();
  cy.xpath("/html/body/app-root/susc-page/div/mat-sidenav-container/mat-sidenav-content/div/gestion-eventos/div/div[2]/shared-data-table/div/div[2]/div[2]/cdk-virtual-scroll-viewport/div[1]/div[5]/div[9]/button[1]").click();
}

function focusTextName()
{
  // cy.xpath("/html/body/app-root/div[2]/dlg-gestion-eventos/div/div[2]/div[2]/div[2]/evt-datos-generales/div/mat-card/div/shared-input[1]/mat-form-field/div/div[1]/input[0]").focus();
  // cy.get('input[id="mat-input-58"]').focus();
  // cy.get('#mat-input-14').focus();
  // cy.xpath("/html/body/app-root/div[2]/dlg-gestion-eventos/div/div[2]/div[2]/div[2]/evt-datos-generales/div/mat-card/div/shared-input[1]/mat-form-field/div/div[1]/div/input").focus();


}

function editTextName()
{
  
  // EVEYELMO
  cy.wait(300);
  cy.xpath("/html/body/app-root/div[2]/dlg-gestion-eventos/div/div[2]/div[2]/div[2]/evt-datos-generales/div/mat-card/div/shared-input[1]").clear();
  // cy.get('shared-input[ng-reflect-name="Código"]').clear();  
  cy.wait(300);
  cy.xpath("/html/body/app-root/div[2]/dlg-gestion-eventos/div/div[2]/div[2]/div[2]/evt-datos-generales/div/mat-card/div/shared-input[1]").type("EVEYELMO GUILLERMO TEST");
  // cy.get('shared-input[ng-reflect-name="Código"]').type("EVEYELMO GUILLERMO TEST");
  cy.wait(300);
}

function saveFocusFlapa()
{
  cy.xpath("/html/body/app-root/div[2]/dlg-gestion-eventos/div/div[1]/div[2]/button[2]").click();
}

function comprobarModificacion()
{
  cy.wait(2000);
  let params = '{"GetConfigGen":{"@SessionKey":"' + loginPage.sessionKey + '","@RequestID":"1","@type":"getEventos","@cia":"PC","@process":"","parms":{"xml":{"@cia":"PC"}}}}';
  cy.log(params);
  // it( "pidiendo datos de los eventos a la BBDD"), () => {
  cy.request('POST','http://localhost/ShipoWSVC/ShipoWS.asmx/GetConfigGen', params )
  .then( response => {
    // cy.log(response.body.GetConfigGen.errorDetail);
    // cy.log(response.body.GetConfigGen.XML);
    let rows = response.body.GetConfigGen.XML.row;
    // let rows72 = rows.find ( f => f.codArticulo == '72');
    let rows72 = {
      codArticulo: 0,
    };
    rows.forEach ( f =>{
      let textProp2 = "codArticulo" + ": " + f["codArticulo"];
        cy.log(textProp2);
      if ( parseFloat(f.codArticulo) > parseFloat(rows72.codArticulo))
        rows72 = f;
    });
    
    for (const property in rows72) {
      let textProp = property + ": " + rows72[property];
      cy.log(textProp);
    };
    // expect( rows72.cstclavep ).to.eq( 'EVEYELMO GUILLERMO TEST' );
    cy.wait(1000);
    cy.contains('DESCRIPCION CYPRESS').dblclick();
    cy.wait(1000);
    /* cy.xpath("/html/body/app-root/div[2]/dlg-gestion-eventos/div/div[2]/div[2]/div[2]/evt-datos-generales/div/mat-card/div/shared-input[1]").clear();
    cy.xpath("/html/body/app-root/div[2]/dlg-gestion-eventos/div/div[2]/div[2]/div[2]/evt-datos-generales/div/mat-card/div/shared-input[1]").type("CODIGO CYPRESS BORRABLE"); */
    /* cy.wait(300);
    cy.xpath("/html/body/app-root/div[2]/dlg-gestion-eventos/div/div[2]/div[2]/div[2]/evt-datos-generales/div/mat-card/div/shared-input[1]").clear(); */
    // cy.get('shared-input[ng-reflect-name="Código"]').clear();  
    cy.wait(300);
    cy.xpath("/html/body/app-root/div[2]/dlg-gestion-eventos/div/div[2]/div[2]/div[2]/evt-datos-generales/div/mat-card/div/shared-input[1]").type(" BORRABLE");
    // cy.get('shared-input[ng-reflect-name="Código"]').type("EVEYELMO GUILLERMO TEST");
    cy.wait(300);    
    cy.xpath("/html/body/app-root/div[2]/dlg-gestion-eventos/div/div[1]/div[2]/button[2]").click();
    /* cy.contains("CODIGO CYPRESS BORRABLE").realHover('mouse');
    cy.contains("CODIGO CYPRESS BORRABLE").parent().parent().find('input[button-icon="delete"]').click();
    console.log(cy.contains("CODIGO CYPRESS BORRABLE")); */
    // cy.debug();
  });
}


/* function focusTextName()
{
  // cy.xpath("/html/body/app-root/div[2]/dlg-gestion-eventos/div/div[2]/div[2]/div[2]/evt-datos-generales/div/mat-card/div/shared-input[1]").type("EVEYELMO GUILLERMO TEST");
} */

function clickNuevoEvento()
{
  cy.xpath("/html/body/app-root/susc-page/div/mat-sidenav-container/mat-sidenav-content/div/gestion-eventos/div/div[1]/div[2]/button").click();
}

function editNuevoEvento()
{
  cy.wait(1000);
  cy.xpath("/html/body/app-root/div[2]/dlg-gestion-eventos/div/div[2]/div[2]/div[2]/evt-datos-generales/div/mat-card/div/shared-input[1]").type("CODIGO CYPRESS");
  cy.xpath("/html/body/app-root/div[2]/dlg-gestion-eventos/div/div[2]/div[2]/div[2]/evt-datos-generales/div/mat-card/div/shared-input[2]").type("DESCRIPCION CYPRESS");
  cy.xpath("/html/body/app-root/div[2]/dlg-gestion-eventos/div/div[2]/div[2]/div[2]/evt-datos-generales/div/mat-card/div/shared-autocomplete[2]").type("Cultural");
  cy.xpath("/html/body/app-root/div[2]/dlg-gestion-eventos/div/div[2]/div[2]/div[4]/evt-tiempo-lugar/div/mat-card/div/div[1]/range-datepicker/div/mat-form-field/div/div[1]").type("13/07/2023 - 31/08/2023");
  cy.xpath("/html/body/app-root/div[2]/dlg-gestion-eventos/div/div[2]/div[2]/div[4]/evt-tiempo-lugar/div/mat-card/div/div[2]/shared-input[1]").type("10:00");
  cy.xpath("/html/body/app-root/div[2]/dlg-gestion-eventos/div/div[2]/div[2]/div[4]/evt-tiempo-lugar/div/mat-card/div/div[2]/shared-input[2]").type("21:00");  
  cy.xpath("/html/body/app-root/div[2]/dlg-gestion-eventos/div/div[2]/div[2]/div[8]/evt-gestion-participantes/div/mat-card/div/div[2]/div/shared-input").type("31");
  cy.xpath("/html/body/app-root/div[2]/dlg-gestion-eventos/div/div[2]/div[2]/div[8]/evt-gestion-participantes/div/mat-card/div/div[4]/div/shared-input").type("20");
  cy.xpath("/html/body/app-root/div[2]/dlg-gestion-eventos/div/div[2]/div[2]/div[8]/evt-gestion-participantes/div/mat-card/div/div[5]/div[2]/div/shared-input").type("30");
  cy.xpath("/html/body/app-root/div[2]/dlg-gestion-eventos/div/div[2]/div[2]/div[8]/evt-gestion-participantes/div/mat-card/div/div[7]/div/shared-input").type("40");
  cy.xpath("/html/body/app-root/div[2]/dlg-gestion-eventos/div/div[2]/div[2]/div[10]/evt-datos-economicos/div/mat-card/div/div/shared-input[1]").type("40");
  cy.xpath("/html/body/app-root/div[2]/dlg-gestion-eventos/div/div[2]/div[2]/div[10]/evt-datos-economicos/div/mat-card/div/div/shared-input[2]").type("20");
  cy.xpath("/html/body/app-root/div[2]/dlg-gestion-eventos/div/div[2]/div[2]/div[10]/evt-datos-economicos/div/mat-card/div/div/shared-input[3]").type("40");
  cy.xpath("/html/body/app-root/div[2]/dlg-gestion-eventos/div/div[2]/div[2]/div[10]/evt-datos-economicos/div/mat-card/div/div/shared-input[4]").type("60");
  cy.xpath("/html/body/app-root/div[2]/dlg-gestion-eventos/div/div[2]/div[2]/div[10]/evt-datos-economicos/div/mat-card/div/div/shared-input[5]").type("50");
  cy.xpath("/html/body/app-root/div[2]/dlg-gestion-eventos/div/div[2]/div[2]/div[10]/evt-datos-economicos/div/mat-card/div/div/shared-autocomplete").type("IVA 21%");
  /* cy.xpath("/html/body/app-root/div[2]/dlg-gestion-eventos/div/div[1]/div[2]/button[2]").click();
  cy.wait(1000); */
  cy.xpath("/html/body/app-root/div[2]/dlg-gestion-eventos/div/div[2]/div[2]/div[4]/evt-tiempo-lugar/div/mat-card/div/shared-input[1]").clear();
  cy.xpath("/html/body/app-root/div[2]/dlg-gestion-eventos/div/div[2]/div[2]/div[4]/evt-tiempo-lugar/div/mat-card/div/shared-input[1]").type("Calle Julian Camarillo 29");
  cy.xpath("/html/body/app-root/div[2]/dlg-gestion-eventos/div/div[1]/div[2]/button[2]").click();  
}

function borrarEvento()
{
  cy.contains("CODIGO CYPRESS BORRABLE").realHover('mouse');
  cy.wait(300);
  cy.contains("CODIGO CYPRESS BORRABLE").parent().parent().find('button[button-icon="delete"]').click();
  cy.wait(300);
  cy.xpath("/html/body/div[2]/div[2]/div/mat-dialog-container/dlg-shared-info/div[2]/button[2]").click();
}

describe('Test Eventos 01', () =>{
  it('xxxx', () =>{
    // cy.log('popopo');
    cy.viewport(1200, 750)
    cy.visit('http://mdesashipo.protecmedia.com/shipov25desa/');
    // cy.visit('http://localhost:4200');
    //cy.wait(1300);
    
    // TestErrorLogin();    
    TestLogin();
    
    AbrirMenuSeccion();
    SeleccionarSuscripciones();
    AbrirMenuSuscripciones();
    AbrirGestionComercial();
    AbrirEventosSubscripcion();
    AbrirSubEventosSubscripcion();
    clickNuevoEvento();
    editNuevoEvento();    
    comprobarModificacion();
    borrarEvento();

    // console.log(cy.contains("CODIGO CYPRESS BORRABLE"));

    /* HoverEditRow();
    EditRow();
    focusTextName();
    editTextName();
    saveFocusFlapa();
    comprobarModificacion();*/

    /* AbrirCrmSuscripcion();
    EscribirBuscadosCrmSuscripciones("rio{enter}");
    AbrirMenuSeccionDesdeSuscripciones();
    SeleccionarConfiguracionDesdeSuscripciones();   
    AbrirMenuUsuarioDesdeConfiguracion(); 
    FinalizarDesdeConfiguracion();
    ConfirmarFinalizar();     */
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
