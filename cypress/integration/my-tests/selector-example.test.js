/// <reference types="cypress" />

let username='standard_user';
let password='secret_sauce';

describe('selectors-examples', () => {

    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/');
    })

    it('get method', () => {
        cy.get('input#user-name').type(username);
        cy.get('input#password').type(password);

        cy.get('input[data-test="login-button"]').click();
    });

    it('first|eq|last method', () => {
        cy.get('input').first().type(username);

        cy.get('input').eq(1).type(password);

        cy.get('input').last().click();
    })


    it('filter method', () => {
        cy.get('input').filter('[type="text"]').type(username);
        
        cy.get('input').filter('#password').type(password);

        cy.get('input').filter('.submit-button').click();
    })

    it('find method', () => {
        cy.get('form').find('input').filter('#user-name').type(username);
        
        cy.get('form').find('input').filter('#password').type(password);
        
        cy.get('form').find('input').filter('.submit-button').click();
    })
})