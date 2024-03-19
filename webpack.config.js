const path = require('path');
const Dotenv = require('dotenv-webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const ReactRefreshTypeScript = require('react-refresh-typescript');

const dotenv = require('dotenv');

dotenv.config();

module.exports = {
  mode: 'development',
  entry: './src/index.tsx',
  devtool: 'inline-source-map',
  output: {
    publicPath: '/',
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    clean: true
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx']
  },
  devServer: {
    static: './dist',
    historyApiFallback: true,
    host: process.env.HOST,
    port: process.env.PORT,
    hot: true
  },
  plugins: [
    new Dotenv({ systemvars: true }),
    new ReactRefreshWebpackPlugin({ overlay: false }),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      inject: 'body'
    }),
    new CopyPlugin({
      patterns: [
        { from: 'public' }
      ]
    })
  ],
  module: {
    rules: [
      { 
        test: /\.tsx?$/, 
        exclude: [/node_modules/], 
        use: [
          {
            loader: 'ts-loader',
            options: {
              getCustomTransformers: () => ({
                before: [ReactRefreshTypeScript()],
              }),
              transpileOnly: true
            }
          }
        ]
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                auto: true,
                mode: 'local',
                localIdentName: "[folder]-[local]-[hash:base64:5]"
              }
            }
          }
        ]
      }
    ]
  }
}
