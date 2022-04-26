/// <reference types="cypress" />

let username='standard_user';
let password='secret_sauce';

describe('selectors-examples', () => {

    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/');
    })

    it('should test GET', () => {
        cy.get('input#user-name').type(username);
        cy.get('input#password').type(password);

        cy.get('input[data-test="login-button"]').click();
    });

    it('first|eq|last', () => {
        cy.get('input').first().type(username);

        cy.get('input').eq(1).type(password);

        cy.get('input').last().click();
    })
})