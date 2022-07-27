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

    //waitUntilSliderFinished(initialActiveItem) {
    //    cy.wrap(cy.get(pageLocators.carouselActiveItem).children(pageLocators.imageShownInCarousel).invoke('attr', 'alt').should('not.eq', initialActiveItem),{timeout:10000});  
    //}
}

export default homePage;