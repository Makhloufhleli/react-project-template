const webpack = require('webpack')
const path = require('path')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')

module.exports = {
    mode: 'development',
    devServer: {
        port: 3000,
        static: path.join(__dirname, '..', './public/'),
        compress: true,
        hot: true,
        open: true,
        historyApiFallback: true,
    },
    plugins: [
        new ReactRefreshWebpackPlugin(),
        new webpack.DefinePlugin({
            'process.env.name': JSON.stringify('Development'),
        }),
    ],
    devtool: 'cheap-module-source-map',
}
