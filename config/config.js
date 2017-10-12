var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'pagchain'
    },
    port: process.env.PORT || 3001,
  },

  test: {
    root: rootPath,
    app: {
      name: 'pagchain'
    },
    port: process.env.PORT || 3001,
  },

  production: {
    root: rootPath,
    app: {
      name: 'pagchain'
    },
    port: process.env.port,
  }
};

module.exports = config[env];
