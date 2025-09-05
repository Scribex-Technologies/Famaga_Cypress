import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

import generalTexts from "../../support/generalTexts";
import SignInPage from "../../support/page-objects/SignInPage";
import PurchaseOrdersPage from "../../support/page-objects/PurchaseOrdersPage";
const signInPage = new SignInPage();
const purchaseOrdersPage = new PurchaseOrdersPage();

//Test-1
Given("I open the Purchase Orders page", () => {
  signInPage.navigate();
  signInPage.signIn(generalTexts.mainEmail, generalTexts.mainPassword);
  cy.openEntity("purchase-order");
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
  purchaseOrdersPage.openPurchaseOrderDetailsPage("Processing");
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
//Test-6
When("I add a Supplier offer from the add purchase order page", () => {
  purchaseOrdersPage.clickAddNewBtn();
  purchaseOrdersPage.clickCheckbox();
  purchaseOrdersPage.createSupplierOffer(generalTexts.genRecordName);
});
Then("I see the supplier offer added successfully", () => {
  cy.popupMessageDisplayed(generalTexts.successfulSupplierOfferCreationMsg);
});

//Test-7
When("I update items quantity and prices on the table", () => {
  purchaseOrdersPage.clickAddNewBtn();
  purchaseOrdersPage.clickCheckbox();
  purchaseOrdersPage.createSupplierOffer(generalTexts.genRecordName);
  purchaseOrdersPage.clickBrandSection();
  purchaseOrdersPage.editItemOnTheTable(
    generalTexts.randomPrice,
    generalTexts.randomQuantity
  );
});
When("I publish the offer", () => {
  purchaseOrdersPage.publishSupplierOffer();
});
Then(
  "I see the offer is published and the user has been redirected to the previous page",
  () => {
    purchaseOrdersPage.checkItemsPricesUpdatedOnTheTable(
      generalTexts.randomPrice,
      generalTexts.randomQuantity
    );
  }
);
//Test-8
When("I add new items with quantity and prices to the table", () => {
  purchaseOrdersPage.clickAddNewBtn();
  purchaseOrdersPage.clickCheckbox();
  purchaseOrdersPage.createSupplierOffer(generalTexts.genRecordName);
  const {
    itemFirstName,
    itemSecondName,
    itemThirdName,
    itemForthName,
    itemFifthName,
    itemSixthName,
  } = generalTexts.generateRandomNames();
  purchaseOrdersPage.clickBrandSection();
  purchaseOrdersPage.addItemToTheTable(
    itemThirdName,
    generalTexts.randomPrice,
    generalTexts.randomQuantity
  );
  purchaseOrdersPage.addItemToTheTable(
    itemSecondName,
    generalTexts.randomPrice,
    generalTexts.randomQuantity
  );
});
Then("I see the items are saved after reload", () => {
  const {
    itemFirstName,
    itemSecondName,
    itemThirdName,
    itemFifthName,
    itemForthName,
    itemSixthName,
  } = generalTexts.generateRandomNames();
  purchaseOrdersPage.checkItemsAddedToTheTable(itemThirdName);
  purchaseOrdersPage.checkItemsAddedToTheTable(itemSecondName);
});

//Test-8
When("I add a shipping information and fee and charges", () => {
  purchaseOrdersPage.clickAddNewBtn();
  purchaseOrdersPage.clickCheckbox();
  purchaseOrdersPage.createSupplierOffer(generalTexts.genRecordName);
  purchaseOrdersPage.addLeadWeight();
  purchaseOrdersPage.addShippingCost();
  purchaseOrdersPage.addFeeAndCharges();
});
Then("I see the changes are saved after reload", () => {
  purchaseOrdersPage.verifyLeadShippingFeesDataIsSaved();
});

//Test-10
When("I add a Supplier offer from the purchase order general tab", () => {
  purchaseOrdersPage.openPurchaseOrderDetailsPage("Processing");
  purchaseOrdersPage.createSupplierOffer(generalTexts.genRecordName);
  cy.checkNotificationMessage(generalTexts.successfulSupplierOfferCreationMsg);
});
When("I fill in item quantity and price and publish", () => {
  purchaseOrdersPage.clickBrandSection();
  purchaseOrdersPage.editItemOnTheTable(
    generalTexts.randomPrice,
    generalTexts.randomQuantity
  );
  purchaseOrdersPage.publishSupplierOffer();
});
Then("I see the supplier offer saved and published successfully", () => {
  cy.checkNotificationMessage(generalTexts.supplierOfferPublishedMsg);
});

//Test-11
When("I open the order details page and change the statuses", () => {
  purchaseOrdersPage.openPurchaseOrderDetailsPage("Processing");
  purchaseOrdersPage.generatePdf();
  purchaseOrdersPage.clickSendBtn();
  cy.sendOffer(generalTexts.genRecordName);
  purchaseOrdersPage.changeOrdersStatus("Pending Payment");
  purchaseOrdersPage.changeOrdersStatus("Paid");
  purchaseOrdersPage.checkButtonDisabled();
  purchaseOrdersPage.changeStatusToConfirmedWithShippingDate("Order Confirmed");
  purchaseOrdersPage.checkButtonDisabled();
});
Then(
  "I see if the status is confirmed and next of it the create supplier offer button is disabled",
  () => {
    purchaseOrdersPage.changeOrdersStatus("Shipped");
    purchaseOrdersPage.checkButtonDisabled();
    purchaseOrdersPage.changeOrdersStatus("In Warehouse");
    purchaseOrdersPage.checkButtonDisabled();
  }
);
