const PurchaseOrderPageElements = {
  tabs: ".ant-col.ant-col-24.css-rrh4gt",
  btn: 'button[type="button"]',
  addBtn: ".ant-row > .ant-btn-primary",
  mainTableRows: "tr.ant-table-row",
  statusMenuItem: "li[role='menuitem']",
  itemsCheckbox: ".ant-checkbox-input",
  supplierDropdown: "#supplierId",
  antSelectDropdown: ".ant-select-dropdown",
  supplierModal: ".ant-modal-content",
  datePicker: "#shippingDate",
  statusBadge:
    ".ant-row-space-between > :nth-child(1) > .ant-row > .ant-typography",
  eyeIcon: ".ant-table-cell-fix-right ",
  calendar: ".ant-picker-body",
  calendarNextBtn: ".ant-picker-header-next-btn",
  calendarNowBtn: ".ant-picker-now-btn",
  supplierOfferBtn: "",
  destinationRegion: "#destinationRegion",
  destinationSubRegion: "#destinationSubRegion",
  sourceDropdown: "#source",
  contactPersonDropdown: "#contactPersonId",
  offerNumberField: "#offerNumber",
  emlFileUpload: "#emailFile",
  attachmentUpload: "#file",
  attachmentType: ".ant-select-selection-search-input",
  attachmentTypeSubmitBtn:
    ".ant-btn.css-rrh4gt.ant-btn-primary.ant-btn-color-primary.ant-btn-variant-solid.ant-btn-icon-only",
  openEye: ".ant-table-cell-fix-right > .ant-btn > .ant-btn-icon",
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
  addRowBtn: ".ant-btn > :nth-child(2)",
  itemDescription: "#description",
  itemQuantity: "#quantity",
  itemPurchaseRequestPrice: "#purchasePricePerPiece",
  itemDiscount: "#discount",
  itemShippingCost: "#shippingCost",
  itemNotes: "#notes",
  //update
  settingsIcon: ".ant-row-bottom > .ant-btn > .ant-btn-icon > svg",
  settingsCheckbox:
    "body > div:nth-child(3) > div > div > ul > li:nth-child(1) > span > div",
  //update
  itemThreeDots:
    "#root > div > div > div > div > div.ant-col.styles_content_bar__XHMPB.css-rrh4gt > div > div:nth-child(2) > div > div:nth-child(2) > div.ant-table-wrapper.styles_table__8Mrw8.css-rrh4gt > div > div > div > div > div > table > tbody > tr:nth-child(2) > td.ant-table-cell.ant-table-cell-fix-left.ant-table-cell-fix-left-last > button",
  itemDotMenu:
    ".ant-dropdown-menu.ant-dropdown-menu-root.ant-dropdown-menu-vertical.ant-dropdown-menu-light.custom-dropdown-menu.css-rrh4gt",
  //update
  itemUploadFIle:
    "body > div:nth-child(4) > div > div.ant-modal-wrap.ant-modal-centered > div > div:nth-child(1) > div > div.ant-modal-body > form > div > div > div:nth-child(1) > div > div > div.ant-col.ant-form-item-control.css-rrh4gt > div > div > span > div.css-rrh4gt.ant-upload.ant-upload-drag > span > div > div",
  itemTable: ".ant-table-content",
  popupPublishBtn: ".ant-row > .ant-btn-primary",
  parentDeal: "a.underline-button",
  currentStatus:
    "[style='margin-left: -4px; margin-right: -4px;'] > :nth-child(1) > .ant-row",
  supplierCardPrice:
    "span.ant-typography.font-size-30.font-weight-700.css-rrh4gt",
  contactPersonDropdownMenuItems: ":nth-child(6) > .ant-select-dropdown",
  brandSectionCollapsed: ".ant-collapse-header",
  header: ".ant-typography.reset-title.font-weight-800.center.css-rrh4gt",
  priceWindow: "ant-drawer-body",
};

