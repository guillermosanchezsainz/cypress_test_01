require('cypress-xpath');
import "cypress-real-events/support";
import {loginPage} from './utils/LoginPage.js';
import {utilsPage} from './utils/UtilsPage.js';
describe('Test login', function(){
  beforeEach(()=>{
    cy.login("guillermo", "a");
  });
  it('Test Pedidos', () => {
    cy.abrirMenuSeccion();    
    cy.seleccionarSuscripciones();    
    cy.abrirMenuSuscripciones();
    cy.abrirGestionComercial();
    cy.log( 'No tengo permisos para entrar a Pedidos')
    cy.xpath("/html/body/div[2]/div[3]/div/div/div/button[3]").click();
  });  
});

