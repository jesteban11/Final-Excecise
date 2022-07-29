import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import homePage from '../../pages/homePage.js'
import cartPage from '../../pages/cartPage.js'

const homePageObject = new homePage();
const cartPageObject = new cartPage();

When('{string} link is clicked', (link) => {
    homePageObject.clickLink(link);
});

Then('{string} modal is displayed', (modal) => {
    homePageObject.validateModalIsDisplay(modal);
});

When('{string} title is shown', (title) => {
    cartPageObject.validateTitleIsShown(title);
});