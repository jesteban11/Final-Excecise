let pageLocators = {
    carouselInner: '.carousel-inner',
    carouselPreviousItem: '.carousel-control-prev-icon',
    carouselNextItem: '.carousel-control-next-icon',
    carouselActiveItem: '.carousel-item.active',
    imageShownInCarousel: '.d-block.img-fluid'
}

class homePage {

    clickPreviousItemInCarousel() {
        cy.get(pageLocators.carouselPreviousItem).click();
    }

    clickNextItemInCarousel() {
        cy.get(pageLocators.carouselNextItem).click();
    }

    carouselActiveItem(slide) {
        console.log(cy.get(pageLocators.carouselActiveItem).children(pageLocators.imageShownInCarousel).invoke('attr', 'alt').should('eq', slide));
    }

}

export default homePage;