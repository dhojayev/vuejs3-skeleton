require('dotenv-flow').config()
const Encore = require('@symfony/webpack-encore')
const path = require('path')

const isProduction = Encore.isProduction()
const isDevelopment = !isProduction

const encore = Encore
    .setPublicPath('/build')
    .enableSourceMaps(isDevelopment)
    .enableVersioning(isProduction)
    .enableSingleRuntimeChunk()
    .enableSourceMaps(isDevelopment)
    .setOutputPath('public/build')

    .addEntry('js/index', './assets/js/index.ts')
    .addStyleEntry('css/index', './assets/scss/index.scss')

    .configureDevServerOptions(options => {
        options.host = '0.0.0.0'
        options.open = true
    })

    .enableTypeScriptLoader(function (tsConfig) {
        tsConfig.appendTsSuffixTo = tsConfig.appendTsSuffixTo ?? []

        tsConfig.appendTsSuffixTo.push(/\.vue$/)
    })
    .enablePostCssLoader()
    .enableVueLoader(() => {
    }, { runtimeCompilerBuild: false })
    .enableSassLoader(function (options) {
        options.sassOptions.includePaths = [path.resolve('assets')]
    })

    .addAliases({
        'vue': 'vue/dist/vue.esm-bundler.js',
    })


if (isDevelopment) {
    encore.cleanupOutputBeforeBuild()
}

// Choose a faster sourcemap type
if (isDevelopment) {
    encore.devtool = 'eval-source-map'
}

config = encore.getWebpackConfig()

module.exports = config
