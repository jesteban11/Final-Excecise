let pageLocators = {
    titles: {
        'Products': 'h2:contains("Products")',
        'Total': 'h2:contains("Total")'
    }
}

class cartPage {
    validateTitleIsShown(title) {
        cy.get(pageLocators.titles[title]).should('be.visible');
    }
}

export default cartPage;