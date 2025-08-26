import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

import generalTexts from "../../support/generalTexts";
import SignInPage from "../../support/page-objects/SignInPage";
import BrandsPage from "../../support/page-objects/BrandPage";
const signInPage = new SignInPage();
const brandsPage = new BrandsPage();

//Test-1
Given("I open the brands page", () => {
  signInPage.navigate();
  signInPage.signIn(generalTexts.mainEmail, generalTexts.mainPassword);
  brandsPage.openBrandPage();
});
When("I fill in all fields and submit", () => {
  brandsPage.addNewBrand(generalTexts.genRecordName);
});

Then("I see the Brand successfully added", () => {
  cy.popupMessageDisplayed(generalTexts.brandSuccessMsg);
});
