import generalTexts from "../generalTexts";

const BrandPageElements = {
  btn: 'button[type="button"]',
  addBtn: '[style="row-gap: 20px;"] > .ant-col > .ant-row > .ant-btn-primary',
  brandName: "#name",
  brandCountry: "#countryId",
  brandIndustry: "#industryId",
  mainLanguage: "#mainLanguageId",
  contactPersonLanguage: "#languageId",
  openEye: ".ant-table-cell-fix-right > .ant-btn > .ant-btn-icon",
  manufacturerWebsiteField: "#manufacturerWebSiteUrl",
  verifiedCheckbox: ".ant-checkbox-label > .ant-typography",
  antDropDown: ".ant-select-dropdown",
  antSelectItem: ".ant-select-item",
};
class BrandPage {
  openBrandDetailsPage() {
    cy.get(BrandPageElements.openEye).eq(0).click();
  }
  addNewBrand(randomRecord: string) {
    const country = generalTexts.getRandomCountry() ?? ""; // pick ONCE, fallback to empty string
    cy.get(BrandPageElements.btn).contains("Add New").click();
    cy.get(BrandPageElements.brandName).should("be.visible").type(randomRecord);
    cy.get(BrandPageElements.manufacturerWebsiteField)
      .should("be.visible")
      .type("example.com");
    //Brand Country
    cy.get(BrandPageElements.brandCountry).should("be.visible").type(country);
    cy.get(BrandPageElements.antDropDown)
      .find(BrandPageElements.antSelectItem)
      .contains(country)
      .should("be.visible")
      .click();
    // Brand Industry
    cy.get(BrandPageElements.brandIndustry)
      .should("be.visible")
      .type("Retail & E-commerce");
    cy.get(BrandPageElements.antDropDown)
      .should("be.visible")
      .find(BrandPageElements.antSelectItem)
      .contains("Retail & E-commerce")
      .click();
    cy.get(BrandPageElements.addBtn).contains(/^Add$/).click();
    // Verification
    cy.contains(randomRecord, { timeout: 5000 }).should("exist");
  }
}
export default BrandPage;
