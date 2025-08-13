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
  dealsPage.addCommercialOffer();
});
Then("I see the commercial offer is successfully added", () => {
  //cy.popupMessageDisplayed(generalTexts.leadSuccessfulMsg);
});
