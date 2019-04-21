const config = require('config');

module.exports = function () {
  if (!config.get('dbString')) {
    throw new Error('Environment variable \'dbString\' is not defined');
  }

  if (!config.get('jwtPrivateKey')) {
    throw new Error('Environment variable \'jwt_secret_key\' is not defined');
  }

  if (!config.get('mailServer.auth.user')) {
    throw new Error('Environment variable \'mailServer_user\' is not defined');
  }

  if (!config.get('mailServer.auth.pass')) {
    throw new Error('Environment variable \'mailServer_pass\' is not defined');
  }
}