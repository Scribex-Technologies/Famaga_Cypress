import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

import generalTexts from "../../support/generalTexts";
import SignInPage from "../../support/page-objects/SignInPage";
import ForgotPasswordPage from "../../support/page-objects/ForgotPasswordPage";

const signInPage = new SignInPage();
const forgotPasswordPage = new ForgotPasswordPage();

//Test-1
Given("I open the Sign in page", () => {
  signInPage.navigate();
});
When("I add an existing email on the screen and click the button", () => {
  forgotPasswordPage.submitForgotPassword(generalTexts.mainEmail);
});
Then(
  "I see the request successfully sent to the user's email and the user is redirected to the successful screen",
  () => {
    forgotPasswordPage.theSuccessfulForgotPopupIsShown();
  }
);
//Update this case later
//Test-2
When(
  "I open the Forgot password screen, add non existing email and click on the button",
  () => {
    forgotPasswordPage.submitForgotPassword(generalTexts.notExistingEmail);
  }
);
Then("I see the request successfully sent", () => {
  forgotPasswordPage.theSuccessfulForgotPopupIsShown();
});

//Test-3
When(
  "I open the Forgot password screen, add an invalid email and click on the button",
  () => {
    forgotPasswordPage.clickForgotPassword();
  }
);
Then(
  "I see the invalid email validation message displays under the email field",
  () => {
    forgotPasswordPage.checkInvalidEmailValidationOnForgotPassword(
      generalTexts.invalidEmail,
      generalTexts.forgotInvalidEmail
    );
  }
);

//Test-4
When(
  "I open the Forgot password screen, leave the email empty and click on the button",
  () => {
    forgotPasswordPage.clickForgotPassword();
  }
);
Then(
  "I see the validation empty email validation message displays under the email field",
  () => {
    forgotPasswordPage.checkEmptyEmailValidationOnForgotPassword(
      generalTexts.forgotEmptyEmail
    );
  }
);

//Test-5
When("I expired Reset password link", () => {
  cy.visit(
    "https://stg-famaga-web.scribex.io/auth/admin/reset-password?key=77081076814125405961"
  );
});
Then("I see the Link expired screen opened", () => {
  forgotPasswordPage.checkExpiredLinkScreen(generalTexts.expiredLinkScreenText);
});
