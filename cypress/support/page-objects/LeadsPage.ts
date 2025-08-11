import { getRandomValues } from "crypto";

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
  attachmentType: ".ant-select-selection-search-input",
  supplierCard: ".ant-col.ant-col-24.styles_main__VEyp6.css-rrh4gt",
  generalIcon: ".ant-btn-icon",
  checkmarkToSubmit:
    ".ant-btn.css-rrh4gt.ant-btn-primary.ant-btn-color-primary.ant-btn-variant-solid.ant-btn-icon-only",
  leadsOpenEye: ".ant-table-cell-fix-right > .ant-btn > .ant-btn-icon",
  itemSku: "#sku",
  leadStatus: 'li[role="menuitem"]',
  clientReqNumber: "#clientRequestNumber",
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
      .type("Client for the Purchase");
    cy.contains("Client for the Purchase").click();
    cy.get(LeadsPageElements.contactPersonDropdown)
      .should("be.visible")
      .type("Purchase Contact Person");
    cy.contains("Purchase Contact Person").click();
    cy.get(LeadsPageElements.clientReqNumber).type("req_55");
    cy.get(LeadsPageElements.brandDropdown).type(
      "Brand For The Purchase{enter}"
    );
    cy.get(LeadsPageElements.checkmarkToSubmit).eq(0).click();
    cy.get(LeadsPageElements.attachmentType)
      .eq(5)
      .click()
      .type("Option 1{enter}");
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
