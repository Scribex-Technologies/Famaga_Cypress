import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

import generalTexts from "../../support/generalTexts";
import SignInPage from "../../support/page-objects/SignInPage";
import OrdersPage from "../../support/page-objects/OrdersPage";
const signInPage = new SignInPage();
const ordersPage = new OrdersPage();

//Test-1
Given("I open the Orders page", () => {
  signInPage.navigate();
  signInPage.signIn(generalTexts.mainEmail, generalTexts.mainPassword);
  ordersPage.openOrderPage();
});
When("I open the order details page and change the status", () => {
  ordersPage.openOrderDetailsPage();
  ordersPage.changeOrdersStatus("Paid");
});
Then("I see the status has changed", () => {
  cy.popupMessageDisplayed(generalTexts.orderStatusChangeMsg);
});
