let path = require("path");
let ExtractTextPlugin = require("extract-text-webpack-plugin");
let OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
    entry: [
        "./assets/js/app.js",
        "./assets/scss/app.scss"
    ],
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract({
                    use: [
                        {
                            loader: 'style-loader'
                        },
                        {
                            loader: 'css-loader'
                        }
                    ]
                })
            },
            {
                test: /\.(sass|scss)$/,
                include: path.resolve(__dirname, 'assets/scss'),
                use: ExtractTextPlugin.extract({
                  use: [{
                      loader: "css-loader",
                      options: {
                        sourceMap: false,
                        url: false
                      }
                    },
                    {
                      loader: "sass-loader",
                      options: {
                        sourceMap: false,
                        sassOptions: {
                            outputStyle: 'compressed',
                        },
                      }
                    }
                  ]
                })
              },
        ],
    },
    plugins: [
        new OptimizeCssAssetsPlugin({
            cssProcessorOptions: { discardComments: { removeAll: true } },
            canPrint: true
        }),
        new ExtractTextPlugin('bundle.css')
    ]
};