const PurchasePageElements = {
  purchasesPage: 'a[href="/admin/purchase-request"]',
  tabs: ".ant-col.ant-col-24.css-rrh4gt",
  btn: 'button[type="button"]',
  addBtn: '[style="row-gap: 20px;"] > .ant-col > .ant-row > .ant-btn-primary',
  supplierDropdown: "#supplierId",
  sourceDropdown: "#source",
  contactPersonDropdown: "#contactPersonId",
  offerNumberField: "#offerNumber",
  emlFileUpload: "#emailFile",
  attachmentUpload: "#file",
  attachmentType: "#rc_select_4",
  supplierCard: ".ant-col.ant-col-24.styles_main__VEyp6.css-rrh4gt",
  generalIcon: ".ant-btn-icon",
  attachmentTypeSubmitBtn:
    ".ant-btn.css-rrh4gt.ant-btn-primary.ant-btn-color-primary.ant-btn-variant-solid.ant-btn-icon-only",
  purchaseOpenEye: ".ant-table-cell-fix-right > .ant-btn > .ant-btn-icon",
  minLeadTime: "#shippingInformation_leadTimeMin",
  maxLeadTime: "#shippingInformation_leadTimeMax",
  leadDayWeek: "#shippingInformation_leadTime",
  weightField: "#shippingInformation_totalWeight",
  shippingCost: "#shippingInformation_shippingCoast",
  packagingCost: "#shippingInformation_packagingCoast",
  dutyFee: "#fee_duty",
  bankTransferFee: "#fee_bankTransfer",
  clearanceFee: "#fee_customsClearance",
  minOrderFee: "#fee_minimumOrder",
  itemSku: "#sku",
  clickArea: ".ant-col.ant-col-12.css-rrh4gt",
};
class PurchasePage {
  openPurchasePage() {
    cy.get(PurchasePageElements.purchasesPage).click();
  }
  openPurchaseDetailsPage() {
    cy.get(PurchasePageElements.purchaseOpenEye).eq(0).click();
  }
  openSupplierOffersTab() {
    cy.get(PurchasePageElements.tabs).contains("Supplier Offers").click();
  }
  clickAddBtn() {
    cy.get(PurchasePageElements.btn).contains("Add New").click();
  }
  createSupplierOffer() {
    cy.get(PurchasePageElements.btn).contains("Add New").click();
    cy.get(PurchasePageElements.emlFileUpload).attachFile(
      "EmlFileAutotest.eml"
    );
    cy.get(PurchasePageElements.supplierDropdown).type(
      "Purchase Supplier{enter}"
    );
    cy.get(PurchasePageElements.contactPersonDropdown).type(
      "Purchase Contact{enter}"
    );
    cy.get(PurchasePageElements.sourceDropdown).type("Email{enter}");
    cy.get(PurchasePageElements.offerNumberField).type("AutoTest-1233");
    cy.get(PurchasePageElements.attachmentUpload).attachFile(
      "AutomatedFile.pdf"
    );
    cy.get(PurchasePageElements.attachmentType).type("Option 1{enter}");
    cy.get(PurchasePageElements.attachmentTypeSubmitBtn).click();
    cy.get(PurchasePageElements.addBtn).click();
  } //update
  addLeadWeight() {
    cy.get(PurchasePageElements.minLeadTime).clear().type("1{enter}");
    cy.get("body").click(0, 0).wait(1000);
    cy.get(PurchasePageElements.maxLeadTime).clear().type("3{enter}");
    cy.get("body").click(0, 0).wait(1000);
    cy.get(PurchasePageElements.leadDayWeek).contains("Day").click();
    cy.get("body").click(0, 0).wait(1000);
    cy.get(PurchasePageElements.weightField).clear().type("34{enter}");
    cy.get("body").click(0, 0).wait(1000);
  }
  addShippingCost() {
    cy.get(PurchasePageElements.shippingCost).clear().type("10{enter}");
    cy.get("body").click(0, 0).wait(1000);
    cy.get(PurchasePageElements.packagingCost).clear().type("10{enter}");
    cy.get("body").click(0, 0).wait(1000);
  }
  addFeeAndCharges() {
    cy.get(PurchasePageElements.dutyFee).clear().type("10{enter}");
    cy.get("body").click(0, 0).wait(1000);
    cy.get(PurchasePageElements.bankTransferFee).clear().type("10{enter}");
    cy.get("body").click(0, 0).wait(1000);
    cy.get(PurchasePageElements.clearanceFee).clear().type("10{enter}");
    cy.get("body").click(0, 0).wait(1000);
    cy.get(PurchasePageElements.minOrderFee).clear().type("10{enter}");
    cy.get("body").click(0, 0).wait(1000);
  }
  addItemToTheTable() {
    cy.get(PurchasePageElements.btn).contains("Add Row").click();
    cy.get(PurchasePageElements.attachmentType).type("Supplier Offer{enter}");
  }
  deleteSupplierOffer() {
    cy.get(PurchasePageElements.supplierCard)
      .first()
      .find(PurchasePageElements.generalIcon)
      .eq(1)
      .click();
    cy.get(PurchasePageElements.btn).contains("Delete").click();
  }
  openSupplierOffer() {
    cy.get(PurchasePageElements.btn).contains("View Offer").click();
  }
}
export default PurchasePage;
