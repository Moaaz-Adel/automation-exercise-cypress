import { defineConfig } from "cypress";

export default defineConfig({
  chromeWebSecurity: false,
  viewportHeight: 1080,
  videoUploadOnPasses: false,
  videoCompression: false,
  viewportWidth: 1920,
  screenshotOnRunFailure: true,
  projectId: "Automation Practice",
  defaultCommandTimeout: 3000,
  responseTimeout: 3000,
  requestTimeout: 3000,
  reporter: "cypress-mochawesome-reporter",
  reporterOptions: {
    charts: true,
    reportPageTitle: "My Cervello Tests",
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
  },
  env: {
    apiUrl: "https://automationexercise.com/api",
  },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require("cypress-mochawesome-reporter/plugin")(on);
      require("cypress-localstorage-commands/plugin")(on, config);
      return config;
    },
    baseUrl: "https://www.automationexercise.com",
    specPattern: "cypress/tests/**/*.{js,jsx,ts,tsx}",
    excludeSpecPattern: ["*.page.js", "utils.js", "*.d.ts"],
    supportFile: "cypress/support/e2e.ts",
  },
});
