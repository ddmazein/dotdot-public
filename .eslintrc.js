module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    "plugin:vue/essential",
    "eslint:recommended",
    "plugin:prettier/recommended",
  ],
  parserOptions: {
    parser: "@babel/eslint-parser",
  },
  // add your custom rules here
  rules: {
    "vue/no-v-html": 0,
    "vue/attribute-hyphenation": 0,
    "no-irregular-whitespace": 0,
    "vue/multi-word-component-names": 0,
    "no-console": ["warn", { allow: ["warn", "error"] }],
  },
};
