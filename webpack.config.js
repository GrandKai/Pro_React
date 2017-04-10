const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
// const ROOT_PATH = path.resolve(__dirname);

const APP_PATH = path.resolve(__dirname, 'app');
const BUILD_PATH = path.resolve(__dirname, 'build');

module.exports = {
    entry: {

      // main: path.resolve(APP_PATH, 'App.jsx'),
      main: path.resolve(__dirname, 'app/examples/Index.jsx'),
      vendor: 'moment'
        // index: path.resolve(APP_PATH, 'index.jsx')
    },
    output: {
        filename: '[name].[chunkhash].js',
        path: path.resolve(__dirname, 'dist'),

        // show comments in bundles, just to beautify the output of this example.
        // should not be used for production.
        pathinfo: true
        // publicPath: ''
    },
    module: {
        rules: [
            {
              test: /\.css$/,
              use: ExtractTextWebpackPlugin.extract({
                use: 'css-loader'
              }),
              include: APP_PATH
            },
            {
                test: /\.jsx$/,
                use: {
                  loader: 'babel-loader',
                  options: {
                    // 添加 ES6， react 语法支持
                    presets: [['es2015',{ modules: false }], 'react'],
                    plugins: [
                      // 支持语法动态导入 Using import()
                      'syntax-dynamic-import',

                      // To use ES2017 async/await with import():
                      'transform-async-to-generator',
                      'transform-regenerator',
                      'transform-runtime'
                    ]

                    // 在开发环境才启用 HMR 和 Catch Error
                    // env: {
                    //     development: {
                    //         presets: ['react-hmre']
                    //     }
                    // }
                  }
                },
                exclude: /(node_modules)/,
                include: APP_PATH
            },
            // {
            //     test: /\.jsx$/,
            //     enforce: 'pre',
            //     loader: 'eslint-loader',
            //     // 发现以下配置的 options 未作用
            //     options: {
            //         extends: 'airbnb',
            //         rules: {
            //             indent: ['off'],
            //             'comma-dangle': 2
            //         }
            //     },
            //     include: APP_PATH
            // }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    devServer: {
        // https: true,
        host: '192.168.4.71',
        port: 8081
    },
    plugins: [
        new HtmlWebpackPlugin({ title: '使用HtmlWebpackPlugin' }),
        new ExtractTextWebpackPlugin('style/app.css'),
        new webpack.optimize.CommonsChunkPlugin({
          name: 'vendor', // Specify the common bundle's name.
          filename: 'vendor.js',
          minChunks: function (module) {
            // this assumes your vendor imports exist in the node_modules directory
            return module.context && module.context.indexOf('node_modules') !== -1;
          }
        }),
        //CommonChunksPlugin will now extract all the common modules from vendor and main bundles
        new webpack.optimize.CommonsChunkPlugin({
          name: 'manifest' //But since there are no more common modules between them we end up with just the runtime code included in the manifest file
        })
    ]
};
