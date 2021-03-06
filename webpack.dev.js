const common = require("./webpack.common")
const { merge } = require("webpack-merge")
const path = require("path")
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = merge(common, {
    mode: "development",
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "dist"),
        assetModuleFilename: "images/[name][ext]"
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ["style-loader", //3. Inject style into DOM
                    "css-loader", //2. Turns css into commonjs
                    "sass-loader" //1. Turns sass to css
                ]
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/template.html"
        })
    ]
});