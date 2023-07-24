import {loginPage} from './utils/LoginPage.js';
import {utilsPage} from './utils/UtilsPage.js';
describe('Test login', function(){
  beforeEach(()=>{
    cy.visit(utilsPage.url);
  });
  it('Test login correcto', () =>{
    /* loginPage.submitLogin("guillermo","a"); */
    cy.login("guillermo","a");
  });
  it('Test login incorrecto', () =>{
    cy.login("guillermos","aa");
    loginPage.elements.errorMessage().should("have.text", "No se encuentra el usuario o la contraseña es incorrecta");
  });
});