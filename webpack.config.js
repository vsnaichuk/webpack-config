const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const TerserJSPlugin = require('terser-webpack-plugin')

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
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
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index.html',
            minify: {
              collapseWhitespace: true,
              removeComments: true,
              removeRedundantAttributes: true,
              removeScriptTypeAttributes: true,
              removeStyleLinkTypeAttributes: true,
              useShortDoctype: true
            }
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
            test: /\.(js|ts)$/, 
            exclude: /node_modules/, 
            loader: 'babel-loader' 
          }
        ]
    }
}