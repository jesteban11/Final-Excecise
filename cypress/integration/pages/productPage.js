let pageLocators = {
    buttons: {
        'Add to cart': 'a:contains("Add to cart")'
    }
}

class productPage {
    clickButton(button) {
        cy.get(pageLocators.buttons[button]).click();
    }

    confirmWindow() {
        cy.wait(1000);
        cy.on("window:alert", (text) => {
            expect(text).to.be.eql('Product added');
        });
    }
}

export default productPage;