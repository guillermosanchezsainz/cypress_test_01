require('cypress-xpath');
import "cypress-real-events/support";
import {loginPage} from './utils/LoginPage.js';
import {utilsPage} from './utils/UtilsPage.js';

function AbrirEventosSubscripcion()
{
  cy.xpath("/html/body/div[2]/div[3]/div/div/div/button[8]").click();
}

function AbrirSubEventosSubscripcion()
{
  cy.xpath("/html/body/div[2]/div[4]/div/div/div/button[1]").click();
}


function SeleccionarConfiguracionDesdeSuscripciones()
{
  cy.get("img.fontA-icon-module").should('be.visible').click();
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
    cy.login("guillermo", "a");
    cy.abrirMenuSeccion();
    cy.seleccionarSuscripciones();    
    cy.abrirMenuSeccion();
    cy.abrirGestionComercial();

    AbrirEventosSubscripcion();
    AbrirSubEventosSubscripcion();
    clickNuevoEvento();
    editNuevoEvento();
    comprobarModificacion();
    borrarEvento();
    cy.abrirMenuSeccion();
    SeleccionarConfiguracionDesdeSuscripciones();
    cy.logOut();
  });
});