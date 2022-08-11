import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import homePage from '../../pages/homePage.js'
import productPage from '../../pages/productPage.js'
import cartPage from '../../pages/cartPage.js'

const homePageObject = new homePage();
const productPageObject = new productPage();
const cartPageObject = new cartPage();

Given('{string} category is clicked', (category) => {
    homePageObject.clickCategory(category);
});

When('{string} is clicked', (button) => {
    productPageObject.clickButton(button);
});

When('Product is confirmed', () => {
    productPageObject.confirmWindow();
});

When('Product is added', () => {
    productPageObject.productIsAdded();
});

When('{string} is deleted', (item) => {
    cartPageObject.deleteItemFromCart(item);
});

When('Order is placed', () => {
    homePageObject.clickLink('Cart');
    cartPageObject.clickPlaceOrder();
});

When('Customer information is entered', () => {
    cartPageObject.fillCustomerInformation();
});

When('the product is deleted from the {string}', (link) => {
    homePageObject.clickLink(link);
    cartPageObject.deleteItemInCartById();
});

Then('{string} should be shown in the {string}', (item, link) => {
    homePageObject.clickLink(link);
    cartPageObject.validateItemInCart(item);
});

Then('{string} is not shown in the cart', (item) => {
    cartPageObject.validateItemIsNotShownInCart(item);
});

Then('the product is not shown in the cart', (item) => {
    cartPageObject.validateItemIsNotShownInCartById(item);
});

Then('Purchase message is shown', () => {
    cartPageObject.validatePurchaseIsShown();
});