module.exports = {
  PASSWORD_AUTH: 'X-Cybozu-Authorization',
  API_TOKEN: 'X-Cybozu-API-Token',
  DOMAIN: 'sample.cybozu.com',
  USERNAME: 'your_username',
  PASSWORD: 'your_password',
  PROXY_HOST: 'your_proxy',
  PROXY_PORT: '3128',
  MAIN_PATH: '../../../src/main',
  getPasswordAuth: (userName, password) => {
    return Buffer.from(userName + ':' + password).toString('base64');
  }
};
