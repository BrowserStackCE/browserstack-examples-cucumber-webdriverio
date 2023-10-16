import { BasePage } from "./base.page";
/**
 * sub page containing specific selectors and methods for a specific page
 */
export default class CheckoutPage extends BasePage {
  static firstNameInput: any;
  static lastNameInput: any;
  static addressLine1Input: any;
  static provinceInput: any;
  static postCodeInput: any;
  static checkoutShippingContinue: any;
  /**
   * define selectors using getter methods
   */
  get firstNameInput() {
    return $("#firstNameInput");
  }
  get lastNameInput() {
    return $("#lastNameInput");
  }
  get addressLine1Input() {
    return $("#addressLine1Input");
  }
  get provinceInput() {
    return $("#provinceInput");
  }
  get postCodeInput() {
    return $("#postCodeInput");
  }
  get checkoutShippingContinue() {
    return $("#checkout-shipping-continue");
  }

  async open() {
    await super.open("checkout");
  }
}

module.exports = new CheckoutPage();
