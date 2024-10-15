import globals from "globals";
import prettier from "eslint-plugin-prettier";
import jestPlugin from "eslint-plugin-jest";
import cypressPlugin from "eslint-plugin-cypress";
import pluginJs from "@eslint/js";

export default [
    {
        files: [
            "src/**/*.js",
            "tests/**/*.js",
            "tests/**/*.cy.js",
            "tests/e2e/cypress/**/*.js",
        ],
        languageOptions: {
            globals: {
                ...globals.browser, // Recognize browser-specific globals
                ...globals.node, // Recognize Node.js-specific globals
                ...globals.cypress, // Recognize Cypress-specific globals
            },
            ecmaVersion: "latest",
            sourceType: "module",
        },
        rules: {
            quotes: ["error", "double"], // Enforce double quotes
            semi: ["error", "always"], // Enforce semicolons
            "prettier/prettier": ["error"],
        },
        plugins: {
            prettier,
            cypress: cypressPlugin,
        },
    },

    // Jest-specific configuration
    {
        files: ["**/*.test.js"],
        languageOptions: {
            globals: {
                ...globals.jest,
            },
        },
        plugins: {
            jest: jestPlugin,
        },
        rules: {
            ...jestPlugin.configs.recommended.rules,
        },
    },

    // Cypress-specific configuration for e2e tests
    {
        files: ["**/*.cy.js", "tests/e2e/cypress/**/*.js"],
        languageOptions: {
            globals: {
                ...globals.cypress,
            },
        },
        plugins: {
            cypress: cypressPlugin,
        },
        rules: {
            ...cypressPlugin.configs.recommended.rules,
            "cypress/no-unnecessary-waiting": "off",
        },
    },
];
