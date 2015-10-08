var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ReactToHtmlPlugin = require('react-to-html-webpack-plugin');

var appConfig = {
    target: 'web',
    cache: false,
    entry: [
        'webpack-dev-server/client?http://0.0.0.0:3000', // WebpackDevServer host and port
        'webpack/hot/only-dev-server', // "only" prevents reload on syntax errors
        './src/index.js'
    ],
    output: {
        path: path.resolve(__dirname, 'build'),
        publicPath: '/',
        filename: 'bundle.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Testlio Test Cycle',
            template: './src/index.tpl.html',
            inject: 'body'
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
    module: {
        loaders: [{
            test: /\.css$/,
            loaders: ['react-hot', 'style-loader/useable!css-loader!postcss-loader'],
            exclude: /node_modules/,
            include: path.join(__dirname, 'src')
        },{
            test: /\.js$/,
            loaders: ['react-hot','babel-loader'],
            exclude: /node_modules/,
            include: path.join(__dirname, 'src')
        }]
    }
};

module.exports = appConfig;
