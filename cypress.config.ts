import { defineConfig } from "cypress";
const allureWriter = require("@shelex/cypress-allure-plugin/writer");

export default defineConfig({
  chromeWebSecurity: false,
  viewportHeight: 1080,
  viewportWidth: 1920,
  videoCompression: false,
  execTimeout: 5000,
  screenshotOnRunFailure: true,
  projectId: "Automation Practice",
  defaultCommandTimeout: 3000,
  responseTimeout: 3000,
  requestTimeout: 3000,
  reporter: "cypress-mochawesome-reporter",
  reporterOptions: {
    charts: true,
    reportPageTitle: "Automation Exercise Tests",
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
  },
  env: {
    apiUrl: "https://automationexercise.com/api",
    allure: true,
    allureCleanResults: true,
    allureSkipCommands: "wrap",
    allureResults: "allure-results",
    allureReuseAfterSpec: true,
  },

  e2e: {
    setupNodeEvents(on, config) {
      // change baseUrl
      config.baseUrl = config.env.baseUrl;
      // implement node event listeners here
      require("cypress-mochawesome-reporter/plugin")(on);
      require("cypress-localstorage-commands/plugin")(on, config);
      allureWriter(on, config);
      return config;
    },
    baseUrl: "https://www.automationexercise.com",
    specPattern: "cypress/tests/**/*.{js,jsx,ts,tsx}",
    excludeSpecPattern: ["*.page.js", "utils.js", "*.d.ts"],
    supportFile: "cypress/support/e2e.ts",
  },
});
