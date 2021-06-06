/// <reference types="Cypress" />
describe('My NAM Test Suite', function()
{
    before(function () {
        cy.fixture('example').then(function (data) {
           this.data = data
        })
    })
    it('My First Test Case', function()
     {
        //VisitLoginPage
        Cypress.env('url')
        cy.visit(Cypress.env('url'))
        //Enter Email or UserName and click on SignIn
        cy.get('input[id="loginEmail"]').type(this.data.email).should('have.value',this.data.email)
        cy.get('button[id="loginSubmitButton"] span[class="ladda-label"]').click({force: true})
        
        cy.reload()     
        //Enter Password and click on SignIn
        cy.get('input[id="password"]').type(this.data.password).should('have.value',this.data.password)
        cy.get('button[id="loginSubmitButton"] span[class="ladda-label"]').click({force: true})

        cy.reload()     
        //Enter Email and Password and click on SignIn
        cy.get('input[id="loginEmail"]').type(this.data.email).should('have.value',this.data.email)
        cy.get('input[id="password"]').type(this.data.password).should('have.value',this.data.password)
        cy.get('button[id="loginSubmitButton"] span[class="ladda-label"]').click({force: true})
        cy.get('span[class="ng-scope"]').should('have.text','Username and/or password invalid')

        //Note: Dont have valid credentials for application due to which cannot perform more permutations combinations for login.
    })
})