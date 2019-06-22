const { resolve } = require("path");

module.exports = (env, argv) => {
    const mode = argv.mode || "production";

    return {
        mode,

        entry: {
            index: [
                require.resolve("@kebaball-packages/webview")
            ],
        },

        resolve: {
            extensions: [".mjs", ".js", ".svelte"],
        },

        output: {
            path: resolve(__dirname, "..", "dist"),
            filename: "[name].[hash].js",
        },

        module: {
            rules: require("./rules")(mode),
        },

        plugins: [
            new (require("clean-webpack-plugin").CleanWebpackPlugin),

            new (require("html-webpack-plugin"))({
                template: require.resolve("@kebaball-packages/webview/src/index.html"),
                chunks: ["index"],
            }),

            new (require("mini-css-extract-plugin"))({
                filename: "[name].[hash].css",
            }),
        ],
    };
};
