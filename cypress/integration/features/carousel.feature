Feature: Clicking carousel elements

    Background: Opening the browser in demoblaze.com
        Given I visit demoblaze homepage

    Scenario: Clicking next button three times shows the first, second and third slide
        And 'Next' button is clicked
        And the 'Second slide' is shown
        And 'Next' button is clicked
        And the 'Third slide' is shown
        When 'Next' button is clicked
        Then the 'First slide' is shown

    Scenario: Click on the First item in the slider
        When the 'First' slider is clicked
        Then the 'First' slider is active

    Scenario: Click on the Second item in the slider
        When the 'Second' slider is clicked
        Then the 'Second' slider is active

    Scenario: Click on the Third item in the slider
        When the 'Third' slider is clicked
        Then the 'Third' slider is active

    Scenario: Click on Previous and Third Slider is active
        And 'Previous' button is clicked
        Then the 'Third' slider is active