const saveUrl = {
  prodUrl: 'http://localhost:3000',
  devUrl: 'http://localhost:3000'
}
const baseUrl = process.env.NODE_ENV === 'production' ? saveUrl['prodUrl'] : saveUrl['devUrl']
module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '' : '',
  outputDir: 'dist/static',
  devServer: {
    // development server port 8000
    public: 'http://localhost:8001',
    disableHostCheck: true,
    port: 8001,
    proxy: {
      '/': {
        target: baseUrl,
        ws: true,
        changeOrigin: true,
        bypass: function(req, res, proxyOptions) {
          if (req.headers.accept.indexOf('html') !== -1) {
            console.log('Skipping proxy for browser request.')
            console.log('res', res)
            console.log('req', req)
            return '/index.html'
          }
        }
        // pathRewrite: { // 路径重写，
        //   '^/pmsadm': '/' // 替换target中的请求地址，也就是说以后你在请求http://api.douban.com/v2/XXXXX这个地址的时候直接写成/api即可。
        // }
      }
    }
  },
  css: {
    loaderOptions: {
      less: {
        javascriptEnabled: true
      }
    }
  },
  productionSourceMap: false,
  lintOnSave: undefined,
  transpileDependencies: []
}
