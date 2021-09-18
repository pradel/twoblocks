const BundleAnalyzerPlugin =
  require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  devServer: (devServerConfig) => {
    /**
     * Needed to allow blockstack to read the manifest.json file when we login the user
     */
    devServerConfig.headers = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
    };
    return devServerConfig;
  },
  webpack: {
    configure: (webpackConfig) => {
      if (process.env.ANALYZE) {
        webpackConfig.plugins.push(new BundleAnalyzerPlugin());
      }

      return webpackConfig;
    },
  },
};
