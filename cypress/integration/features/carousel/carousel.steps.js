import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import homePage from '../../pages/homePage.js'

const homePageObject = new homePage();

Given('I visit demoblaze homepage', () => {
    cy.visit('/');
});

And('carousel next button is clicked', () => {
    homePageObject.clickNextItemInCarousel();
});

And('carousel previous button is clicked', () => {
    homePageObject.clickPreviousItemInCarousel();
});


Then('the {string} is shown', (slide) => {
    homePageObject.carouselActiveItem(slide);
});
