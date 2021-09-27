Feature: Product Feature

    Background:
        Given the user is on home page

    Scenario: Apply Apple Vendor Filter
        When the user applies Apple Vendor Filter
        Then the user should only see iPhones

    Scenario: Apply Lowest to Highest Order By
        When the user applies order by lowest to highest
        Then the user should see prices in ascending order
