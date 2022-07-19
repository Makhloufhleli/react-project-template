const webpack = require('webpack')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')

module.exports = {
    mode: 'production',
    plugins: [
        new webpack.DefinePlugin({
            'process.env.name': JSON.stringify('Production'),
        }),
    ],
}
