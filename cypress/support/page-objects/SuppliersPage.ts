import generalTexts from "../generalTexts";

const SupplierPageElements = {
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
  openEye: ".ant-table-cell-fix-right > .ant-btn > .ant-btn-icon",
  contactInfoEditBtn: "button[title='Edit']",
  contactPersonEditIcon:
    ":nth-child(1) > .margin-b-20 > [style='row-gap: 4px;'] > :nth-child(1) > .ant-row-space-between > :nth-child(2) > .ant-row > :nth-child(2)",
  ContactPersonDeleteIcon:
    ":nth-child(1) > .margin-b-20 > [style='row-gap: 4px;'] > :nth-child(1) > .ant-row-space-between > :nth-child(2) > .ant-row > :nth-child(1) > .ant-btn-icon > svg",
  websiteField: "#webSite",
  verifiedCheckbox: ".ant-checkbox-label > .ant-typography",
  antDropDown: ".ant-select-dropdown",
  antSelectItem: ".ant-select-item",
};
class SupplierPage {
  openSupplierDetailsPage() {
    cy.get(SupplierPageElements.openEye).eq(0).click();
  }
  addNewSupplier(randomName: string) {
    const country = generalTexts.getRandomCountry(); // pick ONCE
    const language = generalTexts.getRandomLanguage(); // pick ONCE
    cy.get(SupplierPageElements.btn).contains("Add New").click();
    cy.get(SupplierPageElements.supplierName)
      .should("be.visible")
      .type(randomName);
    cy.get(SupplierPageElements.websiteField)
      .should("be.visible")
      .type("example.com");
    // Main Language
    cy.get(SupplierPageElements.mainLanguage)
      .should("be.visible")
      .type(language);
    cy.get(SupplierPageElements.antDropDown)
      .should("be.visible")
      .find(SupplierPageElements.antSelectItem)
      .contains(language)
      .should("be.visible")
      .click();
    //Supplier Cuuntry
    cy.get(SupplierPageElements.supplierCountry)
      .should("be.visible")
      .type(country);
    cy.get(SupplierPageElements.antDropDown)
      .find(SupplierPageElements.antSelectItem)
      .contains(country)
      .should("be.visible")
      .click();
    // Supplier Type
    cy.get(SupplierPageElements.supplierType)
      .should("be.visible")
      .type("DISTRIBUTOR");
    cy.get(SupplierPageElements.antDropDown)
      .should("be.visible")
      .find(SupplierPageElements.antSelectItem)
      .contains("DISTRIBUTOR")
      .should("be.visible")
      .click();
    // Supplier Industry
    cy.get(SupplierPageElements.supplierIndustry)
      .should("be.visible")
      .type("Retail & E-commerce");
    cy.get(SupplierPageElements.antDropDown)
      .should("be.visible")
      .find(SupplierPageElements.antSelectItem)
      .contains("Retail & E-commerce")
      .click();
    cy.get(SupplierPageElements.verifiedCheckbox).click();
    cy.get(SupplierPageElements.addBtn).contains(/^Add$/).click();
    // Verification
    cy.contains(randomName, { timeout: 5000 }).should("exist");
  }
  addNewContactPerson(randomName: string) {
    const language = generalTexts.getRandomLanguage(); // pick ONCE
    cy.get(SupplierPageElements.btn).contains("Add New").click();
    cy.get(SupplierPageElements.contactPersonName).type(randomName);
    cy.get(SupplierPageElements.contactPersonLanguage).type(
      language + "{enter}"
    );
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
