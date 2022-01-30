module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/blog/' : '/',
  transpileDependencies: [
    'vuetify',
  ],
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.md$/i,
          loader: "raw-loader",
        },
      ],
    },
  },
};
