const path = require("path");
const webpack = require("webpack");
const dotenv = require("dotenv");
const ManifestPlugin = require("webpack-manifest-plugin");
const WebpackShellPlugin = require("webpack-shell-plugin");

module.exports = () => {
  const NODE_ENV = process.env.NODE_ENV;
  const currPath = path.join(__dirname);
  const envPath = NODE_ENV
    ? `${currPath}/.env.${NODE_ENV}`
    : `${currPath}/.env`;
  const env = dotenv.config({ path: envPath }).parsed;
  const envVars = Object.keys(env).reduce((prev, next) => {
    prev[`process.env.${next}`] = JSON.stringify(env[next]);
    return prev;
  }, {});
  const buildDir = NODE_ENV === "local" ? "build" : "dist";
  return {
    entry: {
      main: "./src/index.tsx",
    },
    devtool: "source-map",
    output: {
      path: path.resolve(__dirname, `./${buildDir}/assets`),
      filename: "[name].[hash].bundle.js",
      publicPath: "/",
      umdNamedDefine: true,
      library: "mfeFairFarmsBuyers",
      libraryTarget: "umd",
    },
    optimization: {
      splitChunks: {
        chunks: "all",
        cacheGroups: {
          commons: {
            test: /[\\/]node_modules[\\/]/,
            name: "vendor",
          },
        },
      },
    },
    module: {
      rules: [
        {
          test: /\.(ts|tsx)$/,
          use: ["ts-loader"],
        },
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
          },
        },
        {
          test: /\.html$/,
          use: [
            {
              loader: "html-loader",
            },
          ],
        },
      ],
    },
    resolve: {
      extensions: [".ts", ".js", ".tsx"],
    },
    plugins:
      NODE_ENV === "local"
        ? [
            new ManifestPlugin(),
            new webpack.DefinePlugin(envVars),
            new WebpackShellPlugin({
              onBuildEnd: ["npx nps sandbox.start"],
            }),
          ]
        : [new ManifestPlugin(), new webpack.DefinePlugin(envVars)],
  };
};
