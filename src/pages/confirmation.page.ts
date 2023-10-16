const BasePage = require('./base.page')
/**
 * sub page containing specific selectors and methods for a specific page
 */
class ConfirmationPage extends BasePage {
  /**
   * define selectors using getter methods
   */
  get confirmationMessage() { return $('#confirmation-message') }
  get continueShoppingButton() { return $('div.continueButtonContainer button') }
  
  async open() {
    await super.open('confirmation')
  }
}

module.exports = new ConfirmationPage()
