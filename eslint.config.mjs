import globals from "globals";
import pluginJs from "@eslint/js";
import prettier from "eslint-plugin-prettier"; // Import Prettier plugin

export default [
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    rules: {
      quotes: ["error", "double"],
      semi: ["error", "never"], // Will change this to always later
      "prettier/prettier": ["error"], // enforce Prettier rules
    },
    plugins: {
      prettier: prettier, // Define Prettier as a plugin
    },
  },
  pluginJs.configs.recommended,
];
