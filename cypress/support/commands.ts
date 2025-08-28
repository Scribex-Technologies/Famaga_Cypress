/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-namespace */
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
import "cypress-file-upload";
const CommandsElements = {
  email: "#username",
  password: "#password",
  signInBtn: "button[type=submit]",
  leftNav: "nav.mantine-AppShell-navbar",
  popMessage: ".ant-notification-notice-message",
  errorMsg: ".ant-form-item-explain-error",
  creationWindow:
    ".buildhero-Paper-root.buildhero-Modal-content.buildhero-Modal-content.buildhero-chy3l8",
  nameField: "#name",
  descField: "#description",
  createUploadBtn: ".buildhero-Button-root.buildhero-17i4eyq",
  uploadBtn: "input[type=file]",
  imageUploadFileMsg: ".buildhero-Text-root.buildhero-1of4r85",
  saveBtn: "div.buildhero-Grid-col.buildhero-1xs3cx4 > button",
  notificationMsg: ".notification > span",
  editTrashIconsOnImage: "span > .buildhero-UnstyledButton-root",
  image: ".buildhero-Avatar-root img.buildhero-Avatar-image",
  titleOnSiteSettings: "#title",
  contactPersonDropdown: "#contactPersonId",
  btn: 'button[type="button"]',
  supplierDropdown: "#supplierId",
  checkMarkToSubmit:
    ".ant-btn.css-rrh4gt.ant-btn-primary.ant-btn-color-primary.ant-btn-variant-solid.ant-btn-icon-only",
  contactPersonDropdownMenuItems: ":nth-child(5) > .ant-select-dropdown",
  sendOrderBtn: ".ant-row > .ant-btn-primary",
};
Cypress.Commands.add("login", () => {
  cy.session("login", () => {
    cy.visit("/");
    cy.get(CommandsElements.email).type("tatevik.harutyunyan@scribex.io");
    cy.get(CommandsElements.password).type("Scribex.5555");
    cy.get(CommandsElements.signInBtn).click();
    cy.get(CommandsElements.leftNav).should("be.visible");
  });
});
//Update this in the future- Tatevik
Cypress.on("uncaught:exception", (err, runnable) => {
  if (err.message.includes("Request failed with status code 400")) {
    // Catch the 400 error without failing the test
    return false;
  }
  // Allow other exceptions to fail the test
  return true;
});
Cypress.Commands.add("popupMessageDisplayed", (message: string) => {
  cy.get(CommandsElements.popMessage).contains(message);
});
Cypress.Commands.add("emptyFieldMsgIsDisplayed", (message: string) => {
  cy.get(CommandsElements.errorMsg).contains(message);
});
Cypress.Commands.add("checkTheWindowClosed", () => {
  cy.get(CommandsElements.creationWindow).should("not.exist");
});
Cypress.Commands.add("clickCreateUploadBtn", () => {
  cy.get(CommandsElements.createUploadBtn).click();
});
Cypress.Commands.add("uploadImage", (imageType) => {
  const imagePath = `cypress/fixtures/images/picture.${imageType}`;
  cy.get(CommandsElements.uploadBtn).selectFile(imagePath, { force: true });
});
Cypress.Commands.add("verifyErrorMessage", (expectedMessage) => {
  cy.get(CommandsElements.imageUploadFileMsg).should(
    "contain",
    expectedMessage
  );
});
Cypress.Commands.add("fillInFields", (text: string) => {
  cy.get(CommandsElements.nameField).clear().type(text);
  cy.get(CommandsElements.descField).clear().type(text);
});
Cypress.Commands.add("updateDataOnSiteSettingsPage", (text: string) => {
  cy.get(CommandsElements.titleOnSiteSettings).clear().type(text);
  cy.get(CommandsElements.descField).clear().type(text);
});
Cypress.Commands.add("checkUpdatedData", (text: string) => {
  cy.get(CommandsElements.nameField).should("have.value", text);
  cy.get(CommandsElements.descField).should("have.value", text);
});
Cypress.Commands.add("checkAccessTokenIsNotStored", () => {
  cy.get(CommandsElements.signInBtn).should("be.visible");
  cy.window().then((win) => {
    const accessToken = win.localStorage.getItem("access-token");
    const refreshToken = win.localStorage.getItem("refresh-token");
    expect(accessToken).to.be.null;
    expect(refreshToken).to.be.null;
  });
});
Cypress.Commands.add("checkAccessToken", () => {
  cy.window().then((win) => {
    const accessToken = win.localStorage.getItem("access-token");
    const refreshToken = win.localStorage.getItem("refresh-token");
    if (accessToken) {
      cy.log("Access Token:", accessToken);
      cy.log("Refresh Token:", refreshToken);
    } else {
      cy.log("Access token not found in local storage.");
    }
  });
});
Cypress.Commands.add("clickSaveBtn", () => {
  cy.get(CommandsElements.saveBtn).click();
});
Cypress.Commands.add("checkNotificationMessage", (message: string) => {
  cy.get(CommandsElements.notificationMsg).contains(message);
});
Cypress.Commands.add("clickEditIconOnImage", () => {
  cy.get(CommandsElements.editTrashIconsOnImage).then(($elements) => {
    cy.get(CommandsElements.editTrashIconsOnImage).then(($elements) => {
      if ($elements.length === 1) {
        cy.wrap($elements).first().click();
      } else if ($elements.length >= 2) {
        cy.wrap($elements)
          .eq(1)
          .then((element) => {
            cy.wrap(element).click();
          });
      } else {
        cy.log("No matching elements found");
      }
    });
  });
});
Cypress.Commands.add("clickTrashIconOnImage", () => {
  cy.get(CommandsElements.editTrashIconsOnImage).then(($elements) => {
    if ($elements.length === 1) {
      cy.wrap($elements).first().click();
    } else if ($elements.length >= 2) {
      cy.wrap($elements)
        .eq(0)
        .then((element) => {
          cy.wrap(element).click();
        });
    } else {
      cy.log("No matching elements found");
    }
  });
});
Cypress.Commands.add("sendOffer", (record: string) => {
  const prefix = record.slice(0, 7);
  cy.get(CommandsElements.contactPersonDropdown).type(prefix + "{enter}");
  cy.wait(1000);
  cy.get(CommandsElements.btn).contains("Send").scrollIntoView().click();
});
Cypress.Commands.add("requestPrice", (record: string) => {
  const prefix = record.slice(0, 7);
  cy.get(CommandsElements.supplierDropdown).type(prefix + "{enter}");
  cy.get(CommandsElements.contactPersonDropdown).type(prefix + "{enter}");
  cy.get(CommandsElements.checkMarkToSubmit).eq(0).click();
  cy.wait(1000);
  cy.get(CommandsElements.sendOrderBtn).eq(1).scrollIntoView().click();
});
Cypress.Commands.add("checkTheUpdatedImage", (imageType) => {
  cy.get(CommandsElements.image)
    .eq(2)
    .should("exist")
    .should("have.attr", "src")
    .then((src) => {
      expect(src).to.include(imageType);
    });
});
