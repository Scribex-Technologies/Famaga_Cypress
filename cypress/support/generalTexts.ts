//for future implementation
const uuid = () => Cypress._.random(0, 1e6);
const id = uuid();
const userName = `Auto Generated Record${id}`;

const generalTexts = {
  invalidCredentialsMsg: "Email or password is invalid!",
  invalidEmailMsg: "Please enter a valid email.",
  forgotInvalidEmail: "Invalid email address.",
  forgotEmptyEmail: "Email is required.",
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
  notExistingEmail: "tat@mer.io",
  invalidEmail: "tate.com",
  expiredLinkScreenText: "Invalid or Expired Link",
  clientSuccessFulMsg: "The client was successfully created.",
  contactPersonSuccessfulMsg: "The contact person was successfully created.",
  contactInfoUpdatedMsg: "Contact Info was successfully updated.",
  contactPersonUpdatedMsg: "The contact person was successfully updated.",
  contactPersonDeletedMsg: "The contact person was successfully deleted.",
  supplierSuccessfulMsg: "Supplier was successfully created.",
  successfulSupplierOfferCreationMsg:
    "Supplier Offer was successfully created.",
  deletionSupplierOfferMs: "Supplier Offer was successfully deleted.",
  leadSuccessfulMsg: "The Lead was successfully added.",
  leadStatusProcessingMSg:
    "Lead status was successfully changed to processing.",
  leadConvertStatus: "Converted",
  leadStatusConvertedMSg: "Lead status was successfully changed to converted.",
};
export default generalTexts;
