const LeadsPageElements = {
  leadsPage: 'a[href="/admin/leads"]',
  tabs: ".ant-col.ant-col-24.css-rrh4gt",
  btn: 'button[type="button"]',
  addBtn: ".ant-row > .ant-btn-primary",
  clientDropdown: "#clientId",
  sourceDropdown: "#source",
  brandDropdown: "#brands",
  contactPersonDropdown: "#contactPersonId",
  offerNumberField: "#offerNumber",
  emlFileUpload: "#emailFile",
  attachmentUpload: "#file",
  attachmentType: "#rc_select_4",
  supplierCard: ".ant-col.ant-col-24.styles_main__VEyp6.css-rrh4gt",
  generalIcon: ".ant-btn-icon",
  checkmarkToSubmit:
    ".ant-btn.css-rrh4gt.ant-btn-primary.ant-btn-color-primary.ant-btn-variant-solid.ant-btn-icon-only",
  leadsOpenEye: ".ant-table-cell-fix-right > .ant-btn > .ant-btn-icon",
  itemSku: "#sku",
  leadStatus: 'li[role="menuitem"]',
};
class LeadsPage {
  openLeadsPage() {
    cy.get(LeadsPageElements.leadsPage).click();
  }
  openLeadsDetailsPage() {
    cy.get(LeadsPageElements.leadsOpenEye).eq(0).click();
  }
  openCommunicationTab() {
    cy.get(LeadsPageElements.tabs).contains("Communication Hub").click();
  }
  clickAddBtn() {
    cy.get(LeadsPageElements.btn).contains("Add New").click();
  }
  changeLeadStatus(status: string) {
    cy.get(LeadsPageElements.btn).contains("Change Status").click();
    cy.get(LeadsPageElements.leadStatus).contains(status).click();
    cy.get(LeadsPageElements.btn).contains("Convert").click();
  }
  createNewLead() {
    cy.get(LeadsPageElements.btn).contains("Add New").click();
    cy.get(LeadsPageElements.emlFileUpload).attachFile("EmlFileAutotest.eml");
    cy.get(LeadsPageElements.clientDropdown)
      .should("be.visible")
      .type("Client for the Purchase{enter}");
    cy.get(LeadsPageElements.contactPersonDropdown).type(
      "Purchase Contact Person{enter}"
    );
    cy.get(LeadsPageElements.brandDropdown).type(
      "Brand For The Purchase{enter}"
    );
    cy.get(LeadsPageElements.checkmarkToSubmit).eq(0).click();
    cy.get(LeadsPageElements.attachmentType).type("Option 1{enter}");
    cy.get(LeadsPageElements.attachmentUpload).attachFile("AutomatedFile.pdf");
    cy.get(LeadsPageElements.checkmarkToSubmit).eq(1).click();
    cy.get(LeadsPageElements.addBtn).scrollIntoView().click();
  }
  addItemToTheTable() {
    cy.get(LeadsPageElements.btn).contains("Add Row").click();
    cy.get(LeadsPageElements.attachmentType).type("Supplier Offer{enter}");
  }
}
export default LeadsPage;
