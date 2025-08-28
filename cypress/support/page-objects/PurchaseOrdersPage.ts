const PurchaseOrderPageElements = {
  purchaseOrderPage: 'a[href="/admin/purchase-order"]',
  tabs: ".ant-col.ant-col-24.css-rrh4gt",
  btn: 'button[type="button"]',
  addBtn: ".ant-row > .ant-btn-primary",
  openEye: ".ant-table-cell-fix-right > .ant-btn > .ant-btn-icon",
  currentStatus:
    "[style='margin-left: -4px; margin-right: -4px;'] > :nth-child(1) > .ant-row",
  mainTableRows: "tr.ant-table-row",
  statusMenuItem: "li[role='menuitem']",
  itemsCheckbox: ".ant-checkbox-input",
  supplierDropdown: "#supplierId",
  antSelectDropdown: ".ant-select-dropdown",
  supplierModal: ".ant-modal-content",
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
  createPurchaseOrder(randomRecord: string) {
    const prefix = randomRecord.slice(0, 7);
    cy.get(PurchaseOrderPageElements.addBtn).click();
    cy.wait(1000);
    cy.get(PurchaseOrderPageElements.itemsCheckbox).eq(2).click();
    cy.get(PurchaseOrderPageElements.itemsCheckbox).eq(3).click();
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
  openPurchaseOrderDetailsPage() {
    const targetStatus = "Pending Payment";

    cy.get("tr.ant-table-row")
      .filter((_, row) => {
        const statusText = row
          .querySelectorAll("td")[6] // adjust index if status column changes
          ?.innerText.replace(/\s+/g, " ")
          .trim()
          .toLowerCase();
        return statusText === targetStatus.toLowerCase();
      })
      .first()
      .then(($row) => {
        if ($row.length) {
          cy.wrap($row)
            .find("button") // action button at the end
            .first()
            .scrollIntoView()
            .click({ force: true });

          cy.log(`Opened row with status "${targetStatus}"`);
        } else {
          cy.log(`No row found with status "${targetStatus}"`);
        }
      });
  }
  changeOrdersStatus(status: string) {
    cy.get(PurchaseOrderPageElements.btn).contains("Change Status").click();
    cy.get(PurchaseOrderPageElements.statusMenuItem).contains(status).click();
  }
}
export default PurchaseOrdersPage;
