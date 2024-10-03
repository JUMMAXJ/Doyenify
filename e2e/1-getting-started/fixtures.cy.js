/// <reference types ="cypress"/>
import data from '../1-getting-started/fixtures/loginData.json'
describe('To explain loading of fixture file', ()=>{
  beforeEach(()=>{
    cy.visit("https://parabank.parasoft.com/parabank/index.htm");
    cy.fixture('../e2e/1-getting-started/fixtures/loginData.json').as('users')
  });

    //using cy.fixture
   /* it("login by using invalid credentials", () => {
       cy.visit("https://parabank.parasoft.com/parabank/index.htm");
       cy.fixture('../e2e/1-getting-started/fixtures/loginData').then((data) => {
         cy.log("Data in fixture", data);
         cy.get('input[name="username"]').type(data.username)
         cy.get('input[name="password"]').type(data.password)
       })
     })*/
    
   //using fixture in beforeeach hook
    
    /*it("login", function (){
      cy.get('input[name="username"]').type(this.data.username);
      cy.get('input[name="password"]').type(this.data.password);
       
      
    })/*

    
    /*it('login', () => {
      cy.get('input[name="username"]').type(data.username)
      cy.get('input[name="password"]').type(data.password)  
    });*/

    it("login", function () {
      this.users.forEach((user) => {
        cy.visit("https://parabank.parasoft.com/parabank/index.htm");
        cy.get('input[name="username"]').type(user.username);
        cy.get('input[name="password"]').type(user.password);
        cy.get('input[type="submit"]').click()
        cy.url().should("eq","https://parabank.parasoft.com/parabank/login.htm")
        //cy.get('#rightPanel').should("contain","An internal error has occurred and has been logged.")
        cy.get('#rightPanel').should("contain","The username and password could not be verified.")


      })
    });
     
})
