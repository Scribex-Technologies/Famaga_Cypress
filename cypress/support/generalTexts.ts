//for future implementation
const uuid = () => Cypress._.random(0, 9999);
const id = uuid();
const genRecordName = `Cypress Unicorn|${id}`;
const secondGenRecordName = `Cypress Tater Tot|${id}`;
const randomPrice = Math.floor(Math.random() * (1000 - 50 + 1)) + 50;

const generalTexts = {
  invalidCredentialsMsg: "Email or password is invalid!",
  invalidEmailMsg: "Please enter a valid email.",
  forgotInvalidEmail: "Invalid email address.",
  forgotEmptyEmail: "Email is required.",
  emptyEmailMsg: "Username/ Email is required.",
  emptyPasswordMsg: "Password is required.",
  genRecordName: genRecordName,
  randomPrice: randomPrice,
  secondGenRecordName: secondGenRecordName,
  accountUpdatedMessage: "Success! Your account information has been updated.",
  successForgotPasswordMessage:
    "We’ve sent a link to <email>, please follow the link to reset your password",
  resetPasswordExpiredScreenMessage:
    "The link was already used, please request a new one.",
  mainEmail: "tatevik.harutyunyan@scribex.io",
  mainPassword: "Scribex.5555",
  notExistingEmail: "tatevik@mer.io",
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
  markedUnavailableMsg: "Item was successfully marked as Not Available.",
  markAvailableMsg: "Item was successfully marked as Available.",
  item1: "Offer Item",
  item2: "Supplier Item",
  supplierOfferPublishedMsg: "Supplier Offer was successfully published.",
  purchaseRequestStatusChangeMsg:
    "The purchase request status was successfully changed.",
  commercialOfferSuccessMsg: "Commercial Offer was successfully created.",
  commercialOfferSentMsg: "Commercial Offer was successfully sent.",
  commercialOfferPriceRequestedMsg: "Requesting price confirmation for offer",
  commercialOfferPdfGeneratedMsg: "Generating commercial offer for offer ",
  orderStatusChangeMsg: "The order status was successfully changed.",
};
export default generalTexts;
