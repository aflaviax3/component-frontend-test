// karma.conf.js
module.exports = function (config) {
  config.set({
    browsers: ['Chrome'],

    frameworks: ['jasmine'],

    files: [
      'test/index.spec.js'
    ],

    // Vamos enviar os testes para o bundle
    preprocessors: {
      'test/index.spec.js': ['webpack']
    },

    // Usando a configuração do Webpack
    webpack: webpackConfig,

    // Evitar paredes de informações
    webpackMiddleware: {
      noInfo: true
    },

    autoWatch: true,

    singleRun: true
  })
}
