const { Given, When, Then } = require('@cucumber/cucumber')
const HomePage = require('../pages/home.page')
const _ = require('lodash');
const expectChai = require('chai').expect;

Given('the user is on home page', async () => {
    browser.url('')
})

When('the user applies Apple Vendor Filter', async () => {
    await HomePage.clickVendor('Apple')
    await HomePage.waitToLoad()
})

Then('the user should only see iPhones', async () => {
    let all_phones = await HomePage.getAllPhones()
    expectChai(_.every(all_phones, (value) => _.includes(value, 'iPhone'))).to.equal(true, "Vendor filter is not applied")
})

When('the user applies order by lowest to highest', async () => {
    await HomePage.orderBy.selectByAttribute('value', 'lowestprice')
    await HomePage.waitToLoad()
})

Then('the user should see prices in ascending order', async () => {
    let all_prices = await HomePage.getAllPrices()
    expectChai(_.isEqual(all_prices, _.orderBy(all_prices, [], ['asc']))).to.equal(true, "Lowest to Highest filter is not applied")
})