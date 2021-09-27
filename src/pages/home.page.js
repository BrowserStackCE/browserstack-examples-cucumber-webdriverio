const BasePage = require('./base.page')
let phoneName = ''
let vendorName = ''
/**
 * sub page containing specific selectors and methods for a specific page
 */
class HomePage extends BasePage {
  /**
   * define selectors using getter methods
   */
  get signInLink() { return $('#signin') }
  get signedInUsername() { return $('.username') }
  get offersLink() { return $('#offers') }
  get ordersLink() { return $('#orders') }
  get favouritesLink() { return $('#favourites') }
  get iPhoneXSElement() { return $("//p[text() = 'iPhone XS']/../div[@class = 'shelf-item__buy-btn']") }
  get phonesBuyButton() { return $("//p[text() = '" + phoneName + "']/../div[@class = 'shelf-item__buy-btn']") }
  get cartCloseButton() { return $('.float-cart__close-btn') }
  get buyButton() { return $('.buy-btn') }
  get orderBy() { return $('.sort select') }
  get allPrices() { return $$(".val > b") }
  get vendor() { return $("input[value='" + vendorName + "'] + span") }
  get loading() { return $(".spinner") }
  get allPhones() { return $$(".shelf-item__title") }
  get addFavourite() { return $("//p[text() = '" + phoneName + "']/../div/button") }
  get allImages() { return $$("div.shelf-item__thumb img") }
  get logoutLink() { return $('#logout') }

  async open() {
    await super.open('home')
  }

  async selectPhone(phoneToSelect) {
    phoneName = phoneToSelect
    await this.phonesBuyButton.click()
  }

  async clickBuyButton() {
    await this.buyButton.waitForClickable()
    await this.buyButton.click()
  }

  async clickVendor(vendor) {
    vendorName = vendor
    await this.vendor.click()
  }

  async getAllPrices() {
    let prices = []
    for (const price of await this.allPrices) {
      var text = await price.getText()
      prices.push(parseInt(text))
    }
    return prices
  }

  async getAllPhones() {
    let phoneNames = []
    for (const phone of await this.allPhones) {
      var text = await phone.getText()
      phoneNames.push(text)
    }
    return phoneNames
  }

  async waitToLoad() {
    await this.loading.waitForDisplayed({ reverse: true })
  }

  async clickFavourite(phoneToSelect) {
    phoneName = phoneToSelect
    await this.addFavourite.click()
  }

  async getAllImagesSrcAttribute() {
    let imgSrc = []
    for (const img of await this.allImages) {
      var src = await img.getAttribute("src")
      imgSrc.push(src)
    }
    return imgSrc
  }

}

module.exports = new HomePage()
