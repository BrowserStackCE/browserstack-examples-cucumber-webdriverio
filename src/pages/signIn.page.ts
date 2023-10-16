import { BasePage } from "./base.page";

/**
 * sub page containing specific selectors and methods for a specific page
 */
export default class SignInPage extends BasePage {
  static login(username: string, password: string) {
    throw new Error("Method not implemented.");
  }
  /**
   * define selectors using getter methods
   */
  get inputUsername() {
    return $("#username input");
  }
  get inputPassword() {
    return $("#password input");
  }
  get btnSubmit() {
    return $("#login-btn");
  }
  get errorMessage() {
    return $(".api-error");
  }

  async login(username: any, password: any) {
    await this.inputUsername.setValue(`${username}\n`);
    await this.inputPassword.setValue(`${password}\n`);
    await this.btnSubmit.click();
  }

  async open() {
    await super.open("sign in");
  }
}

module.exports = new SignInPage();
