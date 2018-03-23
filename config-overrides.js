const { injectBabelPlugin } = require('react-app-rewired');
const rewireLess = require('react-app-rewire-less');

module.exports = function override(config, env) {
  // do stuff with the webpack config...
  config = injectBabelPlugin(['import', { libraryName: 'antd', style: true }], config); // change importing css to less
  config = rewireLess.withLoaderOptions({
    modifyVars: {
      '@layout-header-background': '#282B2D',
      '@layout-body-background': '#000',
      '@layout-header-padding': '0',
      '@menu-dark-item-selected-bg': '#B21818',
    },
})(config, env);
  return config;
};
