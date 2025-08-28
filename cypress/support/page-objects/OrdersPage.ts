const OrderPageElements = {
  orderPage: 'a[href="/admin/orders"]',
  tabs: ".ant-col.ant-col-24.css-rrh4gt",
  btn: 'button[type="button"]',
  addBtn: ".ant-row > .ant-btn-primary",
  openEye: ".ant-table-cell-fix-right > .ant-btn > .ant-btn-icon",
  currentStatus:
    "[style='margin-left: -4px; margin-right: -4px;'] > :nth-child(1) > .ant-row",
  mainTableRows: "tr.ant-table-row",
  statusMenuItem: "li[role='menuitem']",
};

class OrdersPage {
  openOrderPage() {
    cy.get(OrderPageElements.orderPage).click();
  }
  openAttachmentsTab() {
    cy.contains("Attachments").click();
  }
  //Update with the statuses
  openOrderDetailsPage() {
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
    cy.get(OrderPageElements.btn).contains("Change Status").click();
    cy.get(OrderPageElements.statusMenuItem).contains(status).click();
  }
}
export default OrdersPage;
