module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
      ? '/tech-assignment/'
      : '/',
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
          @import "@/assets/styles/variables.scss";
        `,
      },
    },
  },
}
