import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

import generalTexts from "../../support/generalTexts";
import SignInPage from "../../support/page-objects/SignInPage";
import OrdersPage from "../../support/page-objects/OrdersPage";
import PurchaseOrdersPage from "../../support/page-objects/PurchaseOrdersPage";
const signInPage = new SignInPage();
const purchaseOrdersPage = new PurchaseOrdersPage();

//Test-1
Given("I open the Purchase Orders page", () => {
  signInPage.navigate();
  signInPage.signIn(generalTexts.mainEmail, generalTexts.mainPassword);
  purchaseOrdersPage.openPurchaseOrderPage();
});
When("I open the add new page select items and create an order", () => {
  purchaseOrdersPage.createPurchaseOrder(generalTexts.genRecordName);
});
Then(
  "I see the successful creation message and I redirected to the order details page",
  () => {
    //cy.popupMessageDisplayed(generalTexts.);
  }
);

//Test-2
When("I open the add new page select items and request a price", () => {
  purchaseOrdersPage.clickRequestPrice();
  cy.requestPrice(generalTexts.genRecordName);
});
Then("I see the successful message about price request sent", () => {
  cy.popupMessageDisplayed(generalTexts.requestPriceMsg);
});
