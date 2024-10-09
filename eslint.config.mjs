import globals from "globals"
import prettier from "eslint-plugin-prettier"
import jestPlugin from "eslint-plugin-jest"
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
            "jest/prefer-expect-assertions": "off", // Prefer-expect-assertions rule
        },
    },

    pluginJs.configs.recommended,
]
