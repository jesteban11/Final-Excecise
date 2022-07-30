let pageLocators = {
    titles: {
        'Products': 'h2:contains("Products")',
        'Total': 'h2:contains("Total")'
    },
    table: '#tbodyid'
}

class cartPage {
    validateTitleIsShown(title) {
        cy.get(pageLocators.titles[title]).should('be.visible');
    }

    validateItemInCart(item) {
        cy.get(pageLocators.table).contains(item)
    }
}

export default cartPage;