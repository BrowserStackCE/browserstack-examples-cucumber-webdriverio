Feature: End to End Feature

    Background:
        Given the user is on login page

    Scenario: End to End Scenario
        Given the user logs in with username as "fav_user" and password as "testingisfun99"
        And adds two products to the cart
        And provides shipping details and clicks Checkout
            | First Name | Last Name | Address      | State/Province | Postal Code |
            | first      | last      | test address | test province  | 123456      |
        When the user clicks on Orders link
        Then I should see the products in the list
