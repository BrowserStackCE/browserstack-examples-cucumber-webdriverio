Feature: Offers Feature

    Background:
        Given the user is on login page

    Scenario: Offers for India
        When the user logs in with username as "fav_user" and password as "testingisfun99"
        And clicks on the Offers link
        Then the user should see the available offers
