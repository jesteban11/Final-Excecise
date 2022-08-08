let pageLocators = {
    titles: {
        'Products': 'h2:contains("Products")',
        'Total': 'h2:contains("Total")'
    },
    table: '#tbodyid',
    buttons: {
        delete: (itemId) => { return '[onclick="deleteItem(\'' + itemId + '\')"]' },
        'Place Order': 'button:contains("Place Order")',
        'Purchase': 'button:contains("Purchase")'
    },
    modals: {
        'Place Order': '.modal-content'
    },
    textBoxes: {
        'Name': '#name',
        'Country': '#country',
        'City': '#city',
        'Card': '#card',
        'Month': '#month',
        'Year': '#year'
    },
    messages: {
        'Purchase': 'h2:contains("Thank you for your purchase!")'
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

    clickPlaceOrder() {
        cy.get(pageLocators.buttons['Place Order']).click();
    }

    enterCustomerInformationInModal() {
        this.fillCustomerInformation();
        cy.get(pageLocators.messages.Purchase).should('be.visible');
    }

    fillCustomerInformation() {
        cy.get(pageLocators.modals["Place Order"]).should('be.visible');
        cy.fixture('customer').then((customer) => {            
            cy.get(pageLocators.textBoxes.Name).type(customer.name);
            cy.get(pageLocators.textBoxes.Country).type(customer.country);
            cy.get(pageLocators.textBoxes.City).type(customer.city);
            cy.get(pageLocators.textBoxes.Card).type(customer.card);
            cy.get(pageLocators.textBoxes.Month).type(customer.month);
            cy.get(pageLocators.textBoxes.Year).type(customer.year);
            cy.get(pageLocators.buttons.Purchase).click();
        })
    }

}

export default cartPage;