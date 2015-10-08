var webpack = require('webpack');

//Load the correct config here as per environment
var config = require('./webpack.config.js');
var webpackDevServer = require('webpack-dev-server');

//Can do config changes in here

var compiler = webpack(config);
var server = new webpackDevServer(compiler, {});
server.listen(3000);
