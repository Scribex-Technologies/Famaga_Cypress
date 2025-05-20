import { addCucumberPreprocessorPlugin } from "@badeball/cypress-cucumber-preprocessor";
import browserify from "@badeball/cypress-cucumber-preprocessor/browserify";
import { defineConfig } from "cypress";

export default defineConfig({
  projectId: "4g1xhq",
  chromeWebSecurity: false,
  viewportWidth: 1280,
  viewportHeight: 720,
  defaultCommandTimeout: 20000,
  //retries: 1,
  env: {
    testEnv: "comingsoon",
    stageEnv: "comingsoon",
  },
  e2e: {
    specPattern: ["cypress/e2e/**/*.{feature,features}"],
    baseUrl: "https://dev-famaga-web.scribex.io/",
    supportFile: "cypress/support/e2e.ts",
    setupNodeEvents(on, config) {
      addCucumberPreprocessorPlugin(on, config);
      on(
        "file:preprocessor",
        browserify(config, {
          typescript: require.resolve("typescript"), // TypeScript compiler
        })
      );
      return config;
    },
  },
});
