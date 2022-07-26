Feature: Click carousel elements

    Background:
        Given I visit demoblaze homepage

    Scenario: Navigate to the second item
        When carousel next button is clicked
        Then the 'Second slide' is shown


    Scenario: Navigate to the third item
        When carousel next button is clicked
        And carousel next button is clicked
        Then the 'Third slide' is shown