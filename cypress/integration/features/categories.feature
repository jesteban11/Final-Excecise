Feature: Categories selection testing

    Background: Opening the browser in demoblaze.com
        Given I visit demoblaze homepage

    Scenario: Removing product from cart        
        And 'Samsung galaxy s6' link is clicked
        And 'Add to cart' is clicked
        And Product is added
        When the product is deleted from the 'Cart'
        Then the product is not shown in the cart

    Scenario: Product selection
        And 'Laptops' link is clicked
        And 'Sony vaio i5' link is clicked
        And 'Add to cart' is clicked
        When Product is confirmed
        Then 'Sony vaio i5' should be shown in the 'Cart'

    Scenario: Removing product from cart
        And 'Monitors' link is clicked
        And 'Apple monitor 24' link is clicked
        And 'Add to cart' is clicked
        And Product is confirmed
        And 'Cart' link is clicked
        When 'Apple monitor 24' is deleted
        Then 'Apple monitor 24' is not shown in the cart
