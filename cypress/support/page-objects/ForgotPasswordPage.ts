const ForgotPasswordElements = {
  forgotEmailField: "#email",
  requestResetBtn: "button[type=submit]",
  forgotPassword: 'a[href="/auth/admin/forgot-password"]',
  successfulPopup: 'div[role="dialog"]',
  errorMsg: ".ant-form-item-explain-error",
  expiredLinkScreen: ".ant-result-title",
};
class ForgotPasswordPage {
  clickForgotPassword() {
    cy.get(ForgotPasswordElements.forgotPassword).click();
  }
  submitForgotPassword(email: string) {
    cy.get(ForgotPasswordElements.forgotPassword).click();
    cy.get(ForgotPasswordElements.forgotEmailField).type(email);
    cy.get(ForgotPasswordElements.requestResetBtn).click();
  }
  theSuccessfulForgotPopupIsShown() {
    cy.get(ForgotPasswordElements.successfulPopup).should(
      "contain",
      "Please check your email for password reset instructions."
    );
  }
  checkInvalidEmailValidationOnForgotPassword(email: string, message: string) {
    cy.get(ForgotPasswordElements.forgotEmailField).type(email);
    cy.get(ForgotPasswordElements.errorMsg).should("contain", message);
  }
  checkEmptyEmailValidationOnForgotPassword(message: string) {
    cy.get(ForgotPasswordElements.requestResetBtn).click();
    cy.get(ForgotPasswordElements.errorMsg).should("contain", message);
  }
  checkExpiredLinkScreen(message: string) {
    cy.get(ForgotPasswordElements.requestResetBtn).click();
    cy.get(ForgotPasswordElements.expiredLinkScreen).should("contain", message);
  }
}
export default ForgotPasswordPage;
