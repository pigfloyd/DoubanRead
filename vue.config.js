const CompressionPlugin = require('compression-webpack-plugin')

module.exports = {
    publicPath: "./",
    outputDir: "dist",
    assetsDir: "assets", // 静态资源目录 (js, css, img, fonts)
    productionSourceMap: false, // 生产环境 sourceMap，不生成map文件
    lintOnSave: false,//关闭eslint
    devServer: {
        proxy: {
            '/api': {
                target: "http://localhost:3000",
                ws: true,
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                } 
            }
        }
    },
    configureWebpack: config => {
        if (process.env.NODE_ENV === 'production') { //判断是生产环境
          return{
            plugins: [
              new CompressionPlugin({
                algorithm: 'gzip',//开启gzip
                test: /\.js$|\.html$|.\css/, // 匹配文件名
                threshold: 10240, // 对超过10k的数据压缩
                deleteOriginalAssets: false // 不删除源文件
              })
            ]
        }
      }
    }
}