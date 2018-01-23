import path from 'path';
import webpack from 'webpack';

const NODE_ENV = process.env.NODE_ENV;

var entries = [];
var jsLoaders = [];
var plugins = [];

if (NODE_ENV != 'production') {
  entries.push('react-hot-loader/patch');
  entries.push('webpack-hot-middleware/client');

  jsLoaders.push('react-hot-loader/webpack');

  plugins.push(new webpack.HotModuleReplacementPlugin());
  plugins.push(new webpack.LoaderOptionsPlugin({
    debug: true
  }));
} else {
  plugins.push(new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify('production')
    }
  }));
  plugins.push(new webpack.optimize.UglifyJsPlugin());
}
entries.push('./client/src/index.js');
jsLoaders.push('babel-loader');



const config = {
  entry: entries,
  resolve: {
    extensions: ['.js']
  },
  output: {
    path: path.resolve('./', 'public'),
    filename: 'app.bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.(json)$/,
        exclude: /node_modules/,
        loader: 'json-loader',
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loaders: jsLoaders
      },
      {
        test: /\.(?:png|jpg|gif|svg|ico|eot|ttf|woff|woff2)$/,
        loader: 'url-loader',
      },
      {
        test: /\.css/,
        loader: 'style-loader!css-loader?localIdentName=[local]-[hash:base64:5]',
      },
      {
        test: /\.less/,
        loader: 'style-loader!css-loader?modules&localIdentName=[local]-[hash:base64:5]!less',
      },
    ]
  },
  plugins: plugins,
  stats: {
    colors: true
  },
  devtool: 'source-map'
};

export default config;