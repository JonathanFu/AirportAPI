
var data = require('../data/airports');

exports.getAllData = function () {
  // return require('./apiHandler').call(null, require('../config/config').QANTAS_API_URL);
  return Promise.resolve(data) ;
};
