const { createProxyMiddleware } = require('http-proxy-middleware');  //注意写法，这是1.0以后的版本，最好按抄

module.exports = function (app) {
    app.use(createProxyMiddleware('/api',
        {
            target: 'https://i.maoyan.com',
            changeOrigin: true,
            secure: false, // 是否验证证书
            ws: false, // 启用websocket
        }
    ));
};
