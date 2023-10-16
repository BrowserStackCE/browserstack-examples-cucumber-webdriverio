const BasePage = require('./base.page')
/**
 * sub page containing specific selectors and methods for a specific page
 */
class CheckoutPage extends BasePage {
  /**
   * define selectors using getter methods
   */
  get firstNameInput() { return $('#firstNameInput') }
  get lastNameInput() { return $('#lastNameInput') }
  get addressLine1Input() { return $('#addressLine1Input') }
  get provinceInput() { return $('#provinceInput') }
  get postCodeInput() { return $('#postCodeInput') }
  get checkoutShippingContinue() { return $('#checkout-shipping-continue') }
  
  async open() {
    await super.open('checkout')
  }
}

module.exports = new CheckoutPage()
