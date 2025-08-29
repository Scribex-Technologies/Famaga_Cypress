import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

import generalTexts from "../../support/generalTexts";
import SignInPage from "../../support/page-objects/SignInPage";
import PurchasePage from "../../support/page-objects/PurchaseRequestsPage";
const signInPage = new SignInPage();
const purchasePage = new PurchasePage();

//Test-1
Given("I open the purchase request page", () => {
  signInPage.navigate();
  signInPage.signIn(generalTexts.mainEmail, generalTexts.mainPassword);
  purchasePage.openPurchasePage();
  purchasePage.openPurchaseDetailsPage();
});
When("I fill in all fields and submit", () => {
  purchasePage.openSupplierOffersTab();
  purchasePage.createSupplierOffer(generalTexts.genRecordName);
});
Then("I see the purchase request successfully added", () => {
  cy.popupMessageDisplayed(generalTexts.successfulSupplierOfferCreationMsg);
});

//Test-2
When("I add items quantity and prices to the table", () => {
  const { itemFirstName, itemSecondName } = generalTexts.generateRandomNames();
  purchasePage.openSupplierOffersTab();
  purchasePage.openSupplierOffer();
  purchasePage.addItemToTheTable(
    itemFirstName,
    generalTexts.randomPrice,
    generalTexts.randomQuantity
  );
  purchasePage.addItemToTheTable(
    itemSecondName,
    generalTexts.randomPrice,
    generalTexts.randomQuantity
  );
  //purchasePage.addItemToTheTable(itemSecondName);
});
Then("I see the items are saved after reload", () => {
  const { itemFirstName, itemSecondName } = generalTexts.generateRandomNames();
  purchasePage.checkItemsAddedToTheTable(itemFirstName);
  purchasePage.checkItemsAddedToTheTable(itemSecondName);
});

//Test-3
When("I add a shipping information and fee and charges", () => {
  purchasePage.openSupplierOffersTab();
  purchasePage.openSupplierOffer();
  purchasePage.addLeadWeight();
  purchasePage.addShippingCost();
  purchasePage.addFeeAndCharges();
});
Then("I see the changes are saved after reload", () => {
  purchasePage.verifyLeadShippingFeesDataIsSaved();
});
//Test-4
When("I fill in items fields on the table", () => {
  purchasePage.openSupplierOffersTab();
  purchasePage.openSupplierOffer();
  purchasePage.fillInItemsTableFields(
    generalTexts.randomPrice,
    generalTexts.randomQuantity
  );
});
Then("I see all fields are saved after reload", () => {
  //purchasePage.verifyItemsTableFieldsSaved();
});

//Test-5
When("I delete the supplier offer", () => {
  purchasePage.openSupplierOffersTab();
  purchasePage.deleteSupplierOffer();
});
Then("I see the Supplier Offer is successfully deleted", () => {
  cy.popupMessageDisplayed(generalTexts.deletionSupplierOfferMsg);
});

//Test-6
When("I publish the Supplier offer", () => {
  purchasePage.openSupplierOffersTab();
  purchasePage.publishSupplierOffer();
});
Then("I see the offer published and the success message", () => {
  cy.popupMessageDisplayed(generalTexts.supplierOfferPublishedMsg);
});

//Test-7
When("I change the Supplier offer status", () => {
  purchasePage.openSupplierOffersTab();
  purchasePage.changePurchaseRequestStatus();
});
Then("I see the status changed and the success message", () => {
  cy.popupMessageDisplayed(generalTexts.purchaseRequestStatusChangeMsg);
});

//Test-8
When("I create items alternative", () => {
  purchasePage.openSupplierOffersTab();
  purchasePage.openSupplierOffer();
  purchasePage.addAlternative();
});
Then("I see the alternative is created", () => {});

//Test-9
When("I create substitute", () => {
  purchasePage.openSupplierOffersTab();
  purchasePage.openSupplierOffer();
  purchasePage.addSubstitute();
});
Then("I see substitute is created", () => {});
