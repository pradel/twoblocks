module.exports = {
  devServer: devServerConfig => {
    /**
     * Needed to allow blockstack to read the manifest.json file when we login the user
     */
    devServerConfig.headers = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
    };
    return devServerConfig;
  },
};
