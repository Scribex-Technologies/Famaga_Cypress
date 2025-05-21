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
When("I fill in all fields", () => {
  clientPage.addNewClient(generalTexts.accountName);
});

Then("I see the Client successfully added", () => {
  cy.popMessageDisplayed(generalTexts.clientSuccessFulMsg);
});
