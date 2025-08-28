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
    cy.popupMessageDisplayed(generalTexts.purchaseOrderCreatedMsg);
  }
);

//Test-2
When("I open the add new page select items and click request a price", () => {
  purchaseOrdersPage.clickRequestPrice();
  cy.requestPrice(generalTexts.genRecordName);
});
Then(
  "I fill in required fields send the price request and see the successful message about price request sent",
  () => {
    cy.popupMessageDisplayed(generalTexts.requestPriceMsg);
  }
);

//Test-3
When("I open order details page and click on the generate pdf button", () => {
  purchaseOrdersPage.openPurchaseOrderDetailsPage("Processing");
  purchaseOrdersPage.generatePdf();
});
Then("I see the successful message pdf generated", () => {
  cy.popupMessageDisplayed(generalTexts.purchasePdfMsg);
});

//Test-4
When("I open order details page and click on the send order button", () => {
  purchaseOrdersPage.openPurchaseOrderDetailsPage("Order Sent");
  purchaseOrdersPage.clickSendBtn();
});
Then(
  "I fill in data and send an order and I see the order sent and the successful message displayed",
  () => {
    cy.sendOffer(generalTexts.genRecordName);
    cy.popupMessageDisplayed(generalTexts.purchaseOrderSent);
  }
);

//Test-5
When(
  "I open order details page and click the change status to Confirmed",
  () => {
    purchaseOrdersPage.openPurchaseOrderDetailsPage("Order Sent");
  }
);
Then(
  "I pick the shipping date save and see the successful message about status change",
  () => {
    purchaseOrdersPage.changeStatusToConfirmedWithShippingDate(
      "Order Confirmed"
    );
    cy.popupMessageDisplayed(generalTexts.purchaseOrderStatusChangeMsg);
  }
);
