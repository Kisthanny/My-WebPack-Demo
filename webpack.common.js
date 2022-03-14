// const path = require("path")
module.exports = {
    entry: {
        main: "./src/index.js",
        vendor: "./src/vendor.js"
    },
    module: {
        rules: [
            // {
            //     test: /\.scss$/,
            //     use: ["style-loader", //3. Inject style into DOM
            //         "css-loader", //2. Turns css into commonjs
            //         "sass-loader" //1. Turns sass to css
            //     ]
            // },
            {
                test: /\.html$/,
                use: ["html-loader"]
            },
            // file loader deprecated in Web5 now use Asset Module (built in) instead
            // {
            //     test: /\.(svg|png|jpe?g|gif)$/i,
            //     use: {
            //         loader: "file-loader",
            //         options: {
            //             name: "[name].[hash].[ext]",
            //             outputPath: "imgs",
            //         }
            //     }
            // }
            {
                test: /\.(svg|png|jpe?g|gif)$/i,
                type: "asset/resource",
            }
        ]
    },
};