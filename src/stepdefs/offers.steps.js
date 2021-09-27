const { When, Then } = require('@cucumber/cucumber')
const HomePage = require('../pages/home.page')
const OffersPage = require('../pages/offers.page')

When('clicks on the Offers link', async () => {
    await browser.execute(() => {
        window.navigator.geolocation.getCurrentPosition = (success) => {
            var position = { coords: { latitude: "1", longitude: "103" } }
            success(position)
        }
    })
    await HomePage.offersLink.click()
    await OffersPage.firstOffer.click()
})

Then('the user should see the available offers', async () => {
    await expect(OffersPage.allOffers).toBeElementsArrayOfSize(3)
})