class PurchaseOrdersPage {
  openAttachmentsTab() {
    cy.contains("Attachments").click();
  }
  clickAddNewBtn() {
    cy.get(PurchaseOrderPageElements.addBtn).click();
  }
  clickSendBtn() {
    cy.get(PurchaseOrderPageElements.btn).contains("Send Order").click();
    cy.wait(1000);
  }
  clickCreateSupplierOfferBtn() {
    cy.get(PurchaseOrderPageElements.supplierOfferBtn).click();
  }
  changeStatusToConfirmedWithShippingDate(status: string) {
    cy.get(PurchaseOrderPageElements.btn).contains("Change Status").click();
    cy.get(PurchaseOrderPageElements.statusMenuItem).contains(status).click();
    cy.get(PurchaseOrderPageElements.datePicker).click();
    cy.get(PurchaseOrderPageElements.calendarNowBtn).click();
    cy.get(PurchaseOrderPageElements.btn).contains("Save").click();
    cy.get(PurchaseOrderPageElements.statusBadge).eq(0).contains(status);
  }
  createPurchaseOrder(randomRecord: string) {
    const prefix = randomRecord.slice(0, 7);
    cy.get(PurchaseOrderPageElements.addBtn).click();
    cy.wait(1000);
    cy.get(PurchaseOrderPageElements.itemsCheckbox).eq(2).click();
    //cy.get(PurchaseOrderPageElements.itemsCheckbox).eq(3).click();
    cy.get(PurchaseOrderPageElements.btn).contains("Create Order").click();
    cy.get(PurchaseOrderPageElements.supplierModal).within(() => {
      cy.get(PurchaseOrderPageElements.supplierDropdown)
        .click()
        .should("be.visible")
        .click()
        .type(prefix + "{enter}");
    });
    cy.get(PurchaseOrderPageElements.btn).contains("Save").click();
  }
  clickRequestPrice() {
    cy.get(PurchaseOrderPageElements.addBtn).click();
    cy.get(PurchaseOrderPageElements.itemsCheckbox).eq(2).click();
    cy.get(PurchaseOrderPageElements.btn).contains("Request Price").click();
    cy.wait(1000);
  }
  //Update with the statuses
  openPurchaseOrderDetailsPage(status: string) {
    const targetStatus = status;

    cy.get("tr.ant-table-row")
      .filter((_, row) => {
        const statusText = row
          .querySelectorAll("td")[3] // ✅ Status is column index 3
          ?.innerText.replace(/\s+/g, " ")
          .trim()
          .toLowerCase();

        return statusText === targetStatus.toLowerCase();
      })
      .first()
      .then(($row) => {
        if ($row.length) {
          cy.wrap($row)
            .find(PurchaseOrderPageElements.eyeIcon) // last column action button
            .first()
            .scrollIntoView()
            .click();

          cy.log(`Opened row with status "${targetStatus}"`);
        } else {
          cy.log(`No row found with status "${targetStatus}"`);
        }
      });
  }
  generatePdf() {
    cy.get(PurchaseOrderPageElements.btn).contains("Generate PDF").click();
  }
  changeOrdersStatus(status: string) {
    cy.get(PurchaseOrderPageElements.btn).contains("Change Status").click();
    cy.get(PurchaseOrderPageElements.statusMenuItem).contains(status).click();
    cy.get(PurchaseOrderPageElements.statusBadge).eq(0).contains(status);
  }
  clickCheckbox() {
    cy.get(PurchaseOrderPageElements.itemsCheckbox).eq(2).click();
  }
  createSupplierOffer(randomRecord: string) {
    const prefix = randomRecord.slice(0, 8);
    cy.get(PurchaseOrderPageElements.btn)
      .contains("Create Supplier Offer")
      .click();
    cy.get(PurchaseOrderPageElements.supplierModal).within(() => {
      cy.get(PurchaseOrderPageElements.supplierDropdown)
        .should("be.visible")
        .click()
        .wait(1000)
        .type(prefix + "{enter}");
    });
    cy.get(PurchaseOrderPageElements.contactPersonDropdown)
      .should("be.visible")
      .click()
      .type(prefix);
    cy.get(PurchaseOrderPageElements.contactPersonDropdownMenuItems)
      .contains(prefix)
      .eq(0)
      .click();
    cy.get(PurchaseOrderPageElements.sourceDropdown).type("Price list{enter}");
    cy.get(PurchaseOrderPageElements.offerNumberField).type(prefix);
    cy.get(PurchaseOrderPageElements.attachmentUpload).attachFile(
      "AutomatedFile.pdf"
    );
    cy.get(PurchaseOrderPageElements.destinationRegion)
      .should("be.visible")
      .click()
      .type("Africa{enter}");
    cy.get(PurchaseOrderPageElements.destinationSubRegion)
      .should("be.visible")
      .click()
      .type("Central Africa{enter}");
    cy.get(PurchaseOrderPageElements.addBtn).contains("Add").click();
  } //update
  addLeadWeight() {
    cy.wait(1000);
    cy.get(PurchaseOrderPageElements.minLeadTime).type("1{enter}");
    cy.get("body").click(0, 0).wait(1000);
    cy.get(PurchaseOrderPageElements.maxLeadTime).clear().type("3{enter}");
    cy.get("body").click(0, 0).wait(1000);
    cy.get(PurchaseOrderPageElements.leadDayWeek).contains("Day").click();
    cy.get("body").click(0, 0).wait(1000);
    cy.get(PurchaseOrderPageElements.weightField).clear().type("34{enter}");
    cy.get("body").click(0, 0).wait(1000);
  }
  addShippingCost() {
    cy.get(PurchaseOrderPageElements.shippingCost).clear().type("10{enter}");
    cy.get("body").click(0, 0).wait(1000);
    cy.get(PurchaseOrderPageElements.packagingCost).clear().type("10{enter}");
    cy.get("body").click(0, 0).wait(1000);
  }
  addFeeAndCharges() {
    cy.get(PurchaseOrderPageElements.dutyFee).clear().type("10{enter}");
    cy.get("body").click(0, 0).wait(1000);
    cy.get(PurchaseOrderPageElements.bankTransferFee).clear().type("10{enter}");
    cy.get("body").click(0, 0).wait(1000);
    cy.get(PurchaseOrderPageElements.clearanceFee).clear().type("10{enter}");
    cy.get("body").click(0, 0).wait(1000);
    cy.get(PurchaseOrderPageElements.minOrderFee).clear().type("10{enter}");
    cy.get("body").click(0, 0).wait(1000);
  }
  checkItemsAddedToTheTable(item: string) {
    const prefix = item.slice(0, 7);
    cy.get(PurchaseOrderPageElements.brandSectionCollapsed).click();
    cy.get(PurchaseOrderPageElements.itemTable).contains(prefix);
  }
  clickBrandSection() {
    cy.wait(1000);
    cy.get(PurchaseOrderPageElements.brandSectionCollapsed)
      .scrollIntoView()
      .click();
  }
  addItemToTheTable(
    randomRecord: string,
    randomPrice: number,
    randomQuantity: number
  ) {
    const prefix = randomRecord.slice(0, 7);
    cy.get(PurchaseOrderPageElements.addRowBtn)
      .scrollIntoView()
      .wait(1000)
      .click();
    cy.get(PurchaseOrderPageElements.itemSku).should("be.visible").type(prefix);
    cy.get(PurchaseOrderPageElements.antSelectDropdown)
      .contains(prefix)
      .click()
      .wait(1000);
    cy.get(PurchaseOrderPageElements.itemQuantity).eq(0).click();
    cy.get(PurchaseOrderPageElements.itemQuantity)
      .eq(0)
      .type(randomQuantity + "{enter}");
    cy.get("body").click(0, 0).wait(1000);
    cy.get(PurchaseOrderPageElements.itemPurchaseRequestPrice).eq(0).click();
    cy.get(PurchaseOrderPageElements.itemPurchaseRequestPrice)
      .eq(0)
      .type(randomPrice + "{enter}");
    cy.get("body").click(0, 0).wait(1000);
  }
  editItemOnTheTable(randomPrice: number, randomQuantity: number) {
    cy.get(PurchaseOrderPageElements.header)
      .should("be.visible")
      .contains("Update Supplier Offer");
    cy.get(PurchaseOrderPageElements.itemQuantity).eq(0).click();
    cy.get(PurchaseOrderPageElements.itemQuantity)
      .eq(0)
      .type(randomQuantity + "{enter}");
    cy.get("body").click(0, 0).wait(1000);
    cy.get(PurchaseOrderPageElements.itemPurchaseRequestPrice).eq(0).click();
    cy.get(PurchaseOrderPageElements.itemPurchaseRequestPrice)
      .eq(0)
      .type(randomPrice + "{enter}");
    cy.get("body").click(0, 0).wait(1000);
  }
  verifyLeadShippingFeesDataIsSaved() {
    cy.reload();
    cy.wait(2000); // give time for the page to load and data to restore

    // Lead weight fields
    cy.get(PurchaseOrderPageElements.minLeadTime).should("have.value", "1");
    cy.get(PurchaseOrderPageElements.maxLeadTime).should("have.value", "3");
    cy.get(PurchaseOrderPageElements.leadDayWeek).should("contain.text", "Day");
    cy.get(PurchaseOrderPageElements.weightField).should("have.value", "34");

    // Shipping cost fields
    cy.get(PurchaseOrderPageElements.shippingCost).should("have.value", "10");
    cy.get(PurchaseOrderPageElements.packagingCost).should("have.value", "10");

    // Fee and charge fields
    cy.get(PurchaseOrderPageElements.dutyFee).should("have.value", "10");
    cy.get(PurchaseOrderPageElements.bankTransferFee).should(
      "have.value",
      "10"
    );
    cy.get(PurchaseOrderPageElements.clearanceFee).should("have.value", "10");
    cy.get(PurchaseOrderPageElements.minOrderFee).should("have.value", "10");
  }
  checkItemsPricesUpdatedOnTheTable(
    randomPrice: number,
    randomQuantity: number
  ) {
    cy.get(PurchaseOrderPageElements.itemQuantity).contains(randomQuantity);
    cy.get(PurchaseOrderPageElements.itemPurchaseRequestPrice).contains(
      randomPrice
    );
  }
  publishSupplierOffer() {
    cy.get(PurchaseOrderPageElements.btn)
      .contains("Publish", { timeout: 20000 })
      .click();
    cy.get(PurchaseOrderPageElements.supplierModal, { timeout: 20000 })
      .should("be.visible")
      .within(() => {
        // Also wait until Publish button is visible & enabled
        cy.contains(PurchaseOrderPageElements.btn, "Publish", {
          timeout: 10000,
        })
          .should("be.visible")
          .and("not.be.disabled")
          .click();
      });
  }
  checkButtonDisabled() {
    cy.get(PurchaseOrderPageElements.btn);
    cy.contains("button", "Create Supplier Offer").should("be.disabled");
  }
}
export default PurchaseOrdersPage;
