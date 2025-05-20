import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

import generalTexts from "../../support/generalTexts";
import SignInPage from "../../support/page-objects/SignInPage";
import SignUpPage from "../../support/page-objects/SignUpPage";

const signInPage = new SignInPage();
const signUpPage = new SignUpPage();

//Test-1
Given("I open the the Sign in page", () => {
  signInPage.navigate();
});
When(
  "I input valid email address and valid password and click on the Sign in button",
  () => {
    signInPage.signIn(generalTexts.mainEmail, generalTexts.mainPassword);
  }
);
Then("I see the user signed in successfully", () => {
  cy.checkAccessToken();
});
//Test-2
When(
  "I input valid Email address and invalid Password and click on the Sign in button",
  () => {
    signInPage.signIn(generalTexts.mainEmail, "invalidPassword");
  }
);

Then("I see the validation message displayed for password", () => {
  cy.invalidCredentialsMsgIsDisplayed(generalTexts.invalidCredentialsMsg);
});

//Test-3
When(
  "I input invalid Email address and valid Password and click on the button Sign in",
  () => {
    signInPage.signIn("tatevikscrib.io", generalTexts.mainPassword);
  }
);
Then(
  "I see the user is not signed in and the validation message displayed for email",
  () => {
    cy.invalidEmailMsgIsDisplayed(generalTexts.invalidCredentialsMsg);
  }
);

//Test-4
When(
  "I input valid Email address and leave the password field blank and click on the Sign in button",
  () => {
    signInPage.enterEmail(generalTexts.mainEmail);
    signInPage.clickSignInBtn();
  }
);
Then(
  "I see the user is not signed in and the validation message displayed for blank password",
  () => {
    cy.emptyFieldMsgIsDisplayed(generalTexts.emptyPasswordMsg);
  }
);

//Test-5
When(
  "I input valid password and leave the Email field blank and click on the Sign in button",
  () => {
    signInPage.enterPassword(generalTexts.mainPassword);
    signInPage.clickSignInBtn();
  }
);
Then("I see the validation message displayed for blank email", () => {
  cy.emptyFieldMsgIsDisplayed(generalTexts.emptyEmailMsg);
});

//Test-6
When(
  "I leave the password and email fields blank and click on the Sign in button",
  () => {
    signInPage.clickSignInBtn();
  }
);
Then(
  "I see the user is not signed in and the credentials validation messages displayed",
  () => {
    cy.emptyFieldMsgIsDisplayed(generalTexts.emptyEmailMsg);
    cy.emptyFieldMsgIsDisplayed(generalTexts.emptyPasswordMsg);
  }
);

//Test-7
When("I click on the show hide icon", () => {
  signInPage.enterPassword(generalTexts.mainPassword);
  signInPage.clickEyeIcon();
});
Then("I see the password shown or hidden in the password field", () => {
  signInPage.checkPasswordEye();
});
