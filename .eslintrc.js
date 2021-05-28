module.exports = {
  'root': true,
  'env': {
    'node': true,
    'browser': true
  },
  'extends': ['plugin:vue/recommended', 'eslint:recommended'],
  'parser': 'vue-eslint-parser',
  'parserOptions': {
    'parser': 'babel-eslint',
    'ecmaVersion': 2020, //ES的版本，默认为5
    'sourceType': 'module' //指定源代码存在的位置，script | module，默认为script。
  },
  'globals': {
    'document': true,
    'window': true
  },
  'rules': {
    'semi': ['error', 'never'],
    'quotes': ['error', 'single'],
    'arrow-parens': ['error', 'always'],
    'vue/html-closing-bracket-newline': 'off'
  }
}
