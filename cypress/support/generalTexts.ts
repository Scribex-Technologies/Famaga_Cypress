//for future implementation
const generateRandomNames = () => {
  const id1 = Cypress._.random(0, 9999);
  const id2 = Cypress._.random(0, 9999); // different id
  const id3 = Cypress._.random(0, 9999); // different id
  const id4 = Cypress._.random(0, 9999); // different id
  const id5 = Cypress._.random(0, 9999); // different id
  const id6 = Cypress._.random(0, 9999); // different id
  return {
    itemFirstName: `TatevsSupplier Offer Unicorn|${id1}`,
    itemSecondName: `Automated Item|${id2}`,
    itemThirdName: `Third Item|${id3}`,
    itemForthName: `Forth Item|${id4}`,
    itemFifthName: `Fifth Item|${id5}`,
    itemSixthName: `Sixth Item|${id6}`,
  };
};
const uuid = () => Cypress._.random(0, 9999);
const id = uuid();
const genRecordName = `TatevsSupplier Offer Unicorn|${id}`;
const secondGenRecordName = `Automated Unicorn|${id}`;
const randomPrice = Math.floor(Math.random() * 999) + 1;
const randomQuantity = Math.floor(Math.random() * 10) + 1;

const generalTexts = {
  countries: ["Armenia", "China", "Argentina", "Brazil", "Albania"],
  languages: ["Armenian", "English", "Portuguese", "Serbian", "Chinese"],
  getRandomCountry() {
    return Cypress._.sample(this.countries);
  },
  getRandomLanguage() {
    return Cypress._.sample(this.languages);
  },
  invalidCredentialsMsg: "Email or password is invalid!",
  invalidEmailMsg: "Please enter a valid email.",
  forgotInvalidEmail: "Invalid email address.",
  forgotEmptyEmail: "Email is required.",
  emptyEmailMsg: "Username/ Email is required.",
  emptyPasswordMsg: "Password is required.",
  generateRandomNames: generateRandomNames,
  genRecordName: genRecordName,
  randomPrice: randomPrice,
  randomQuantity: randomQuantity,
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
  deletionSupplierOfferMsg: "Supplier Offer was successfully deleted.",
  leadSuccessfulMsg: "The Lead was successfully added.",
  leadStatusProcessingMSg:
    "Lead status was successfully changed to processing.",
  leadConvertStatus: "Converted",
  leadStatusConvertedMSg: "Lead status was successfully changed to converted.",
  markedUnavailableMsg: "Item was successfully marked as Not Available.",
  markAvailableMsg: "Item was successfully marked as Available.",
  supplierOfferPublishedMsg: "Supplier Offer was successfully published.",
  purchaseRequestStatusChangeMsg:
    "The purchase request status was successfully changed.",
  commercialOfferSuccessMsg: "Commercial Offer was successfully created.",
  commercialOfferSentMsg: "Commercial Offer was successfully sent.",
  commercialOfferPriceRequestedMsg: "Requesting price confirmation for offer",
  commercialOfferPdfGeneratedMsg: "Generating commercial offer for offer ",
  orderStatusChangeMsg: "The order status was successfully changed.",
  brandUpdateSuccessMessage: "The brand details were successfully updated.",
  brandSuccessMsg: "The brand was successfully created.",
  itemsSuccessMsg: "The item was successfully added",
  requestPriceMsg: "Request Price was successfully sent.",
  purchasePdfMsg: "PDF has been generated successfully.",
  purchaseOrderSent: "Purchase Order sent successfully!",
  purchaseOrderStatusChangeMsg:
    "Purchase Order status was successfully updated.",
  purchaseOrderCreatedMsg: "The Purchase Order was successfully created",
};
export default generalTexts;
