const SupplierPageElements = {
  suppliersPage: 'a[href="/admin/suppliers"]',
  btn: 'button[type="button"]',
  addBtn: '[style="row-gap: 20px;"] > .ant-col > .ant-row > .ant-btn-primary',
  supplierName: "#name",
  supplierCountry: "#mainCountryId",
  supplierIndustry: "#industryId",
  supplierType: "#type",
  contactPersonName: "#fullName",
  mainLanguage: "#mainLanguageId",
  contactPersonLanguage: "#languageId",
  contactPersonDepartment: "#department",
  contactPersonRole: "#role",
  contactPersonType: "#type",
  contactPersonValue: "#value",
  contactTypeSubmitBtn:
    ".ant-btn.css-rrh4gt.ant-btn-primary.ant-btn-color-primary.ant-btn-variant-solid.ant-btn-icon-only",
  supplierOpenEye: ".ant-table-cell-fix-right > .ant-btn > .ant-btn-icon",
  contactInfoEditBtn: "button[title='Edit']",
  contactPersonEditIcon:
    ":nth-child(1) > .margin-b-20 > [style='row-gap: 4px;'] > :nth-child(1) > .ant-row-space-between > :nth-child(2) > .ant-row > :nth-child(2)",
  ContactPersonDeleteIcon:
    ":nth-child(1) > .margin-b-20 > [style='row-gap: 4px;'] > :nth-child(1) > .ant-row-space-between > :nth-child(2) > .ant-row > :nth-child(1) > .ant-btn-icon > svg",
  websiteField: "#webSite",
  verifiedCheckbox: ".ant-checkbox-label > .ant-typography",
};
class SupplierPage {
  openSupplierPage() {
    cy.get(SupplierPageElements.suppliersPage).click();
  }
  openSupplierDetailsPage() {
    cy.get(SupplierPageElements.supplierOpenEye).eq(0).click();
  }

  addNewSupplier(randomName: string) {
    cy.get(SupplierPageElements.btn).contains("Add New").click();
    cy.get(SupplierPageElements.supplierName).type(randomName);
    cy.get(SupplierPageElements.websiteField).type("example.com");
    cy.get(SupplierPageElements.mainLanguage).type("Arabic{enter}");
    cy.get(SupplierPageElements.supplierType).type("DISTRIBUTOR{enter}");
    cy.get(SupplierPageElements.supplierIndustry).type("Fintech{enter}");
    cy.get(SupplierPageElements.supplierCountry).type("Brazil{enter}");
    cy.get(SupplierPageElements.verifiedCheckbox).click();
    cy.get(SupplierPageElements.addBtn).click();
  }
  addNewContactPerson(randomName: string) {
    cy.get(SupplierPageElements.btn).contains("Add New").click();
    cy.get(SupplierPageElements.contactPersonName).type(randomName);
    cy.get(SupplierPageElements.contactPersonLanguage).type("Italian{enter}");
    cy.get(SupplierPageElements.contactPersonDepartment).type(randomName);
    cy.get(SupplierPageElements.contactPersonRole).type(randomName);
    cy.get(SupplierPageElements.contactPersonType).type("Instagram{enter}");
    cy.get(SupplierPageElements.contactPersonValue).type("@tate");
    cy.get(SupplierPageElements.contactTypeSubmitBtn).click();
    cy.get(SupplierPageElements.contactPersonType).type("Facebook{enter}");
    cy.get(SupplierPageElements.contactPersonValue).type("@tate");
    cy.get(SupplierPageElements.contactTypeSubmitBtn).click();
    cy.get(SupplierPageElements.contactPersonType).type("Viber{enter}");
    cy.get(SupplierPageElements.contactPersonValue).type("+37443000000");
    cy.get(SupplierPageElements.contactTypeSubmitBtn).click();
    cy.get(SupplierPageElements.contactPersonType).type("Linkedin{enter}");
    cy.get(SupplierPageElements.contactPersonValue).type("@tate");
    cy.get(SupplierPageElements.contactTypeSubmitBtn).click();
    cy.get(SupplierPageElements.contactPersonType).type("Fax{enter}");
    cy.get(SupplierPageElements.contactPersonValue).type("+37443000000");
    cy.get(SupplierPageElements.contactTypeSubmitBtn).click();
    cy.get(SupplierPageElements.contactPersonType).type("Mobile{enter}");
    cy.get(SupplierPageElements.contactPersonValue).type("+37443000000");
    cy.get(SupplierPageElements.contactTypeSubmitBtn).click();
    cy.get(SupplierPageElements.contactPersonType).type("Landline{enter}");
    cy.get(SupplierPageElements.contactPersonValue).type("+37443000000");
    cy.get(SupplierPageElements.contactTypeSubmitBtn).click();
    cy.get(SupplierPageElements.contactPersonType).type("Email{enter}");
    cy.get(SupplierPageElements.contactPersonValue).type("supplier@as.io");
    cy.get(SupplierPageElements.contactTypeSubmitBtn).click();
    cy.get(SupplierPageElements.addBtn).click();
  }
  editContactPerson() {
    cy.get(SupplierPageElements.contactPersonEditIcon).click();
    cy.get(SupplierPageElements.contactPersonType).type("Instagram{enter}");
    cy.get(SupplierPageElements.contactPersonValue).type("@tate");
    cy.get(SupplierPageElements.contactTypeSubmitBtn).click();
    cy.get(SupplierPageElements.contactPersonType).type("Facebook{enter}");
    cy.get(SupplierPageElements.contactPersonValue).type("@tate");
    cy.get(SupplierPageElements.contactTypeSubmitBtn).click();
    cy.get(SupplierPageElements.addBtn).click();
  }
  deleteContactPerson() {
    cy.get(SupplierPageElements.ContactPersonDeleteIcon).click();
    cy.get(SupplierPageElements.btn).contains("Delete").click();
  }
}
export default SupplierPage;
