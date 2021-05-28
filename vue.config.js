module.exports = {
  'lintOnSave': true,
  'chainWebpack': (config) => {
    config.module.rule('eslint')
    config.module.rule('eslint').use('eslint-loader')
  }
}
