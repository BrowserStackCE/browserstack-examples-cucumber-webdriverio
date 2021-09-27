const BasePage = require('./base.page')

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SignInPage extends BasePage {
  /**
   * define selectors using getter methods
   */
  get inputUsername() { return $('#username input') }
  get inputPassword() { return $('#password input') }
  get btnSubmit() { return $('#login-btn') }
  get errorMessage() { return $('.api-error') }

  async login(username, password) {
    await this.inputUsername.setValue([username, 'Enter'])
    await this.inputPassword.setValue([password, 'Enter'])
    await this.btnSubmit.click()
  }

  async open() {
    await super.open('sign in')
  }
}

module.exports = new SignInPage()
