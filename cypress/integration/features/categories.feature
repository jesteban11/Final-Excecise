Feature: Categories selection testing

    Background: Opening the browser in demoblaze.com
        Given I visit demoblaze homepage

    Scenario: Clicking Phones Categories
        And 'Phones' link is clicked        

    Scenario: Clicking Laptops Categories
        And 'Laptops' link is clicked
        And 'Sony vaio i5' link is clicked
        And 'Add to cart' is clicked
        When Product is confirmed
        Then 'Sony vaio i5' should be shown in the 'Cart'

    Scenario: Clicking Monitors Categories
        And 'Monitors' link is clicked