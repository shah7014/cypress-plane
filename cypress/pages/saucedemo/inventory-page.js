/// <reference types="cypress" />

class InventoryPage {
    elements = {
        pageTitle: () => cy.get('span.title')
    }
}

module.exports = new InventoryPage();