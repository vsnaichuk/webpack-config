const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const TerserJSPlugin = require('terser-webpack-plugin')

module.exports = {
    context: path.resolve(__dirname, 'src'),
    entry: {
      main: './index.js',
      analytics: './analytics.js'
    },
    
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'dist')
    },
    optimization: {
        minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})],
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'),
        port: 4200
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './index.html',
            minify: {
              collapseWhitespace: true,
              removeComments: true,
              removeRedundantAttributes: true,
              removeScriptTypeAttributes: true,
              removeStyleLinkTypeAttributes: true,
              useShortDoctype: true
            }
        }),
        new ScriptExtHtmlWebpackPlugin({
          sync: 'important',
          defaultAttribute: 'defer'
        }),
        new MiniCssExtractPlugin({
            filename: 'style.css',
        })
    ],
    resolve: {
      extensions: ['.js','.ts']
    },
    module: {
        rules: [
          {
            test: /\.css$/,
            use: [MiniCssExtractPlugin.loader,'css-loader']
          },
          {
            test: /\.less$/,
            use: [MiniCssExtractPlugin.loader,'css-loader','less-loader']
          },
          {
            test: /\.scss$/,
            use: [MiniCssExtractPlugin.loader,'css-loader','sass-loader']
          },
          { 
            test: /\.(png|jpg|svg|gif)$/, 
            use: ['file-loader'] 
          },
          { 
            test: /\.(ttf|woff|woff2|eot)$/, 
            use: ['file-loader'] 
          },
          { 
            test: /\.(js|ts)$/, 
            exclude: /node_modules/, 
            loader: 'babel-loader' 
          }
        ]
    }
}