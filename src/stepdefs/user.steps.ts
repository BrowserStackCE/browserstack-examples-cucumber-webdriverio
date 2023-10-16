const { Then } = require('@cucumber/cucumber')
const _ = require('lodash');
const expectChai = require('chai').expect;
const HomePage = require('../pages/home.page')
const OrdersPage = require('../pages/orders.page')

Then('the user should see the images loaded', async () => {
    const all_images = await HomePage.getAllImagesSrcAttribute()
    await HomePage.logoutLink.click()
    expectChai(_.every(all_images, (value) => (!_.isEqual(value, '')))).to.equal(true, "All images are not loaded")
})

Then('the user should see existing orders', async () => {
    await HomePage.ordersLink.click()
    await OrdersPage.firstOrder.waitForDisplayed()
    await expect(OrdersPage.allOrders).toBeElementsArrayOfSize(5)
})