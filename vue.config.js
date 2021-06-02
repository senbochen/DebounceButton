module.exports = {
  indexPath: 'index.js',// 输出路径
  'lintOnSave': true,
  'chainWebpack': (config) => {
    config.module.rule('eslint').rule('js')
      .include
      .add(__dirname + 'packages')
      .end()
    config.module.rule('eslint').use('eslint-loader')
  }
}
