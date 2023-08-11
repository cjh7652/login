
const target='http://localhost:8080'

module.exports ={
  chainWebpack:config => {
    config.plugins.delete('prefetch');
  },
  devServer: {
    proxy: {
      '^api': {
        target,
        changeOrigin: true
      },
      '/oauth2.0': {
        target: 'https://nid.naver.com'
      }
    }
  }
}
