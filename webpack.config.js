module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "app.js",
        path: __dirname + "/dist"
    },
    module: {
        rules: [
            {
                test: /\.rs$/,
                use: {
                    loader: "rust-wasm-loader",
                    options: {
                        path: "dist"
                    }
                }
            }
        ]
    },
    externals: {
        "fs": true,
        "path": true
    }
}