// Using node native path module
const path = require('path');
// plugin to handle html files
const HtmlWebpackPlugin = require('html-webpack-plugin');
// Constants to paths
const paths = {
  DIST: path.resolve(__dirname, 'dist'),
  SRC: path.resolve(__dirname, 'src'),
  JS: path.resolve(__dirname, 'src/js'),
};

// Webpack configuration
module.exports = {
  entry: path.join(paths.JS, 'app.js'),
  output: {
    path: paths.DIST,
    filename: 'app.bundle.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(paths.SRC, 'index.html'),
    }),
  ],
  // devServer: {
  //   contentBase: paths.SRC,
  // },
  // Use babel-loader for .js e .jsx
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
        ],
      },
    ],
  },
  // With this we can import files without the extension files
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};