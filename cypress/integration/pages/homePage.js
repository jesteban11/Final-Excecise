let pageLocators = {
    buttons: {
        'Previous': '.carousel-control-prev-icon',
        'Next': '.carousel-control-next-icon'
    },
    carouselInner: '.carousel-inner',
    carouselPreviousItem: '.carousel-control-prev-icon',
    carouselNextItem: '.carousel-control-next-icon',
    carouselActiveItem: '.carousel-item.active',
    imageShownInCarousel: '.d-block.img-fluid',
    sliderElementMovement: '.carousel-item.carousel-item-next.carousel-item-left',
    slider: {
        'First': '[data-slide-to="0"]',
        'Second': '[data-slide-to="1"]',
        'Third': '[data-slide-to="2"]'
    },
    links: {
        'Contact': 'a:contains("Contact")',
        'About Us': 'a:contains("About us")',
        'Log in': 'a:contains("Log in")',
        'Cart': 'a:contains("Cart")',
        'Sign up': 'a:contains("Sign up")'
    },
    modals: {
        'Contact': '#exampleModal',
        'About Us': '#videoModal',
        'Log in': '#logInModal',
        'Sign up': '#signInModal'
    }
}

class homePage {

    clickButtonInCarousel(button) {
        cy.get(pageLocators.buttons[button]).click();
    }

    validateSliderIsShown(slider) {
        cy.wait(1000);
        cy.get(pageLocators.carouselActiveItem).children(pageLocators.imageShownInCarousel).invoke('attr', 'alt').should('eq', slider);
    }

    clickItemInCarousel(slider) {
        cy.get(pageLocators.slider[slider]).click();
    }

    validateSliderIsActive(slider) {
        cy.get(pageLocators.slider[slider]).should('have.class', 'active')
    }

    validateSlide(slide) {
        cy.get(pageLocators.carouselActiveItem).children(pageLocators.imageShownInCarousel).invoke('attr', 'alt').should('eq', slide);
    }

    clickLink(link) {
        cy.get(pageLocators.links[link]).click()
    }

    validateModalIsDisplay(modal) {
        cy.get(pageLocators.modals[modal]).should('have.attr', 'style', 'display: block;')
    }
}

export default homePage;