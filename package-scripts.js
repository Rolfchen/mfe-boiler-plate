const { series, concurrent, rimraf } = require("nps-utils");

module.exports = {
  scripts: {
    default: "npx nps local",
    test: {
      default: "npx jest",
    },
    sandbox: {
      description: "Local development frontend",
      default: "npx nps sandbox.run",
      build: series(
        rimraf("./build/assets"),
        "cross-env NODE_ENV=local webpack -w --mode development --config ./webpack.components.config.js"
      ),
      "build:deploy": series(
        rimraf("./dist/assets"),
        "cross-env NODE_ENV=development webpack --mode production --config ./webpack.components.config.js"
      ),
      start:
        "cross-env NODE_ENV=development webpack-dev-server --open --mode development --config ./webpack.sandbox.config.js",
      run: series("npx nps sandbox.build", "npx nps sandbox.start"),
    },
    server: {
      description: "Local development server",
      default: series("npx nps server.build", "npx nps server.run"),
      build:
        "cross-env NODE_ENV=local webpack --mode development -w --config ./webpack.api.config.js",
      "build:deploy":
        "cross-env NODE_ENV=development webpack --mode production --config ./webpack.api.config.js",
      run: "cross-env NODE_ENV=development nodemon build/app.js",
    },
    local: {
      description: "Local development",
      default: "npx nps local.run",
      run: concurrent({
        server: "npx nps server",
        sandbox: "npx nps sandbox",
      }),
    },
    deploy: {
      description: "Deployment build",
      default: series(
        "npx nps sandbox.build:deploy",
        "npx nps server.build:deploy"
      ),
    },
  },
};
