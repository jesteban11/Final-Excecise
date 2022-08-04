Feature: Categories selection testing

    Background: Opening the browser in demoblaze.com
        Given I visit demoblaze homepage

    #    Scenario: Removing Phone from cart
    #        And 'Phones' category is clicked
    #        And 'Samsung galaxy s6' link is clicked
    #        And 'Add to cart' is clicked
    #        And Product is added
    #        When the product is deleted from the 'Cart'
    #        Then the product is not shown in the cart
    #
    #    Scenario: Validating Laptop is shown on cart
    #        And 'Laptops' category is clicked
    #        And 'Sony vaio i5' link is clicked
    #        And 'Add to cart' is clicked
    #        When Product is confirmed
    #        Then 'Sony vaio i5' should be shown in the 'Cart'
    #
    #    Scenario: Removing Monitor product from cart
    #        And 'Monitors' category is clicked
    #        And 'Apple monitor 24' link is clicked
    #        And 'Add to cart' is clicked
    #        And Product is confirmed
    #        And 'Cart' link is clicked
    #        When 'Apple monitor 24' is deleted
    #        Then 'Apple monitor 24' is not shown in the cart

    Scenario: Buying
        And 'Laptops' category is clicked
        And 'MacBook air' link is clicked
        And 'Add to cart' is clicked
        And Product is added        
        And Order is placed
        When Customer information is entered