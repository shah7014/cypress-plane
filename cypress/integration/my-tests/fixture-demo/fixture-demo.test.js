/// <reference types="cypress" />

describe('fixture-demo', () => {
    let credentials;

    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/');

        cy.fixture('./fixture-demo/credentials')
        .then(value => {
            credentials = value;
        })
    });

    it('should login successfully', () => {
        cy.get('[data-test="username"]').type(credentials.username);
        cy.get('[data-test="password"]').type(credentials.password);
        cy.get('[data-test="login-button"]').click();

        cy.url().should('contain', 'inventory');

        cy.get('span.title').should('contain.text', 'Products');
    });

    it('should show error when login fails', () => {
        cy.get('[data-test="username"]').type(credentials['dummy-user']);
        cy.get('[data-test="password"]').type(credentials['dummy-password']);
        cy.get('[data-test="login-button"]').click();

        cy.get('[data-test="error"]').should('exist');

    });
});