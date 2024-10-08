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
      quotes: ["error", "double"],
      semi: ["error", "always"],
      "prettier/prettier": ["error"], // enforce Prettier rules
    },
  },
  pluginJs.configs.recommended,
  {
    plugins: ["prettier"], // add Prettier plugin
  },
];
