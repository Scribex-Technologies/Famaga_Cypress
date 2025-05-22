import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

import generalTexts from "../../support/generalTexts";
import SignInPage from "../../support/page-objects/SignInPage";
import ClientPage from "../../support/page-objects/ClientPage";
const signInPage = new SignInPage();
const clientPage = new ClientPage();

//Test-1
Given("I open the Sign in page and signing in", () => {
  signInPage.navigate();
  signInPage.signIn(generalTexts.mainEmail, generalTexts.mainPassword);
});
When("I fill in all fields and submit", () => {
  clientPage.addNewClient(generalTexts.accountName);
});

Then("I see the Client successfully added", () => {
  cy.popupMessageDisplayed(generalTexts.clientSuccessFulMsg);
});

//Test-2
When("I fill in all contact person's fields and submit", () => {
  clientPage.openClientDetailsPage();
  clientPage.addNewContactPerson(generalTexts.accountName);
});

Then("I see the contact person successfully added", () => {
  cy.popupMessageDisplayed(generalTexts.contactPersonSuccessfulMsg);
});

//Test-3
When("I fill in all contact info fields and submit", () => {
  clientPage.openClientDetailsPage();
  clientPage.editContactInfo();
});

Then("I see the contact info successfully updated", () => {
  cy.popupMessageDisplayed(generalTexts.contactInfoUpdatedMsg);
});

//Test-4
When("I edit the contact person's fields and submit", () => {
  clientPage.openClientDetailsPage();
  clientPage.editContactPerson();
});

Then("I see the contact person successfully updated", () => {
  cy.popupMessageDisplayed(generalTexts.contactPersonUpdatedMsg);
});

//Test-5
When("I delete the contact person", () => {
  clientPage.openClientDetailsPage();
  clientPage.deleteContactPerson();
});

Then("I see the contact person successfully deleted", () => {
  cy.popupMessageDisplayed(generalTexts.contactPersonDeletedMsg);
});
