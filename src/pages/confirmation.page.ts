import { BasePage } from "./base.page";
/**
 * sub page containing specific selectors and methods for a specific page
 */
export default class ConfirmationPage extends BasePage {
  static confirmationMessage: any;
  static continueShoppingButton: any;
  /**
   * define selectors using getter methods
   */
  get confirmationMessage() {
    return $("#confirmation-message");
  }
  get continueShoppingButton() {
    return $("div.continueButtonContainer button");
  }

  async open() {
    await super.open("confirmation");
  }
}

module.exports = new ConfirmationPage();
