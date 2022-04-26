/// <reference types="cypress" />

describe('codedamn', () => {

    it('contains', () => {
        cy.visit('http://codedamn.com');
        cy.contains('Videos').should('exist');
    });

})