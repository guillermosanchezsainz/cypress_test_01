class UtilsPage {
  /* constructor()
  {
    cy.log('iniciar Login');
  }   */
  elements = {
    // http://mdesashipo.protecmedia.com/shipov25desa/
    baseUrl: "http://localhost",
    webService: ":4200"
  };

  get url ()
  {
    return this.elements.baseUrl + this.elements.webService;
  }
}
export const utilsPage = new UtilsPage();
