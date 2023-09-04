module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended'
  ],
  plugins: [
  ],
  // add your custom rules here
  rules: {
    'vue/no-v-html': 0,
    'vue/attribute-hyphenation': 0,
    'no-irregular-whitespace': 0,
    'vue/multi-word-component-names': 0,
    'no-console': ['warn', { allow: ['warn', 'error'] }]
  }
}
