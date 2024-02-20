/**
 * For more configuration, please refer to https://angular.io/guide/build#proxying-to-a-backend-server
 *
 * 更多配置描述请参考 https://angular.cn/guide/build#proxying-to-a-backend-server
 *
 * Note: The proxy is only valid for real requests, Mock does not actually generate requests, so the priority of Mock will be higher than the proxy
 */
module.exports = {
  /**
   * The following means that all requests are directed to the backend `https://localhost:9000/`
   */
  '/api': {
    // target: 'http://172.16.3.101:10168/',
    target: 'http://172.16.3.221:10398/',
    // target: 'http://117.175.169.203:10168/',
    // target: 'http://192.168.31.203:10198/',
    secure: false, // Ignore invalid SSL certificates
    changeOrigin: true,
    logLevel: 'debug',
    pathRewrite: { '^/api': '' }
  },
  '/canvasServer': {
    target: 'http://192.168.31.211:4199/',
    secure: false, // Ignore invalid SSL certificates
    changeOrigin: true,
    logLevel: 'debug',
    pathRewrite: { '^/canvasServer': '' }
  }
};
