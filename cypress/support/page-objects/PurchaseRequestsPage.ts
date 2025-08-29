import { waitForDebugger } from "inspector";
import generalTexts from "../generalTexts";

const PurchasePageElements = {
  purchasesPage: 'a[href="/admin/purchase-request"]',
  tabs: ".ant-col.ant-col-24.css-rrh4gt",
  btn: 'button[type="button"]',
  addBtn: ".ant-row > .ant-btn-primary",
  supplierDropdown: "#supplierId",
  sourceDropdown: "#source",
  contactPersonDropdown: "#contactPersonId",
  offerNumberField: "#offerNumber",
  emlFileUpload: "#emailFile",
  attachmentUpload: "#file",
  attachmentType: ".ant-select-selection-search-input",
  supplierCard: ".ant-col.ant-col-24.styles_main__VEyp6.css-rrh4gt",
  generalIcon: ".ant-btn-icon",
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
  //update
  addRowBtn:
    "#root > div > div > div > div > div.ant-col.styles_content_bar__XHMPB.css-rrh4gt > div > div:nth-child(2) > div > div:nth-child(2) > div.ant-row.css-rrh4gt > button",
  itemDescription: "#description",
  itemQuantity: "//*[@id='quantity']",
  itemPurchaseRequestPrice: '//*[@id="purchasePricePerPiece"]',
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
  statusMenuItem: "li[role='menuitem']",
  currentStatus:
    "[style='margin-left: -4px; margin-right: -4px;'] > :nth-child(1) > .ant-row",
  mainTableRows: "tr.ant-table-row",
  supplierCardPrice:
    "span.ant-typography.font-size-30.font-weight-700.css-rrh4gt",
  contactPersonDropdownMenuItems: ":nth-child(6) > .ant-select-dropdown",
  antSelectDropdown: ".ant-select-dropdown",
};
class PurchasePage {
  openPurchasePage() {
    cy.get(PurchasePageElements.purchasesPage).click();
  }
  openPurchaseDetailsPage() {
    cy.get(PurchasePageElements.mainTableRows)
      .filter((_, row) => {
        // Normalize the status text
        const statusText = row
          .querySelectorAll("td")[8]
          ?.innerText.replace(/\s+/g, " ")
          .trim()
          .toLowerCase();
        return statusText === "new"; // change this if you want another status
      })
      .first()
      .then(($row) => {
        if ($row.length) {
          cy.wrap($row)
            .find("td")
            .last()
            .find("button")
            .scrollIntoView()
            .click();
          cy.log('Opened details for row with status "New"');
        } else {
          cy.log('No table row found with status "New"');
        }
      });
  }
  openSupplierOffersTab() {
    cy.get(PurchasePageElements.tabs).contains("Supplier Offers").click();
  }
  clickAddBtn() {
    cy.get(PurchasePageElements.btn).contains("Add New").click();
  }
  //update
  clickAllCheckbox() {
    cy.get(PurchasePageElements.settingsIcon).click();
    cy.get(PurchasePageElements.settingsCheckbox)
      .should("exist")
      .should("be.visible")
      .eq(0)
      .wait(1000)
      .click();
    cy.get("body").click(0, 0);
  }
  uploadFileToItem() {
    cy.get(PurchasePageElements.itemThreeDots).click();
    cy.get(PurchasePageElements.itemDotMenu).contains("Upload File").click();
    cy.get(PurchasePageElements.itemUploadFIle).attachFile("AutomatedFile.pdf");
    cy.get(PurchasePageElements.attachmentType)
      .eq(4)
      .click()
      .type("Option 1{enter}");
    cy.get(PurchasePageElements.attachmentTypeSubmitBtn).click();
    cy.get(PurchasePageElements.addBtn).click();
  }
  addSubstitute() {
    cy.get(PurchasePageElements.itemThreeDots).should("be.visible").click();
    cy.get(PurchasePageElements.itemDotMenu).contains("Add Substitute").click();
  }
  addAlternative() {
    cy.get(PurchasePageElements.itemThreeDots).should("be.visible").click();
    cy.get(PurchasePageElements.itemDotMenu)
      .contains("Add Alternative")
      .click();
  }
  markItemAvailable() {
    cy.get(PurchasePageElements.itemThreeDots).click();
    cy.get(PurchasePageElements.itemDotMenu)
      .contains("Add Alternative")
      .click();
    cy.get(PurchasePageElements.btn).contains("Confirm").click();
  }
  markItemNotAvailable() {
    cy.get(PurchasePageElements.itemThreeDots).click();
    cy.get(PurchasePageElements.itemDotMenu)
      .contains("Mark Not Available")
      .click();
    cy.get(PurchasePageElements.btn).contains("Confirm").click();
  }
  addShippingIfGlobalIsNotProvide() {
    cy.get(PurchasePageElements.itemShippingCost).type("10{enter}");
  }
  createSupplierOffer(randomRecord: string) {
    const prefix = randomRecord.slice(0, 7);
    cy.get(PurchasePageElements.btn).contains("Add New").click();
    cy.get(PurchasePageElements.supplierDropdown)
      .should("be.visible")
      .click()
      .type(prefix);
    cy.get(PurchasePageElements.antSelectDropdown)
      .contains(prefix)
      .eq(0)
      .click();
    cy.get(PurchasePageElements.contactPersonDropdown)
      .should("be.visible")
      .click()
      .type(prefix);
    cy.get(PurchasePageElements.contactPersonDropdownMenuItems)
      .contains(prefix)
      .eq(0)
      .click();
    cy.get(PurchasePageElements.sourceDropdown).type("Price list{enter}");
    cy.get(PurchasePageElements.offerNumberField).type(prefix);
    cy.get(PurchasePageElements.attachmentUpload).attachFile(
      "AutomatedFile.pdf"
    );
    cy.get(PurchasePageElements.attachmentType)
      .eq(4)
      .click()
      .type("Option 1{enter}");
    cy.get(PurchasePageElements.attachmentTypeSubmitBtn).click();
    cy.get(PurchasePageElements.addBtn).click();
  } //update
  addLeadWeight() {
    cy.wait(1000);
    cy.get(PurchasePageElements.minLeadTime).type("1{enter}");
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
  deleteSupplierOffer() {
    cy.get(PurchasePageElements.supplierCard).each(($card) => {
      const hasNA =
        $card
          .find("span.ant-typography.font-size-30.font-weight-700.css-rrh4gt")
          .text()
          .trim() === "N/A";

      if (hasNA) {
        cy.wrap($card).find(PurchasePageElements.generalIcon).eq(1).click();

        cy.get(PurchasePageElements.btn).contains("Delete").click();

        cy.log("Deleted first supplier card with N/A");

        // stop looping further
        return false;
      }
    });
  }
  openSupplierOffer() {
    cy.get(PurchasePageElements.btn).contains("View Offer").click();
  }
  checkItemsAddedToTheTable(item: string) {
    const prefix = item.slice(0, 7);
    cy.get(PurchasePageElements.itemTable).contains(prefix);
  }
  verifyLeadShippingFeesDataIsSaved() {
    cy.reload();
    cy.wait(2000); // give time for the page to load and data to restore

    // Lead weight fields
    cy.get(PurchasePageElements.minLeadTime).should("have.value", "1");
    cy.get(PurchasePageElements.maxLeadTime).should("have.value", "3");
    cy.get(PurchasePageElements.leadDayWeek).should("contain.text", "Day");
    cy.get(PurchasePageElements.weightField).should("have.value", "34");

    // Shipping cost fields
    cy.get(PurchasePageElements.shippingCost).should("have.value", "10");
    cy.get(PurchasePageElements.packagingCost).should("have.value", "10");

    // Fee and charge fields
    cy.get(PurchasePageElements.dutyFee).should("have.value", "10");
    cy.get(PurchasePageElements.bankTransferFee).should("have.value", "10");
    cy.get(PurchasePageElements.clearanceFee).should("have.value", "10");
    cy.get(PurchasePageElements.minOrderFee).should("have.value", "10");
  }
  verifyItemsTableFieldsSaved() {
    cy.reload();
    cy.get(PurchasePageElements.settingsIcon).click();
    cy.get(PurchasePageElements.settingsCheckbox).eq(0).click();
    cy.get(PurchasePageElements.itemDescription)
      .eq(0)
      .wait(1000)
      .should("have.value", "Automated Test does their best");
    cy.get(PurchasePageElements.itemQuantity).eq(0).should("have.value", "1");
    cy.get(PurchasePageElements.itemPurchaseRequestPrice)
      .eq(0)
      .should("have.value", "100");
    // cy.get(PurchasePageElements.itemDiscount).should(
    //  "have.value",
    //  "Note is Automated"
    // );
  }
  changePurchaseRequestStatus() {
    const clicks = 3; // number of status changes needed
    const waitTime = 1000; // milliseconds to wait between clicks

    for (let i = 0; i < clicks; i++) {
      cy.get(PurchasePageElements.btn).contains("Change Status").click();
      cy.get(PurchasePageElements.statusMenuItem).click();
      cy.wait(waitTime); // wait between clicks
    }
    // Verify final status
    cy.get(PurchasePageElements.currentStatus).contains("Sourced");
  }

  publishSupplierOffer() {
    cy.get(PurchasePageElements.btn).contains("Publish").click();
    cy.get(PurchasePageElements.popupPublishBtn).click();
  }
  addItemToTheTable(
    randomRecord: string,
    randomPrice: number,
    randomQuantity: number
  ) {
    const prefix = randomRecord.slice(0, 7);
    cy.get(PurchasePageElements.addRowBtn).scrollIntoView().wait(1000).click();
    cy.get(PurchasePageElements.itemSku).should("be.visible").type(prefix);
    cy.get(PurchasePageElements.antSelectDropdown)
      .contains(prefix)
      .click()
      .wait(1000);
    cy.xpath(PurchasePageElements.itemQuantity).eq(0).click();
    cy.xpath(PurchasePageElements.itemQuantity)
      .eq(0)
      .type(randomQuantity + "{enter}");
    cy.get("body").click(0, 0).wait(1000);
    cy.xpath(PurchasePageElements.itemPurchaseRequestPrice).eq(0).click();
    cy.xpath(PurchasePageElements.itemPurchaseRequestPrice)
      .eq(0)
      .type(randomPrice + "{enter}");
    cy.get("body").click(0, 0).wait(1000);
  }
  fillInItemsTableFields(randomPrice: number, randomQuantity: number) {
    cy.get(PurchasePageElements.itemDescription).eq(0).click();
    cy.get(PurchasePageElements.itemDescription).type(
      "Automated Test does their best{enter}"
    );
    cy.get("body").click(0, 0);
    cy.get(PurchasePageElements.itemDiscount).click();
    cy.get(PurchasePageElements.itemDiscount).type("1{enter}");
    cy.get(PurchasePageElements.itemTable).scrollTo("left");
    cy.get(PurchasePageElements.itemNotes).click();
    cy.get(PurchasePageElements.itemNotes).type("Note is Automated{enter}");
    cy.get("body").click(0, 0);
  }
  openParentDeal() {
    cy.get(PurchasePageElements.parentDeal).contains("Parent Deal").click();
  }
}
export default PurchasePage;
