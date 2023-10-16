const BasePage = require('./base.page')
/**
 * sub page containing specific selectors and methods for a specific page
 */
class FavouritesPage extends BasePage {
  /**
   * define selectors using getter methods
   */
  get allFavourites() { return $$('p.shelf-item__title') }

  async open() {
    await super.open('favourites')
  }
}

module.exports = new FavouritesPage()
