import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

import generalTexts from "../../support/generalTexts";
import SignInPage from "../../support/page-objects/SignInPage";
import DealsPage from "../../support/page-objects/DealsPage";
import PurchasePage from "../../support/page-objects/PurchaseRequestsPage";
const signInPage = new SignInPage();
const dealsPage = new DealsPage();
const purchasePage = new PurchasePage();

//Test-1
Given("I open the Deals page", () => {
  signInPage.navigate();
  signInPage.signIn(generalTexts.mainEmail, generalTexts.mainPassword);
  dealsPage.openDealsPage();
});
When("I open Commercial offer tab and add a new offer", () => {
  dealsPage.openDealsDetailsPage();
  dealsPage.openCommercialOfferTab();
  dealsPage.addCommercialOffer(generalTexts.genRecordName);
});
Then("I see the commercial offer is successfully added", () => {
  cy.popupMessageDisplayed(generalTexts.commercialOfferSuccessMsg);
});

//Test-2
When("I open Commercial offer tab and copy offer", () => {
  dealsPage.openDealsDetailsPage();
  dealsPage.openCommercialOfferTab();
  dealsPage.copyOffer();
});
Then("I see the commercial offer is copied successfully", () => {
  //cy.popupMessageDisplayed(generalTexts.commercialOfferSuccessMsg);
});

//test-3
When("I click actions button and generate the Offer", () => {
  dealsPage.openDealsDetailsPage();
  dealsPage.openCommercialOfferTab();
  dealsPage.chooseAction("draft", "Generate Commercial Offer");
});
Then("I see the commercial offer Pdf is successfully generated", () => {
  cy.popupMessageDisplayed(generalTexts.commercialOfferPdfGeneratedMsg);
});

//Test-4
When("I click actions button and choose the Send Offer option", () => {
  dealsPage.openDealsDetailsPage();
  dealsPage.openCommercialOfferTab();
  dealsPage.chooseAction("Commercial Offer Generated", "Send Commercial Offer");
});
When("I add a contact person and send a commercial offer", () => {
  cy.sendOffer();
});
Then("I see the commercial offer was sent successfully", () => {
  cy.popupMessageDisplayed(generalTexts.commercialOfferSentMsg);
});

//Test-5
When("I click actions button and choose the Request Price option", () => {
  dealsPage.openDealsDetailsPage();
  dealsPage.openCommercialOfferTab();
  dealsPage.chooseAction("Negotiate: First Call", "Request Price Confirmation");
});
Then("I see the price requested successfully", () => {
  cy.popupMessageDisplayed(generalTexts.commercialOfferPriceRequestedMsg);
});

//Test-6
When("I open the purchase request tab", () => {
  dealsPage.openDealsDetailsPage();
  dealsPage.openPurchase();
});
Then("I confirm the Purchase Price", () => {
  dealsPage.changePurchaseRequestStatus();
});

//Test-7
When("I click actions button and choose the Send Pre Invoice option", () => {
  dealsPage.openDealsDetailsPage();
  dealsPage.openCommercialOfferTab();
  dealsPage.chooseAction("Price Confirmed", "Send Pre-Invoice");
});
When("I add a contact person and send a Pre Invoice", () => {
  cy.sendOffer();
});
Then("I see the Pre Invoice was sent successfully", () => {
  cy.popupMessageDisplayed(generalTexts.commercialOfferSentMsg);
});
