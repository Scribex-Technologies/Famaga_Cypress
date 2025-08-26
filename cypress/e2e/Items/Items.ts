import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

import generalTexts from "../../support/generalTexts";
import SignInPage from "../../support/page-objects/SignInPage";
import ItemsPage from "../../support/page-objects/ItemsPage";
const signInPage = new SignInPage();
const itemsPage = new ItemsPage();

//Test-1
Given("I open the Items page", () => {
  signInPage.navigate();
  signInPage.signIn(generalTexts.mainEmail, generalTexts.mainPassword);
  itemsPage.openItemsPage();
});
When("I fill in all fields and submit", () => {
  const { itemFirstName, itemSecondName } = generalTexts.generateRandomNames();
  itemsPage.addNewItems(itemFirstName, itemSecondName);
});

Then("I see the item successfully added", () => {
  cy.popupMessageDisplayed(generalTexts.itemsSuccessMsg);
});
