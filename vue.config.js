module.exports = {
  // publicPath: process.env.NODE_ENV === 'production' ? '/instructions/' : '/',
  lintOnSave: process.env.NODE_ENV !== 'production',
  devServer: {
    overlay: {
      warnings: true,
      errors: true,
    },
  },
};
