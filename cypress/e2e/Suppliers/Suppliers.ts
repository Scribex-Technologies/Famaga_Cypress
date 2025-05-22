import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

import generalTexts from "../../support/generalTexts";
import SignInPage from "../../support/page-objects/SignInPage";
import SupplierPage from "../../support/page-objects/SuppliersPage";
const signInPage = new SignInPage();
const suppliersPage = new SupplierPage();

//Test-1
Given("I open the Sign in page and signing in", () => {
  signInPage.navigate();
  signInPage.signIn(generalTexts.mainEmail, generalTexts.mainPassword);
  suppliersPage.openSupplierPage();
});
When("I fill in all fields and submit", () => {
  suppliersPage.addNewSupplier(generalTexts.accountName);
});

Then("I see the Supplier successfully added", () => {
  cy.popupMessageDisplayed(generalTexts.supplierSuccessfulMsg);
});

//Test-2
When("I fill in all contact person's fields and submit", () => {
  suppliersPage.openSupplierDetailsPage();
  suppliersPage.addNewContactPerson(generalTexts.accountName);
});

Then("I see the contact person successfully added", () => {
  cy.popupMessageDisplayed(generalTexts.contactPersonSuccessfulMsg);
});

//Test-3
When("I edit the contact person's fields and submit", () => {
  suppliersPage.openSupplierDetailsPage();
  suppliersPage.editContactPerson();
});

Then("I see the contact person successfully updated", () => {
  cy.popupMessageDisplayed(generalTexts.contactPersonUpdatedMsg);
});

//Test-4
When("I delete the contact person", () => {
  suppliersPage.openSupplierDetailsPage();
  suppliersPage.deleteContactPerson();
});

Then("I see the contact person successfully deleted", () => {
  cy.popupMessageDisplayed(generalTexts.contactPersonDeletedMsg);
});
