const {
  override,
  fixBabelImports,
  overrideDevServer,
  addWebpackAlias,
} = require("customize-cra");
const path = require("path");
const paths = require("react-scripts/config/paths");

paths.appBuild = path.join(path.dirname(paths.appBuild), "dist");

const addCustomize = () => (config) => {
  // 关闭sourceMap
  config.devtool = false;
  // 配置打包后的文件位置
  config.output.path = __dirname + "/dist";
  config.output.publicPath = "./";
  return config;
};
const devServerConfig = () => (config) => {
  return {
    ...config,
    proxy: {
      "/melf_backend": {
        target: "http://gateway-pre.memall.shop/",
        changeOrigin: true,
        pathRewrite: {
          "^/melf_backend": "/",
        },
      },
    },
  };
};
module.exports = {
  webpack: override(
    // 在这里使用 customize-cra 里的一些函数来修改配置
    fixBabelImports("import", {
      libraryName: "antd",
      libraryDirectory: "es",
      style: "css", //或者true, true代表运用less
    }),
    addWebpackAlias({
      ["@"]: path.resolve(__dirname, "src"),
    }),
    addCustomize()
  ),
  devServer: overrideDevServer(
    devServerConfig()
    // watchAll()
  ),
};
