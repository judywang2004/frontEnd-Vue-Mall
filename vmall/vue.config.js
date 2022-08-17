const { defineConfig } = require('@vue/cli-service');
const { VantResolver } = require('unplugin-vue-components/resolvers');
const ComponentsPlugin = require('unplugin-vue-components/webpack');

module.exports = defineConfig({
  transpileDependencies: true
})

module.exports = {
  configureWebpack: {
    plugins: [
      ComponentsPlugin({
        resolvers: [VantResolver()],
      }),
    ],
  },
};

module.exports = {
  devServer: {
    // open: process.platform === "darwin",
    host: "localhost",
    port: 8080,
    https: false,
    // hotOnly: false,
    // overlay: {
    //   warnings: false,
    //   errors: false
    // },
    proxy: { // cross region
      "/api": {
        // 目标 API 地址
        // target: process.env.VUE_APP_URL,
        target:'http://localhost:8081/',
        // 如果要代理 websockets
        ws: true,
        changeOrigin: true, // 允许websockets跨域
        pathRewrite: {
          // 正则匹配，把到/devapi之前的所有替换成空
          '^/api': 'http://localhost:8081'
        }
      }
    },
    // 代理转发配置，用于调试环境
    // disableHostCheck: true
  }
}
