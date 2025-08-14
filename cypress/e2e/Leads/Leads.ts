import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

import generalTexts from "../../support/generalTexts";
import SignInPage from "../../support/page-objects/SignInPage";
import LeadsPage from "../../support/page-objects/LeadsPage";
const signInPage = new SignInPage();
const leadsPage = new LeadsPage();

//Test-1
Given("I open the Leads page", () => {
  signInPage.navigate();
  signInPage.signIn(generalTexts.mainEmail, generalTexts.mainPassword);
  leadsPage.openLeadsPage();
});
When("I fill in all fields and submit", () => {
  leadsPage.createNewLead();
});
Then("I see the Leads successfully added", () => {
  cy.popupMessageDisplayed(generalTexts.leadSuccessfulMsg);
});
//Test-2
When("I click the convert status option", () => {
  leadsPage.openLeadsDetailsPage();
  leadsPage.changeLeadStatus(generalTexts.leadConvertStatus);
});
Then("I see the status has been changed successfully", () => {
  cy.popupMessageDisplayed(generalTexts.leadStatusConvertedMSg);
});
