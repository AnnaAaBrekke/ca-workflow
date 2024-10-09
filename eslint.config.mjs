import globals from "globals"
import prettier from "eslint-plugin-prettier"
import jestPlugin from "eslint-plugin-jest" // Renamed to jestPlugin
import pluginJs from "@eslint/js"

export default [
    {
        languageOptions: {
            globals: {
                ...globals.browser,
                ...globals.node,
            },
            ecmaVersion: "latest",
            sourceType: "module",
        },
        rules: {
            quotes: ["error", "double"],
            semi: ["error", "always"],
            "prettier/prettier": ["error"],
        },
        plugins: {
            prettier,
        },
    },

    // Jest-specific configuration for test files
    {
        files: ["**/*.test.js"], // Matches all .test.js files
        languageOptions: {
            globals: {
                ...globals.jest, // Spread Jest globals with correct permissions
            },
        },
        plugins: {
            jest: jestPlugin, // Use jestPlugin here
        },
        rules: {
            ...jestPlugin.configs.recommended.rules, // Apply Jest recommended rules
            "jest/prefer-expect-assertions": "off", // Optional: Disable prefer-expect-assertions rule
        },
    },

    pluginJs.configs.recommended,
]
