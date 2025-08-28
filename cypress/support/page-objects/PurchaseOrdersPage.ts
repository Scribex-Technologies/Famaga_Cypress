const PurchaseOrderPageElements = {
  purchaseOrderPage: 'a[href="/admin/purchase-order"]',
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
};

class PurchaseOrdersPage {
  openPurchaseOrderPage() {
    cy.get(PurchaseOrderPageElements.purchaseOrderPage).click();
  }
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
}
export default PurchaseOrdersPage;
