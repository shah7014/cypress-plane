/// <reference types="cypress" />

class LoginPage {
    elements = {
        userNameInput: () => cy.get('[data-test="username"]'),
        passwordInput: () => cy.get('[data-test="password"]'),
        loginButton: () => cy.get('[data-test="login-button"]'),
        errorMsg: () => cy.get('[data-test="error"]')
    }

    enterUserName(userName) {
        this.elements.userNameInput().type(userName);
    }

    enterPassword(password) {
        this.elements.passwordInput().type(password);
    }

    clickLoginBtn() {
        this.elements.loginButton().click();
    }
}

module.exports = new LoginPage();