const SignInElements = {
  email: "#username",
  password: "#password",
  signInBtn: "button[type=submit]",
  passwordEyeIcon: 'span[role="img"]',
  forgotPassword: 'a[href="/auth/admin/forgot-password"]',
};
class SignInPage {
  navigate() {
    cy.visit("/");
  }
  signIn(email: string, password: string) {
    cy.get(SignInElements.email).type(email);
    cy.get(SignInElements.password).type(password);
    cy.get(SignInElements.signInBtn).click();
  }
  clickSignInBtn() {
    cy.get(SignInElements.signInBtn).click();
  }
  clickEyeIcon() {
    cy.get(SignInElements.passwordEyeIcon).click();
  }
  checkPasswordEye() {
    cy.get(SignInElements.password).should("have.attr", "type", "text");
    cy.get(SignInElements.passwordEyeIcon).click();
  }
  enterPassword(password: string) {
    cy.get(SignInElements.password).type(password);
  }
  enterEmail(email: string) {
    cy.get(SignInElements.email).type(email);
  }
}
export default SignInPage;
