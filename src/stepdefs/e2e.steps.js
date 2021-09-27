const { Given, When, Then } = require('@cucumber/cucumber')
const HomePage = require('../pages/home.page')
const SignInPage = require('../pages/signIn.page')
const CheckoutPage = require('../pages/checkout.page')
const ConfirmationPage = require('../pages/confirmation.page')
const OrdersPage = require('../pages/orders.page')

Given('the user is on login page', async () => {
    browser.url('')
    HomePage.signInLink.click()
})

Given('the user logs in with username as {string} and password as {string}', async (username, password) => {
    await SignInPage.login(username, password)
    await expect(HomePage.signedInUsername).toHaveText(username)
})

Given('adds two products to the cart', async () => {
    await HomePage.selectPhone('iPhone XS')
    await HomePage.cartCloseButton.click()
    await HomePage.selectPhone('Galaxy S20')
    await HomePage.clickBuyButton()
})

Given('provides shipping details and clicks Checkout', async (dataTable) => {
    const data = dataTable.rawTable[1];
    await CheckoutPage.firstNameInput.setValue(data[0])
    await CheckoutPage.lastNameInput.setValue(data[1])
    await CheckoutPage.addressLine1Input.setValue(data[2])
    await CheckoutPage.provinceInput.setValue(data[3])
    await CheckoutPage.postCodeInput.setValue(data[4])
    await CheckoutPage.checkoutShippingContinue.click()

    await ConfirmationPage.confirmationMessage.waitForDisplayed()
    await expect(ConfirmationPage.confirmationMessage).toHaveText('Your Order has been successfully placed.')
    await ConfirmationPage.continueShoppingButton.click()
})

When('the user clicks on Orders link', async () => {
    await HomePage.ordersLink.click()
    await OrdersPage.firstOrder.waitForDisplayed()
})

Then('I should see the products in the list', async () => {
    await expect(OrdersPage.allOrders).toBeElementsArrayOfSize(1)
})