const path = require('path');

// Setup Import Alias
exports.onCreateWebpackConfig = ({ getConfig, actions }) => {
  const output = getConfig().output || {};

  actions.setWebpackConfig({
    output,
    resolve: {
      alias: {
        components: path.resolve(__dirname, 'src/components'),
        utils: path.resolve(__dirname, 'src/utils'),
        hooks: path.resolve(__dirname, 'src/hooks'),
        //! if you wan to import file like
        // import Test from "@src/components/Test";
        '@src': path.resolve(__dirname, 'src'),
      },
    },
  });
};
