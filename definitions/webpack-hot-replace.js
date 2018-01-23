import webpack from 'webpack';

if (DEBUG) {
    const webpackConfig = require('../webpack.config.babel');
    const compiler = webpack(webpackConfig.default);
    const webpack_dev_middleware = require("webpack-dev-middleware")(compiler, {
        publicPath: "/",
    });
    const webpack_hot_middleware = require("webpack-hot-middleware")(compiler);

    F.middleware('webpack-dev-middleware', function (req, res, next, options, controller) {
        webpack_dev_middleware(req, res, next);
    });

    F.middleware('webpack-hot-middleware', function (req, res, next, options, controller) {
        webpack_hot_middleware(req, res, next);
    });

    F.use('webpack-dev-middleware');
    F.use('webpack-hot-middleware');
}