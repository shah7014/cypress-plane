/// <reference types="cypress" />

describe('intercept-demo', () => {
    it('should mock get todos api', () => {
        cy.intercept('GET', '/todos', {
            fixture: 'fixture-demo/mock-api-response.json'
        });

        cy.visit('http://localhost:4200');

        cy.get('#todo-list li')
        .should('have.length', 2)
        .and('contain', 'cypress assertions')
        .and('contain', 'cypress api testing');
    })
})