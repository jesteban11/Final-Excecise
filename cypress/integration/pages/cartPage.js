let pageLocators = {
    titles: {
        'Products': 'h2:contains("Products")',
        'Total': 'h2:contains("Total")'
    },
    table: '#tbodyid',
    buttons: {
        delete: (itemId) => { return '[onclick="deleteItem(\'' + itemId + '\')"]' }
    }
}

class cartPage {
    validateTitleIsShown(title) {
        cy.get(pageLocators.titles[title]).should('be.visible');
    }

    validateItemInCart(item) {
        cy.get(pageLocators.table).contains(item);
    }

    deleteItemInCartById() {
        cy.get('@addToCartResponse')
            .its('request.body').
            then((requestBody) => {
                //cy.get('[onclick="deleteItem(\'' + requestBody.id + '\')"]').click();
                cy.get(pageLocators.buttons.delete(requestBody.id)).click();
            })
    }

    validateItemInCart(item) {
        cy.get(pageLocators.table).contains(item);
    }

    validateItemIsNotShownInCart(item) {
        this.waitUntilCartIsLoaded()
        cy.get(pageLocators.table).contains(item).should('not.exist');
    }


    validateItemIsNotShownInCartById() {
        cy.intercept('POST', '/viewcart')
            .as('viewCartResponse')
            .then(() => {
                cy.wait('@viewCartResponse')
                cy.get('@addToCartResponse')
                    .its('request.body').
                    then((requestBody) => {
                        cy.get(pageLocators.buttons.delete(requestBody.id)).should('not.exist');
                    });
            });
    }

    deleteItemFromCart(item) {
        cy.get(pageLocators.table).contains(item).siblings().contains('Delete').click()
    }

    waitUntilCartIsLoaded() {
        cy.intercept('POST', '/viewcart')
            .as('viewCartResponse')
            .then(() => {
                cy.wait('@viewCartResponse')
            });
    }
}

export default cartPage;