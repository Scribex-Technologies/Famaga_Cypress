const ClientPageElements = {
  btn: 'button[type="button"]',
  addBtn: '[style="row-gap: 20px;"] > .ant-col > .ant-row > .ant-btn-primary',
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
    ".ant-btn.css-rrh4gt.ant-btn-primary.ant-btn-color-primary.ant-btn-variant-solid.ant-btn-icon-only",
  clientOpenEye: ".ant-table-cell-fix-right > .ant-btn > .ant-btn-icon",
  contactInfoEditBtn: "button[title='Edit']",
  contactPersonEditIcon:
    ":nth-child(1) > .margin-b-20 > [style='row-gap: 4px;'] > :nth-child(1) > .ant-row-space-between > :nth-child(2) > .ant-row > :nth-child(2)",
  ContactPersonDeleteIcon:
    ":nth-child(1) > .margin-b-20 > [style='row-gap: 4px;'] > :nth-child(1) > .ant-row-space-between > :nth-child(2) > .ant-row > :nth-child(1) > .ant-btn-icon > svg",
};
class ClientPage {
  openClientPage() {
    cy.get(ClientPageElements.clientOpenEye).eq(0).click();
  }

  addNewClient(randomName: string) {
    cy.get(ClientPageElements.btn).contains("Add New").click();
    cy.get(ClientPageElements.clientName).type(randomName);
    cy.get(ClientPageElements.clientType).type("Retail{enter}");
    cy.get(ClientPageElements.clientCountry).type("Armenia{enter}");
    cy.get(ClientPageElements.contactPersonName).type(randomName);
    cy.get(ClientPageElements.contactPersonLanguage).type("Arabic{enter}");
    cy.get(ClientPageElements.contactPersonDepartment).type(randomName);
    cy.get(ClientPageElements.contactPersonRole).type(randomName);
    cy.get(ClientPageElements.contactPersonType).type("Instagram{enter}");
    cy.get(ClientPageElements.contactPersonValue).type("@tate");
    cy.get(ClientPageElements.contactTypeSubmitBtn).click();
    cy.get(ClientPageElements.addBtn).click();
  }
  addNewContactPerson(randomName: string) {
    cy.get(ClientPageElements.btn).contains("Add New").click();
    cy.get(ClientPageElements.contactPersonName).type(randomName);
    cy.get(ClientPageElements.contactPersonLanguage).type("Italian{enter}");
    cy.get(ClientPageElements.contactPersonDepartment).type(randomName);
    cy.get(ClientPageElements.contactPersonRole).type(randomName);
    cy.get(ClientPageElements.contactPersonType).type("Instagram{enter}");
    cy.get(ClientPageElements.contactPersonValue).type("@tate");
    cy.get(ClientPageElements.contactTypeSubmitBtn).click();
    cy.get(ClientPageElements.contactPersonType).type("Facebook{enter}");
    cy.get(ClientPageElements.contactPersonValue).type("@tate");
    cy.get(ClientPageElements.contactTypeSubmitBtn).click();
    cy.get(ClientPageElements.contactPersonType).type("Viber{enter}");
    cy.get(ClientPageElements.contactPersonValue).type("+37443000000");
    cy.get(ClientPageElements.contactTypeSubmitBtn).click();
    cy.get(ClientPageElements.contactPersonType).type("Linkedin{enter}");
    cy.get(ClientPageElements.contactPersonValue).type("@tate");
    cy.get(ClientPageElements.contactTypeSubmitBtn).click();
    cy.get(ClientPageElements.contactPersonType).type("Fax{enter}");
    cy.get(ClientPageElements.contactPersonValue).type("+37443000000");
    cy.get(ClientPageElements.contactTypeSubmitBtn).click();
    cy.get(ClientPageElements.contactPersonType).type("Mobile{enter}");
    cy.get(ClientPageElements.contactPersonValue).type("+37443000000");
    cy.get(ClientPageElements.contactTypeSubmitBtn).click();
    cy.get(ClientPageElements.contactPersonType).type("Landline{enter}");
    cy.get(ClientPageElements.contactPersonValue).type("+37443000000");
    cy.get(ClientPageElements.contactTypeSubmitBtn).click();
    cy.get(ClientPageElements.contactPersonType).type("Email{enter}");
    cy.get(ClientPageElements.contactPersonValue).type("client@as.io");
    cy.get(ClientPageElements.contactTypeSubmitBtn).click();
    cy.get(ClientPageElements.addBtn).click();
  }
  editContactInfo() {
    cy.get(ClientPageElements.contactInfoEditBtn).click();
    cy.get(ClientPageElements.contactPersonType).type("Instagram{enter}");
    cy.get(ClientPageElements.contactPersonValue).type("@tate");
    cy.get(ClientPageElements.contactTypeSubmitBtn).click();
    cy.get(ClientPageElements.contactPersonType).type("Facebook{enter}");
    cy.get(ClientPageElements.contactPersonValue).type("@tate");
    cy.get(ClientPageElements.contactTypeSubmitBtn).click();
    cy.get(ClientPageElements.contactPersonType).type("Viber{enter}");
    cy.get(ClientPageElements.contactPersonValue).type("+37443000000");
    cy.get(ClientPageElements.contactTypeSubmitBtn).click();
    cy.get(ClientPageElements.contactPersonType).type("Linkedin{enter}");
    cy.get(ClientPageElements.contactPersonValue).type("@tate");
    cy.get(ClientPageElements.contactTypeSubmitBtn).click();
    cy.get(ClientPageElements.contactPersonType).type("Fax{enter}");
    cy.get(ClientPageElements.contactPersonValue).type("+37443000000");
    cy.get(ClientPageElements.contactTypeSubmitBtn).click();
    cy.get(ClientPageElements.contactPersonType).type("Mobile{enter}");
    cy.get(ClientPageElements.contactPersonValue).type("+37443000000");
    cy.get(ClientPageElements.contactTypeSubmitBtn).click();
    cy.get(ClientPageElements.contactPersonType).type("Landline{enter}");
    cy.get(ClientPageElements.contactPersonValue).type("+37443000000");
    cy.get(ClientPageElements.contactTypeSubmitBtn).click();
    cy.get(ClientPageElements.contactPersonType).type("Email{enter}");
    cy.get(ClientPageElements.contactPersonValue).type("client@as.io");
    cy.get(ClientPageElements.contactTypeSubmitBtn).click();
    cy.get(ClientPageElements.addBtn).click();
  }
  editContactPerson() {
    cy.get(ClientPageElements.contactPersonEditIcon).click();
    cy.get(ClientPageElements.contactPersonType).type("Instagram{enter}");
    cy.get(ClientPageElements.contactPersonValue).type("@tate");
    cy.get(ClientPageElements.contactTypeSubmitBtn).click();
    cy.get(ClientPageElements.contactPersonType).type("Facebook{enter}");
    cy.get(ClientPageElements.contactPersonValue).type("@tate");
    cy.get(ClientPageElements.contactTypeSubmitBtn).click();
    cy.get(ClientPageElements.addBtn).click();
  }
  deleteContactPerson() {
    cy.get(ClientPageElements.ContactPersonDeleteIcon).click();
    cy.get(ClientPageElements.btn).contains("Delete").click();
  }
}
export default ClientPage;
