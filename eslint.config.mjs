import globals from "globals";
import pluginJs from "@eslint/js";

export default [
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    rules: {
      quotes: ["error", "single"], // enforce single quotes
      semi: ["error", "always"], // require semicolons
    },
  },
  pluginJs.configs.recommended,
];
