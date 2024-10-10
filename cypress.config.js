const { defineConfig } = require("cypress");

module.exports = defineConfig({
    e2e: {
        // baseUrl: "",
        // Updated path to match my own folder system
        specPattern: "tests/e2e/cypress/specs/**/*.cy.js",
        supportFile: "tests/e2e/cypress/support/commands.js",
        fixturesFolder: "tests/e2e/cypress/fixtures",
        setupNodeEvents(/* on, config */) {
            // implement node event listeners here
        },
    },
});
