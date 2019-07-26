console.log('- - - - - - - - - - - - - -');
console.log('Building for: ', process.env.NODE_ENV);
console.log('- - - - - - - - - - - - - -');
console.log('');
switch (process.env.NODE_ENV) {
    case 'prod':
    case 'production':
      module.exports = require('./config/webpack.prod');
      break;
    case 'prod-aot':
      module.exports = require('./config/webpack.prod.aot');
      break;
    case 'test':
    case 'testing':
      module.exports = require('./config/webpack.test');
      break;
    case 'dev':
    case 'development':
    default:
      module.exports = require('./config/webpack.dev');
  }