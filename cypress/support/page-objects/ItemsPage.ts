const ItemsPageElements = {
  itemsPage: 'a[href="/admin/items"]',
  btn: 'button[type="button"]',
  addBtn: '[style="row-gap: 20px;"] > .ant-col > .ant-row > .ant-btn-primary',
  itemSku: "#itemSKU",
  itemsCountry: "#countryId",
  itemsIndustry: "#industryId",
  mainLanguage: "#mainLanguageId",
  contactPersonLanguage: "#languageId",
  openEye: ".ant-table-cell-fix-right > .ant-btn > .ant-btn-icon",
  manufacturerWebsiteField: "#manufacturerWebSiteUrl",
  verifiedCheckbox: ".ant-checkbox-label > .ant-typography",
  antDropDown: ".ant-select-dropdown",
  antSelectItem: ".ant-select-item",
  brandDropdown: "#brandId",
};
class ItemsPage {
  openItemsPage() {
    cy.get(ItemsPageElements.itemsPage).click();
  }
  openItemsDetailsPage() {
    cy.get(ItemsPageElements.openEye).eq(0).click();
  }
  addNewItems(randomRecord: string, randomName: string) {
    const prefix = randomRecord.slice(0, 8);
    cy.get(ItemsPageElements.btn).contains("Add New").click();
    cy.get(ItemsPageElements.itemSku).should("be.visible").type(randomName);
    cy.get(ItemsPageElements.brandDropdown).should("be.visible").type(prefix);
    cy.get(ItemsPageElements.antDropDown)
      .should("be.visible")
      .find(ItemsPageElements.antSelectItem)
      .contains(prefix)
      .click();
    cy.get(ItemsPageElements.addBtn).contains(/^Add$/).click();
    // Verification
    cy.contains(prefix, { timeout: 5000 }).should("exist");
  }
}
export default ItemsPage;
