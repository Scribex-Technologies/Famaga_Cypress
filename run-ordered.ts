const { execSync } = require("child_process");
const specs = [
  //  "cypress/e2e/SignIn/SignIn.feature",
  //  "cypress/e2e/ForgotPassword/ForgotPassword.feature",
  // "cypress/e2e/Clients/Clients.feature",
  //"cypress/e2e/Suppliers/Suppliers.feature",
  //"cypress/e2e/Leads/Leads.feature",
  // "cypress/e2e/Purchase Requests/PurchaseRequests.feature",
  "cypress/e2e/WDeals/WDeals.feature",
  "cypress/e2e/Orders.ts/Orders.feature",
];

specs.forEach((spec) => {
  console.log(`\n🚀 Running: ${spec}\n`);
  try {
    execSync(`yarn cypress run --headless --browser chrome --spec "${spec}"`, {
      stdio: "inherit",
    });
  } catch (err) {
    console.error(`❌ Test failed: ${spec}`);
  }
});
