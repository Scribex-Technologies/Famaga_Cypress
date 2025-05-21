const ClientPageElements = {
  addNewBtn: 'button[type="button"]',
  clientName: "#name",
  clientCountry: "#mainCountryId",
  clientType: "#clientTypeId",
  contactPersonName: "#fullName",
  contactPersonLanguage: "#languageId",
  contactPersonDepartment: "#department",
  contactPersonRole: "#role",
  contactPersonType: "#type",
  contactPersonValue: "#value",
  contactTypeSubmitBtn:
    "body > div:nth-child(3) > div > div.ant-modal-wrap.ant-modal-centered > div > div:nth-child(1) > div > div.ant-modal-body > div > form > div > div:nth-child(9) > div > div > div > div:nth-child(2) > div > div:nth-child(2) > button", //Update Later
  addBtn: 'button[type="button"]',
};
class ClientPage {
  addNewClient(randomName: string) {
    cy.get(ClientPageElements.addNewBtn).contains("Add New").click();
    cy.get(ClientPageElements.clientName).type(randomName);
    cy.get(ClientPageElements.clientType).type("Retail{enter}");
    cy.get(ClientPageElements.clientCountry).type("Armenia{enter}");
    cy.get(ClientPageElements.contactPersonName).type(randomName);
    cy.get(ClientPageElements.contactPersonLanguage).type("Arabic{enter}");
    cy.get(ClientPageElements.contactPersonDepartment).type(randomName);
    cy.get(ClientPageElements.contactPersonRole).type(randomName);
    cy.get(ClientPageElements.contactPersonType).type("Instagram{enter}");
    cy.get(ClientPageElements.contactTypeSubmitBtn).click();
    cy.get(ClientPageElements.contactPersonValue).type("@tate");
    cy.get(ClientPageElements.addBtn).eq(19).click();
  }
}
export default ClientPage;
