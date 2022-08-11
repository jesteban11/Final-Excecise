Feature: Header links tests

    Background: Opening the browser in demoblaze.com
        Given I visit demoblaze homepage

    Scenario: Clicking Contact Link shows a Modal
        When 'Contact' link is clicked
        Then 'Contact' modal is displayed

    Scenario: Clicking About Us Link shows a Modal
        When 'About Us' link is clicked
        Then 'About Us' modal is displayed

    Scenario: Clicking Cart shows Products and Total
        When 'Cart' link is clicked
        Then 'Products' title is shown
        And 'Total' title is shown

    Scenario: Clicking Log In Us Link shows a Modal
        When 'Log in' link is clicked
        Then 'Log in' modal is displayed

    Scenario: Clicking Sign In Link shows a Modal
        When 'Sign up' link is clicked
        Then 'Sign up' modal is displayed