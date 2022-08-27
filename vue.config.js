// vue.config.js
module.exports = {
  devServer: {
    port: 8081,
  },
  outputDir: 'docs',
  publicPath: process.env.NODE_ENV === 'production' ? '/WelloTools-site/docs/' : '/',
};
