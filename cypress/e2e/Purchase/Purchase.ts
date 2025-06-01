import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

import generalTexts from "../../support/generalTexts";
import SignInPage from "../../support/page-objects/SignInPage";
import PurchasePage from "../../support/page-objects/PurchasePage";
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
  purchasePage.createSupplierOffer();
});
Then("I see the purchase request successfully added", () => {
  cy.popupMessageDisplayed(generalTexts.successfulSupplierOfferCreationMsg);
});
//Test-2
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
//Test-3
When("I add items to the table", () => {
  purchasePage.openSupplierOffersTab();
  purchasePage.openSupplierOffer();
  purchasePage.addItemToTheTable(generalTexts.item1);
  purchasePage.addItemToTheTable(generalTexts.item2);
});
Then("I see the items are saved after reload", () => {
  purchasePage.checkItemsAddedToTheTable(generalTexts.item1);
  purchasePage.checkItemsAddedToTheTable(generalTexts.item2);
});
//Test-4
When("I fill in items fields on the table", () => {
  purchasePage.openSupplierOffersTab();
  purchasePage.openSupplierOffer();
  purchasePage.clickAllCheckbox();
  purchasePage.fillInItemsTableFields();
});
Then("I see all fields are saved after reload", () => {
  //purchasePage.verifyItemsTableFieldsSaved();
});

//Test-4
When("I create items alternative", () => {
  purchasePage.openSupplierOffersTab();
  purchasePage.openSupplierOffer();
  purchasePage.addAlternative();
});
Then("I see the alternative is created", () => {});
//Test-4
When("I create substitute", () => {
  purchasePage.openSupplierOffersTab();
  purchasePage.openSupplierOffer();
  purchasePage.addSubstitute();
});
Then("I see substitute is created", () => {});
//Test-5
When("I delete the supplier offer", () => {
  purchasePage.openSupplierOffersTab();
  purchasePage.deleteSupplierOffer();
});
Then("I see the purchase request successfully deleted", () => {
  cy.popupMessageDisplayed(generalTexts.deletionSupplierOfferMs);
});
