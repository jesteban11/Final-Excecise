import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import homePage from '../../pages/homePage.js'
import productPage from '../../pages/productPage.js'
import cartPage from '../../pages/cartPage.js'

const homePageObject = new homePage();
const productPageObject = new productPage();
const cartPageObject = new cartPage();

Given('{string} link is clicked', (link) => {
    homePageObject.clickLink(link);
});

When('{string} is clicked', (button) => {
    productPageObject.clickButton(button);
});

When('Product is confirmed', () => {
    productPageObject.confirmWindow();
});

Then('{string} should be shown in the {string}', (item, link) => {
    homePageObject.clickLink(link);
    cartPageObject.validateItemInCart(item);
});