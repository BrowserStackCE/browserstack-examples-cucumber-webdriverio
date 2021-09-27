Feature: User Feature

    Background:
        Given the user is on login page

    Scenario: Login as User with no image loaded
        When the user logs in with username as "image_not_loading_user" and password as "testingisfun99"
        Then the user should see the images loaded

    Scenario: Login as User with existing Orders
        When the user logs in with username as "existing_orders_user" and password as "testingisfun99"
        Then the user should see existing orders
