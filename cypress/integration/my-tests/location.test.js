/// <reference types="cypress" />

let username='standard_user';
let password='secret_sauce';

describe('Location tests', () => {
    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/');
    })

    it('should have correct page title', () => {
        cy.title().should('eq', 'Swag Labs');
    });

    it('should have correct url', () => {
        cy.url().should('eq', 'https://www.saucedemo.com/');
        cy.location('href').should('eq', 'https://www.saucedemo.com/');
    });

    it('should have https protocol', () => {
        cy.location('protocol').should('include', 'https');
    });

    it('should have correct host name', () => {
        cy.location('hostname').should('eq', 'www.saucedemo.com');
    });


    it('should redirect to inventory page on successful login', () => {
        cy.get('[data-test="username"]').type(username);
        cy.get('[data-test="password"]').type(password);
        cy.get('[data-test="login-button"]').click();

        cy.url().should('include', 'inventory');
    });
})