const { Given, Then } = require('@cucumber/cucumber')
const HomePage = require('../pages/home.page')
const SignInPage = require('../pages/signIn.page')

Given('the user enters username as {string} and password as {string}', async (username, password) => {
    await SignInPage.inputUsername.setValue([username, 'Enter'])
    await SignInPage.inputPassword.setValue([password, 'Enter'])
})

Given('clicks on login button', async () => {
    await SignInPage.btnSubmit.click()
})

Then('the user should see user {string} logged in', async (username) => {
    await expect(HomePage.signedInUsername).toHaveText(username)
    await HomePage.logoutLink.click()
})

Then('the user should see the Login Error Message {string}', async (errorMessage) => {
    await expect(SignInPage.errorMessage).toHaveText(errorMessage)
})