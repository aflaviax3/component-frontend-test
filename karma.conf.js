var webpackConfig = require('./build/webpack.dev.conf.js')
delete webpackConfig.entry

// karma.conf.js
module.exports = function (config) {
  config.set({
    browsers: ['PhantomJS'],
    frameworks: ['jasmine'],

    files: [
      'node_modules/babel-polyfill/dist/polyfill.js',
      'test/index.js'
    ],

    preprocessors: {
      'test/index.js': ['webpack']
    },

    webpack: webpackConfig,
    
    webpackMiddleware: {
      noInfo: true
    },
    singleRun: true
  })
}
