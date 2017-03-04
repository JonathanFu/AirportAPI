
exports.getAllData = function () {
  return require('./apiHandler').call(null, require('../config/config').QANTAS_API_URL);
};
