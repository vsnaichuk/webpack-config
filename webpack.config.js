const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const TerserJSPlugin = require('terser-webpack-plugin')
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin')


const isDev = process.env.NODE_ENV === 'development'
const isProd = !isDev

const optimization = () => {
    const config = {
      splitChunks: {
        chunks: 'all'
      }
    }
  
    if (isProd) {
      config.minimizer = [
        new OptimizeCSSAssetsPlugin(),
        new TerserJSPlugin()
      ]
    }
  
    return config
}
  

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

    optimization: optimization(),

    devServer: {
        contentBase: path.resolve(__dirname, 'dist'),
        port: 4200
    },

    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './index.html',
            minify: {
              collapseWhitespace: isProd,
              removeComments: isProd,
              removeRedundantAttributes: isProd,
              removeScriptTypeAttributes: isProd,
              removeStyleLinkTypeAttributes: isProd,
              useShortDoctype: isProd
            }
        }),
        new CleanWebpackPlugin(),
        new CopyWebpackPlugin([
          {
            from: path.resolve(__dirname, 'src/icons/favicon.ico'),
            to: path.resolve(__dirname, 'dist')
          }
        ]),
        new ScriptExtHtmlWebpackPlugin({
          sync: 'important',
          defaultAttribute: 'defer'
        }),
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css',
        })
    ],

    resolve: {
      extensions: ['.js','.ts'],
      alias: {
        '@modules': path.resolve(__dirname, 'src/modules'),
        '@': path.resolve(__dirname, 'src')
      }
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