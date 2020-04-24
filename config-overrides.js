const { override, fixBabelImports, addLessLoader } = require("customize-cra");

module.exports = override(
  fixBabelImports("import", {
    libraryName: "antd",
    librarDirectory: "es",
    style: true,
  }),
  addLessLoader({
    javascriptEnabled: true,
  })
);
