import { addCucumberPreprocessorPlugin } from "@badeball/cypress-cucumber-preprocessor";
import browserify from "@badeball/cypress-cucumber-preprocessor/browserify";
import { defineConfig } from "cypress";
const Chance = require("chance");

export default defineConfig({
  projectId: "4ex5co",
  chromeWebSecurity: false,
  viewportWidth: 1280,
  viewportHeight: 720,
  defaultCommandTimeout: 20000,
  // retries: 1,
  env: {
    testEnv: "comingsoon",
    stageEnv: "comingsoon",
  },
  e2e: {
    specPattern: "cypress/e2e/**/*.feature",
    baseUrl: "https://dev-famaga-web.scribex.io/",
    supportFile: "cypress/support/e2e.ts",
    setupNodeEvents(on, config) {
      addCucumberPreprocessorPlugin(on, config);

      on(
        "file:preprocessor",
        browserify(config, {
          typescript: require.resolve("typescript"),
        })
      );

      // ✅ Generate once per Cypress run random names
      const chance = new Chance();
      config.env.genRecordName = chance.sentence({ words: 2 });
      config.env.secondGenRecordName = chance.sentence({ words: 2 });

      return config;
    },
  },
});
