const { defineConfig } = require("cypress");

module.exports = defineConfig({
    e2e: {
        // Updated the path to match my folder system
        specPattern: "tests/e2e/cypress/specs/**/*.cy.js",
        supportFile: "tests/e2e/cypress/support/commands.js",
        fixturesFolder: "tests/e2e/cypress/fixtures.js",
        defaultCommandTimeout: 10000,

        setupNodeEvents(/* on, config */) {},
    },
});
