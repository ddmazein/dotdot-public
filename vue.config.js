const { defineConfig } = require("@vue/cli-service");
const path = require("path");

module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: true,
  configureWebpack: {
    resolve: {
      alias: {
        "@components": path.resolve(__dirname, "src/components/"),
      },
    },
  },
});
