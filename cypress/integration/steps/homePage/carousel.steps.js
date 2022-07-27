import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import homePage from '../../pages/homePage.js'

const homePageObject = new homePage();

Given('I visit demoblaze homepage', () => {
    cy.visit('/');
});

And('{string} button is clicked', (button) => {
    homePageObject.clickButtonInCarousel(button);
});

When('the {string} slider is clicked', (slider) => {
    homePageObject.clickItemInCarousel(slider);
});

Then('the {string} is shown', (slider) => {
    homePageObject.validateSliderIsShown(slider);
});

Then('the {string} slider is active', (slider) => {
    homePageObject.validateSliderIsActive(slider)
});
