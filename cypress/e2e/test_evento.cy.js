require('cypress-xpath');
import "cypress-real-events/support";
import {loginPage} from './utils/LoginPage.js';
import {utilsPage} from './utils/UtilsPage.js';

function TestLogin()
{
  loginPage.submitLogin('guillermo', 'a');
}

function TestErrorLogin()
{
  cy.get("input[name='nameUser']").type("guillermo");
  cy.get("input[name='namePwd']").type("guillermo");
  cy.get("button.btn-submit").click();
}

function AbrirMenuSeccion()
{
  cy.xpath("//mat-toolbar/mat-toolbar-row/shared-module-navigator/button").click();  

}

function SeleccionarSuscripciones()
{
  cy.xpath("//mat-dialog-container/shared-module-card/mat-card/mat-card-content[1]/mat-card-content[1]/img").click();
}

function AbrirMenuSuscripciones()
{
  cy.xpath("/html/body/app-root/susc-page/div/mat-toolbar/mat-toolbar-row/button").click();
}

function AbrirGestionComercial()
{
  cy.xpath("/html/body/div[2]/div[2]/div/div/div/button[1]").click();
}

function AbrirCrmSuscripcion()
{
  cy.xpath("/html/body/div[2]/div[3]/div/div/div/button[1]").click();
}

function AbrirEventosSubscripcion()
{
  cy.xpath("/html/body/div[2]/div[3]/div/div/div/button[8]").click();
}

function AbrirSubEventosSubscripcion()
{
  cy.xpath("/html/body/div[2]/div[4]/div/div/div/button[1]").click();
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
}

function SeleccionarConfiguracionDesdeSuscripciones()
{
  cy.get("img.fontA-icon-module").should('be.visible').click();
}

function AbrirMenuUsuarioDesdeConfiguracion()
{
  cy.xpath("/html/body/app-root/conf-page/div/mat-toolbar/mat-toolbar-row/shared-button-user-card/button").click();
}

function FinalizarDesdeConfiguracion()
{
  cy.wait(400);
  cy.xpath("//mat-dialog-container/shared-user-card/mat-card/mat-card-content/mat-card-content[3]/button").click();
}

function ConfirmarFinalizar()
{
  cy.xpath("//mat-dialog-container/dlg-shared-info/div[2]/button[2]").click();
}

function HoverEditRow()
{ 
  cy.wait(400);
  cy.xpath("/html/body/app-root/susc-page/div/mat-sidenav-container/mat-sidenav-content/div/gestion-eventos/div/div[2]/shared-data-table/div/div[2]/div[2]/cdk-virtual-scroll-viewport/div[1]/div[5]/div[9]").realHover('mouse');
}

function EditRow()
{
  cy.wait(300);
  cy.xpath("/html/body/app-root/susc-page/div/mat-sidenav-container/mat-sidenav-content/div/gestion-eventos/div/div[2]/shared-data-table/div/div[2]/div[2]/cdk-virtual-scroll-viewport/div[1]/div[5]/div[9]/button[1]").click();
}

function focusTextName()
{
  // cy.xpath("/html/body/app-root/div[2]/dlg-gestion-eventos/div/div[2]/div[2]/div[2]/evt-datos-generales/div/mat-card/div/shared-input[1]/mat-form-field/div/div[1]/div/input").focus();
}

function editTextName()
{  
  // EVEYELMO
  cy.wait(300);
  cy.xpath("/html/body/app-root/div[2]/dlg-gestion-eventos/div/div[2]/div[2]/div[2]/evt-datos-generales/div/mat-card/div/shared-input[1]").clear();
  cy.wait(300);
  cy.xpath("/html/body/app-root/div[2]/dlg-gestion-eventos/div/div[2]/div[2]/div[2]/evt-datos-generales/div/mat-card/div/shared-input[1]").type("EVEYELMO GUILLERMO TEST");
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
  cy.request('POST','http://localhost/ShipoWSVC/ShipoWS.asmx/GetConfigGen', params )
  .then( response => {
    let rows = response.body.GetConfigGen.XML.row;
    let rows72 = {
      codArticulo: 0,
    };

    rows72 = rows.find ( f => f.cstclavep == 'CODIGO CYPRESS');
    cy.log( "Se comprueban los datos introducidos" );
    for (const property in rows72) {
      let textProp = property + ": " + rows72[property];
      cy.log(textProp);
    };
    
    cy.wait(1000);
    cy.contains('DESCRIPCION CYPRESS').dblclick();
    cy.wait(300);
    cy.xpath("/html/body/app-root/div[2]/dlg-gestion-eventos/div/div[2]/div[2]/div[2]/evt-datos-generales/div/mat-card/div/shared-input[1]").type(" BORRABLE");
    cy.wait(300);    
    cy.xpath("/html/body/app-root/div[2]/dlg-gestion-eventos/div/div[1]/div[2]/button[2]").click();
  });
}

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
  it('Test Evento Nuevo, comprobar, modificar, borrar', () =>{
    cy.viewport(1200, 750);
    cy.log(utilsPage.url);
    cy.visit(utilsPage.url);
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
    AbrirMenuSeccion();
    SeleccionarConfiguracionDesdeSuscripciones();
    AbrirMenuUsuarioDesdeConfiguracion();
    FinalizarDesdeConfiguracion();
    ConfirmarFinalizar();
  });
});