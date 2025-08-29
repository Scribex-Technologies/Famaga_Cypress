const DealsPageElements = {
  dealsPage: 'a[href="/admin/deals"]',
  tabs: ".ant-col.ant-col-24.css-rrh4gt",
  btn: 'button[type="button"]',
  addBtn: ".ant-row > .ant-btn-primary",
  brandPurchaseDropdown: "#relationBrand",
  supplierOffer: "#relationSupplierOffer",
  generalIcon: ".ant-btn-icon",
  openEye: ".ant-table-cell-fix-right > .ant-btn > .ant-btn-icon",
  itemSku: "#sku",
  checkMarkToSubmit:
    ".ant-btn.css-rrh4gt.ant-btn-primary.ant-btn-color-primary.ant-btn-variant-solid.ant-btn-icon-only",
  actionsMenu: ".ant-dropdown-menu-title-content",
  statusBadge: ".ant-tag.ant-tag-default.css-rrh4gt",
  offerCard: ".styles_card__rgtQT",
  purchaseRequestStatuses: 'ul[role="menu"]',
  currentStatus:
    "[style='margin-left: -4px; margin-right: -4px;'] > :nth-child(1) > .ant-row",
  antSelectDropdown: ".ant-select-dropdown",
};

class DealsPage {
  openDealsPage() {
    cy.get(DealsPageElements.dealsPage).click();
  }
  openDealsDetailsPage() {
    cy.get(DealsPageElements.openEye).eq(0).click();
  }
  openCommunicationTab() {
    cy.contains("Communication Hub").click();
  }
  openCommercialOfferTab() {
    cy.contains("Commercial Offers").click();
  }
  addCommercialOffer(randomRecord: string) {
    const prefix = randomRecord.slice(0, 6);
    cy.get(DealsPageElements.btn).contains("Add New").click();
    cy.get(DealsPageElements.brandPurchaseDropdown)
      .should("be.visible")
      .click()
      .type(prefix);
    cy.get(DealsPageElements.antSelectDropdown).contains(prefix).eq(0).click();
    cy.get(DealsPageElements.supplierOffer).click();
    cy.get(DealsPageElements.antSelectDropdown)
      .eq(1)
      .should("be.visible")
      .contains(prefix)
      .click();
    cy.get(DealsPageElements.checkMarkToSubmit).click();
    cy.get(DealsPageElements.btn).contains(/^Add$/).click();
  }
  chooseAction(targetStatus, actionName) {
    cy.get(DealsPageElements.offerCard)
      .filter((_, card) => {
        // Normalize text
        const text = card.innerText.replace(/\s+/g, " ").trim().toLowerCase();
        return text.includes(targetStatus.toLowerCase());
      })
      .first() // Only take the first matching card
      .then(($card) => {
        if ($card.length) {
          cy.wrap($card)
            .find(DealsPageElements.btn)
            .contains("Actions")
            .scrollIntoView()
            .click();

          cy.get(DealsPageElements.actionsMenu)
            .contains(actionName)
            .should("be.visible")
            .click();

          cy.log(
            `Action "${actionName}" performed on card with status "${targetStatus}"`
          );
        } else {
          cy.log(`No card found with status "${targetStatus}"`);
        }
      });
  }
  negotiate() {
    cy.get(DealsPageElements.btn).contains("Actions").eq(0).click();
    cy.get(DealsPageElements.actionsMenu).contains("Negotiate").click();
  }
  copyOffer() {
    cy.get(DealsPageElements.btn).contains("Create a Copy").eq(0).click();
    cy.wait(1000);
  }
  openPurchase() {
    cy.contains("Purchase Request");
    cy.contains("tr", "Price Confirmation Requested").within(() => {
      cy.get("td a").first().invoke("removeAttr", "target").click();
    });
  }
  changePurchaseRequestStatus() {
    const clicks = 2; // number of status changes needed
    const waitTime = 1500; // milliseconds to wait between clicks
    for (let i = 0; i < clicks; i++) {
      cy.get(DealsPageElements.btn).contains("Change Status").click();
      cy.get(DealsPageElements.purchaseRequestStatuses).click();
      cy.wait(waitTime); // wait between clicks
    }
    // Verify final status
    cy.get(DealsPageElements.currentStatus).contains("Price Confirmed");
  }
}
export default DealsPage;
