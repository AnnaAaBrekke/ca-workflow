const { defineConfig } = require("cypress");

module.exports = defineConfig({
    e2e: {
        // baseUrl: "",
        // Updated path to match your own folder system
        specPattern: "tests/e2e/cypress/specs/**/*.cy.js",
        supportFile: "tests/e2e/cypress/support/commands.js",
        fixturesFolder: "tests/e2e/cypress/fixtures.js",
        env: {
            // Add your environment variables here, like user credentials
            userEmail: "e2euser@noroff.no",
            userPassword: "e2ePassword",
            API_BASE_URL: "https://nf-api.onrender.com/api/v1", // Example API URL
        },
        setupNodeEvents(/* on, config */) {
            // implement node event listeners here
        },
    },
});
