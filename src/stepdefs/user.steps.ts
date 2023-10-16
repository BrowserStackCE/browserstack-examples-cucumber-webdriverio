import { Then } from "@cucumber/cucumber";
import * as _ from "lodash";
import { expect, assert } from "chai";
import HomePage from "../pages/home.page";
import OrdersPage from "../pages/orders.page";

Then("the user should see the images loaded", async () => {
  const all_images = await HomePage.getAllImagesSrcAttribute();
  await HomePage.logoutLink.click();
  expect(
    _.every(all_images, (value: string) => !_.isEqual(value, ""))
  ).to.equal(true, "All images are not loaded");
});

Then("the user should see existing orders", async () => {
  await HomePage.ordersLink.click();
  await OrdersPage.firstOrder.waitForDisplayed();
  // await expect(OrdersPage.allOrders).toBeElementsArrayOfSize(5);
  const allOrders = await OrdersPage.allOrders;
  assert.lengthOf(allOrders, 5, "Expected 5 orders to be displayed");
});
