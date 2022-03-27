const { createProxyMiddleware } = require('http-proxy-middleware');  //注意写法，这是1.0以后的版本，最好按抄

module.exports = function (app) {
  app.use(createProxyMiddleware('/api',
    {
      target: 'http://47.93.114.103:6688/manage',
      changeOrigin: true,
      pathRewrite: {
        '^/api': ''
      },
      secure: false, // 是否验证证书
      ws: false, // 启用websocket
    }
  ));
};
