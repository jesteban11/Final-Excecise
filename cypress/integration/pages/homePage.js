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
        'Sign up': 'a:contains("Sign up")',
        'Samsung galaxy s6': 'a.hrefch:contains("Samsung galaxy s6")',
        'Nokia lumia 1520': 'a.hrefch:contains("Nokia lumia 1520")',
        'Nexus 6': 'a.hrefch:contains("Nexus 6")',
        'MacBook air': 'a.hrefch:contains("MacBook air")',
        'Sony vaio i5': 'a.hrefch:contains("Sony vaio i5")',
        'Apple monitor 24': 'a.hrefch:contains("Apple monitor 24")'
    },
    categories: {
        'Phones': 'a:contains("Phones")',
        'Laptops': 'a:contains("Laptops")',
        'Monitors': 'a:contains("Monitors")',
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
        cy.get(pageLocators.links[link]).click();
    }

    clickCategory(category) {
        cy.intercept('POST', '/bycat')
            .as('byCategory')
            .then(() => {
                cy.get(pageLocators.categories[category]).click();
                cy.wait('@byCategory');
            });
    }

    validateModalIsDisplay(modal) {
        cy.get(pageLocators.modals[modal]).should('have.attr', 'style', 'display: block;');
    }
}

export default homePage;