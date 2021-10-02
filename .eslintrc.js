module.exports = {
  parser: "@typescript-eslint/parser", // Specifies the ESLint parser
  extends: ["plugin:@typescript-eslint/recommended", "plugin:prettier/recommended"],
  plugins: ["react", "@typescript-eslint", "simple-import-sort"],
  env: {
    browser: true,
    jasmine: true,
    jest: true
  },
  globals: {
    $: true
  },
  rules: {
    "react/prop-types": "off",
    "react/no-unescaped-entities": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/ban-types": "off",
    "prettier/prettier": "error",
    "no-console": ["warn", { allow: ["warn", "error", "info"] }],
    eqeqeq: ["error", "always"],
    "prefer-const": ["error", { destructuring: "all", ignoreReadBeforeAssign: true }],
    "@typescript-eslint/no-unused-vars": "warn",
    "@typescript-eslint/interface-name-prefix": "off",
    "@typescript-eslint/explicit-member-accessibility": "off",
    "@typescript-eslint/no-triple-slash-reference": "off",
    "@typescript-eslint/ban-ts-ignore": "off",
    "@typescript-eslint/no-this-alias": "off",
    "@typescript-eslint/triple-slash-reference": "off",
    "@typescript-eslint/no-explicit-any": ["error", { fixToUnknown: true }],
    // "simple-import-sort/imports": "error",
    "prettier/prettier": "off"
  },
  settings: {
    react: {
      pragma: "React",
      version: "detect"
    }
  }
}
