//for future implementation
const uuid = () => Cypress._.random(0, 1e6);
const id = uuid();
const userName = `awesome user-${id}`;

const generalTexts = {
  invalidCredentialsMsg: "Email or password is invalid!",
  invalidEmailMsg: "Please enter a valid email.",
  emptyEmailMsg: "Username/ Email is required.",
  emptyPasswordMsg: "Password is required.",
  accountName: userName,
  accountUpdatedMessage: "Success! Your account information has been updated.",
  successForgotPasswordMessage:
    "We’ve sent a link to <email>, please follow the link to reset your password",
  resetPasswordExpiredScreenMessage:
    "The link was already used, please request a new one.",
  mainEmail: "tatevik.harutyunyan@scribex.io",
  mainPassword: "Scribex.5555",
};
export default generalTexts;
