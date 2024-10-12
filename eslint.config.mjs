import globals from "globals";
import prettier from "eslint-plugin-prettier";
import jestPlugin from "eslint-plugin-jest";
import cypressPlugin from "eslint-plugin-cypress";
import pluginJs from "@eslint/js";

export default [
    // Base configuration for browser and Node.js
    {
        languageOptions: {
            globals: {
                ...globals.browser, // Recognize browser-specific globals (like window, document)
                ...globals.node, // Recognize Node.js-specific globals (like process, global)
            },
            ecmaVersion: "latest",
            sourceType: "module",
        },
        rules: {
            quotes: ["error", "double"], // Enforce double quotes
            semi: ["error", "always"], // Enforce semicolons
            "prettier/prettier": ["error"], // Enforce Prettier rules
        },
        plugins: {
            prettier,
        },
    },

    // Jest-specific configuration for test files
    {
        files: ["**/*.test.js"],
        languageOptions: {
            globals: {
                ...globals.jest, // Recognize Jest-specific globals (describe, it, expect, etc.)
            },
        },
        plugins: {
            jest: jestPlugin,
        },
        rules: {
            ...jestPlugin.configs.recommended.rules,
            "jest/prefer-expect-assertions": "off",
        },
    },

    // Cypress-specific configuration for e2e tests
    {
        files: ["**/*.cy.js", "tests/e2e/cypress/**/*.js"],
        languageOptions: {
            globals: {
                ...globals.cypress, // Recognize Cypress-specific globals (cy, Cypress)
            },
        },
        plugins: {
            cypress: cypressPlugin,
        },
        rules: {
            ...cypressPlugin.configs.recommended.rules,
            "cypress/no-unnecessary-waiting": "error", // Avoid unnecessary cy.wait() calls
        },
    },

    // Prettier configuration
    pluginJs.configs.recommended,
];
