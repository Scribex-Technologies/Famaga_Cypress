import { getRandomValues } from "crypto";

const DealsPageElements = {
  dealsPage: 'a[href="/admin/deals"]',
  tabs: ".ant-col.ant-col-24.css-rrh4gt",
  btn: 'button[type="button"]',
  addBtn: ".ant-row > .ant-btn-primary",
  brandPurchaseDropdown: "#relationBrand",
  supplierOffer: "#relationSupplierOffer",
  generalIcon: ".ant-btn-icon",
  dealsOpenEye: ".ant-table-cell-fix-right > .ant-btn > .ant-btn-icon",
  itemSku: "#sku",
  checkMarkToSubmit:
    ".ant-btn.css-rrh4gt.ant-btn-primary.ant-btn-color-primary.ant-btn-variant-solid.ant-btn-icon-only",
};
class DealsPage {
  openDealsPage() {
    cy.get(DealsPageElements.dealsPage).click();
  }
  openDealsDetailsPage() {
    cy.get(DealsPageElements.dealsOpenEye).eq(0).click();
  }
  openCommunicationTab() {
    cy.contains("Communication Hub").click();
  }
  openCommercialOfferTab() {
    cy.contains("Commercial Offers").click();
  }
  clickAddBtn() {
    cy.get(DealsPageElements.btn).contains("Add New").click();
  }
  addCommercialOffer() {
    cy.get(DealsPageElements.btn).contains("Add New").click();
    cy.get(DealsPageElements.brandPurchaseDropdown)
      .should("be.visible")
      .type("Brand for the Purchase");
    cy.contains("Brand for the Purchase").click();
    cy.get(DealsPageElements.supplierOffer)
      .should("be.visible")
      .type("Purchase Supplier");
    cy.contains("Purchase Supplier").click();
    cy.get(DealsPageElements.checkMarkToSubmit).click();
    cy.get(DealsPageElements.btn).contains("Add").click();
  }
}
export default DealsPage;
