import loginPage from '../../../pages/saucedemo/login-page';
import inventoryPage from '../../../pages/saucedemo/inventory-page';

/// <reference types="cypress" />

describe('POM-test', () => {
    let credentials;

    beforeEach(() => {
        cy.fixture('fixture-demo/credentials.json')
        .then(value => credentials = value);

        cy.visit('https://www.saucedemo.com/');
    })

    it('should redirect to inventory page on successful login', () => {
        loginPage.enterUserName(credentials.username);
        loginPage.enterPassword(credentials.password);
        loginPage.clickLoginBtn();

        inventoryPage.elements.pageTitle().should('contain.text', 'Products');
    })
})