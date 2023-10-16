import { BasePage } from "./base.page";

/**
 * sub page containing specific selectors and methods for a specific page
 */
class OrdersPage extends BasePage {
  /**
   * define selectors using getter methods
   */
  get allOrders() {
    return $$(".order");
  }
  get firstOrder() {
    return $(".order");
  }

  async open() {
    await super.open("orders");
  }
}

export const ordersPage = new OrdersPage();
