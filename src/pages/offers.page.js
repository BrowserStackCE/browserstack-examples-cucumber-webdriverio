const BasePage = require('./base.page')

/**
 * sub page containing specific selectors and methods for a specific page
 */
class OffersPage extends BasePage {
  /**
   * define selectors using getter methods
   */
  get firstOffer() { return $('.offer') }
  get allOffers() { return $$('.offer') }

  async open() {
    await super.open('offers')
  }
}

module.exports = new OffersPage()
