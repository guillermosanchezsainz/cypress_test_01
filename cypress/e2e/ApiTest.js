import {loginPage} from './utils/LoginPage.js'
require('cypress-xpath');
import "cypress-real-events/support";

function TestLogin()
{
  
  /* cy.get("input[name='nameUser']").clear();
  cy.get("input[name='namePwd']").clear();
  // cy.wait(1300);
  cy.get("input[name='nameUser']").type("guillermo");
  cy.get("input[name='namePwd']").type("a");
  cy.get("button.btn-submit").click(); */

  loginPage.submitLogin('guillermo', 'a');
}

function AbrirMenuSeccion()
{

  try{
    cy.xpath("/html/body/app-root/conf-page/div/mat-toolbar/mat-toolbar-row/shared-module-navigator/button1").should('be.visible');
  }
  catch ( e )
  {}
  
  cy.xpath("/html/body/app-root/conf-page/div/mat-toolbar/mat-toolbar-row/shared-module-navigator/button").click();
  //cy.wait(100);
}

/* describe ( 'Pruebas API', ()=>{
  let  paramsConnect = '{"Connect":{"@UidApp":"B35D2DC66395395BED","@PwdApp":"B0","@Product":"2","@LanguageId":"8","@RequestID":"1"}}';
  it( "Haciendo connect a la BBDD" , () => {
    cy.log('response');
    cy.request('POST','http://mdesashipo.protecmedia.com/shipows_desa/ShipoWS.asmx/Connect', paramsConnect )
    .then( response => {
      cy.log(response);
      // expect(response.status).to.eq(200);
    });
  });

  it( "Haciendo connect a la BBDD", ()=> {
    cy.request({url: 'https://jsonplaceholder.typicode.com/posts'} )    
    .then( (respuesta)=>{
      expect(respuesta.status).to.eq(200)
    })
  });
}); */
  //it( "Haciendo Test 2 "), ()=> {
   // cy.log('response');
    /* cy.visit('https://jsonplaceholder.typicode.com');
    cy.request('/posts')
    .then( respuesta => {
      // cy.log(response);
      expect(respuesta.status).to.eq(200);
    }); */
  //};

  /* it( "pidiendo datos de los eventos a la BBDD"), () => {
    cy.request('POST','http://localhost/ShipoWSVC/ShipoWS.asmx/GetConfigGen', params )
    .then( response => {
      // cy.log(response);
      expect(response.status).to.eq(200);
    });
  }; 
  it( "pidiendo datos de los eventos a la BBDD 2"), () => {
    cy.request('POST','http://localhost/ShipoWSVC/ShipoWS.asmx/GetConfigGen', params )
    .its ('body')
    .should('have.length')
  };  */
/* }); */

/* describe('Hacemos connect', () =>{
  let SessionKey = "";
  it('xxxx', () =>{
    let  paramsConnect = '{"Connect":{"@UidApp":"B35D2DC66395395BED","@PwdApp":"B0","@Product":"2","@LanguageId":"8","@RequestID":"1"}}';
    cy.log('response');
    // cy.visit('http://mdesashipo.protecmedia.com/shipows_desa/ShipoWS.asmx/Connect' );
    cy.request("POST", "http://mdesashipo.protecmedia.com/shipows_desa/ShipoWS.asmx/Connect", paramsConnect)
    .then( response => {
      SessionKey = response.body.Connect.SessionKey;
      cy.log(SessionKey);
      expect(response.status).to.eq(200);
      cy.log(SessionKey);

      let params = '{"GetConfigGen":{"@SessionKey":"' + SessionKey + '","@RequestID":"1","@type":"getEventos","@cia":"PC","@process":"","parms":{"xml":{"@cia":"PC"}}}}';
      // it( "pidiendo datos de los eventos a la BBDD" , () => {
        cy.request('POST','http://localhost/ShipoWSVC/ShipoWS.asmx/GetConfigGen', params )
        .then( response => {
          let ArticuloTest = response.body.GetConfigGen.XML.row.find(p=>p.codArticulo == '72');
          cy.log(ArticuloTest.descripcion);
          cy.log(ArticuloTest.cstclavep);
          expect(response.status).to.eq(200);
        });
      // }; 
    });
  });
}); */

/* describe( "prueba de fuego", () =>{
  it ( 'textConnection', () =>
  {
    cy.log('1');
    cy.visit('http://mdesashipo.protecmedia.com/shipov25desa/');
    cy.intercept('*Connect*').as('getSettings')    
    TestLogin();
    cy.wait('@getSettings').then( (interception) => {
      cy.log(interception.response.body.Connect.SessionKey);
      for (const property in interception.response) {
        cy.log(property);
      }
    });
  });
}); */

describe ('Suscripcion / Evento', function(){
  beforeEach(()=>{
    cy.visit('http://mdesashipo.protecmedia.com/shipov25desa/');    
    loginPage.submitLogin('guillermo', 'a');
  });

  it ( "test 01", ()=> {
    cy.log("loginPage.sessionKey: " + loginPage.sessionKey);
  });

  it ( "test 02", ()=> {
    AbrirMenuSeccion();    
  });

  it ( "test 03", ()=> {
    AbrirMenuSeccion();    
  });

  it ( "test 04", ()=> {
    AbrirMenuSeccion();    
  });

})
