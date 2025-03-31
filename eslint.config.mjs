import { defineConfig } from "eslint/config";
import globals from "globals";
import js from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import i18next from "eslint-plugin-i18next";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    languageOptions: {
      globals: globals.browser,
    },
    plugins: {
      js,
      i18next,
    },
    extends: ["js/recommended", "plugin:i18next/recommended"],
  },
  {
    ...tseslint.configs.recommended,
  },
  {
    ...pluginReact.configs.flat.recommended,
    rules: {
      ...pluginReact.configs.flat.recommended.rules,
      "react/react-in-jsx-scope": "off",
      "react/jsx-indent": ["error", 4],
      "react/jsx-filename-extension": [
        1,
        { extensions: [".js", ".jsx", ".tsx"] },
      ],
      "import/no-unresolved": "off",
      "no-unused-vars": "warn",
      indent: [2, 4],
      "react/require-default-props": "off",
      "react/jsx-props-no-spreading": "warn",
      "react/function-component-definition": "off",
      "no-shadow": "off",
      "i18next/no-literal-string": ["error", { markupOnly: true }],
    },
  },
]);
