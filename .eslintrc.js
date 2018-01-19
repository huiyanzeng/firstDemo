// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    'plugin:vue/essential',
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    'standard'
  ],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  //add some code rules
  rules: {
    'arrow-parens': 0,
    'indent': 0,
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'key-spacing': 0,
    "space-before-blocks": [0, "always"],
    "space-before-function-paren": [0, "always"],
    "quotes": 0,
    "no-trailing-spaces": 0,
    "spaced-comment": 0,
    "semi": 0,
  }
}
