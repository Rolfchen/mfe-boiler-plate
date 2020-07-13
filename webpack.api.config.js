const path = require("path");
const webpack = require("webpack");
const WebpackShellPlugin = require("webpack-shell-plugin");
const dotenv = require("dotenv");
const nodeExternals = require("webpack-node-externals");

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
    entry: "./srv/app.ts",
    mode: NODE_ENV,
    target: "node",
    output: {
      path: path.resolve(__dirname, buildDir),
      filename: "app.js",
    },
    node: {
      __dirname: false,
      __filename: false,
    },
    module: {
      rules: [
        {
          test: /\.ts$/,
          use: ["ts-loader"],
        },
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
          },
        },
      ],
    },
    resolve: {
      extensions: [".ts", ".js"],
    },
    watch: NODE_ENV === "local",
    externals: [nodeExternals()],
    plugins:
      NODE_ENV === "local"
        ? [
            new WebpackShellPlugin({
              onBuildEnd: ["npx nps server.run"],
            }),
            new webpack.DefinePlugin(envVars),
          ]
        : [new webpack.DefinePlugin(envVars)],
  };
};
