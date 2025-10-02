import {FlatCompat} from "@eslint/eslintrc";
import {defineConfig, globalIgnores} from "eslint/config";
import tseslint from "typescript-eslint";
import eslintJs from "@eslint/js";
import eslintReact from "@eslint-react/eslint-plugin";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";
import eslintPluginImport from "eslint-plugin-import";
import eslintPluginReactHooks from "eslint-plugin-react-hooks";
import eslintPluginJsxA11y from "eslint-plugin-jsx-a11y";
import eslintPluginReact from "eslint-plugin-react";
import eslintPluginStylistic from "@stylistic/eslint-plugin";

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
});

const ignoresLintingConfig = defineConfig([
  globalIgnores([".next/", "node_modules/", "next-env.d.ts"]),
]);

const languageLintingConfig = defineConfig([
  {
    files: ["**/*.{ts,tsx,js,mjs,cjs}"],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        projectService: {
          allowDefaultProject: ["*.js", "*.mjs", "*.cjs"],
        },
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  eslintJs.configs.recommended,
  tseslint.configs.strictTypeChecked,
  tseslint.configs.stylisticTypeChecked,
  eslintPluginStylistic.configs.recommended,
  {
    rules: {
      "no-console": ["warn", {allow: ["error"]}],
      "@stylistic/padding-line-between-statements": [
        "warn",
        {blankLine: "always", prev: "*", next: ["return", "export"]},
        {blankLine: "always", prev: ["const", "let", "var"], next: "*"},
        {
          blankLine: "any",
          prev: ["const", "let", "var"],
          next: ["const", "let", "var"],
        },
      ],
      "@typescript-eslint/no-unused-vars": [
        "warn",
        {
          args: "after-used",
          ignoreRestSiblings: false,
          argsIgnorePattern: "^_.*?$",
          caughtErrorsIgnorePattern: "^_.*?$",
        },
      ],
      "@typescript-eslint/no-unsafe-member-access": "off",
      "@typescript-eslint/no-confusing-void-expression": "off",
      "@typescript-eslint/ban-ts-comment": "off",
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-inferrable-types": "off",
      // Optionals
      // "@typescript-eslint/no-floating-promises": "off",
      // "@typescript-eslint/no-non-null-assertion": "off",
    },
  },
]);

const reactLintingConfig = defineConfig([
  {
    files: ["**/*.{tsx,jsx}"],
    settings: {
      react: {
        version: "detect",
      },
    },
  },
  eslintPluginReact.configs.flat.recommended,
  eslintPluginReact.configs.flat["jsx-runtime"],
  eslintReact.configs["recommended-type-checked"],
  eslintPluginReactHooks.configs["recommended-latest"],
  {
    rules: {
      "@eslint-react/no-useless-fragment": "error",
      "@eslint-react/no-missing-key": "warn",
      "react/no-array-index-key": "off",
      "react/self-closing-comp": "warn",
      "react/jsx-curly-brace-presence": ["error", {props: "never", children: "never"}],
      "react/jsx-sort-props": [
        "warn",
        {
          callbacksLast: true,
          shorthandFirst: true,
          noSortAlphabetically: false,
          reservedFirst: true,
        },
      ],
    },
  },
]);

const reactA11yLintingConfig = defineConfig([
  {
    files: ["**/*.{tsx,jsx}"],
  },
  eslintPluginJsxA11y.flatConfigs.recommended,
  {
    rules: {
      "jsx-a11y/click-events-have-key-events": "off",
    },
  },
]);

const nextLintingConfig = defineConfig([
  {
    files: ["**/*.{tsx,jsx}"],
  },
  compat.extends("plugin:@next/next/recommended"),
  {
    rules: {
      "@next/next/no-img-element": "off",
    },
  },
]);

const importLintingConfig = defineConfig([
  {
    files: ["**/*.{ts,tsx,js,mjs,cjs}"],
  },
  {
    settings: {
      "import/resolver": {
        typescript: true,
        node: true,
      },
    },
  },
  eslintPluginImport.flatConfigs.recommended,
  eslintPluginImport.flatConfigs.typescript,
  {
    rules: {
      "import/no-default-export": "off",
      "import/no-named-as-default-member": "off",
      "import/named": "off",
      "import/namespace": "off",
      "import/default": "off",
      "import/no-unresolved": "off",
      "import/order": [
        "warn",
        {
          groups: [
            "type",
            "builtin",
            "object",
            "external",
            "internal",
            "parent",
            "sibling",
            "index",
          ],
          pathGroups: [
            {
              pattern: "@/*",
              group: "external",
              position: "after",
            },
          ],
          "newlines-between": "always",
        },
      ],
    },
  },
]);

const prettierLintingConfig = defineConfig([
  {
    files: ["**/*.{ts,tsx,js,mjs,cjs}"],
  },
  eslintPluginPrettierRecommended,
  {
    rules: {
      "prettier/prettier": [
        "warn",
        {
          printWidth: 100,
          trailingComma: "all",
          tabWidth: 2,
          semi: true,
          singleQuote: false,
          bracketSpacing: false,
          arrowParens: "always",
          endOfLine: "auto",
          plugins: ["prettier-plugin-tailwindcss"],
        },
      ],
    },
  },
]);

export default defineConfig([
  ignoresLintingConfig,
  languageLintingConfig,
  reactLintingConfig,
  reactA11yLintingConfig,
  nextLintingConfig,
  importLintingConfig,
  prettierLintingConfig,
]);
