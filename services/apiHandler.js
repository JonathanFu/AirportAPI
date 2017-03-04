var Promise = require('promise');
var APIError = require('../error/errorHandler').APIError;

module.exports = function(url) {

  return new Promise(function (resolve, reject) {

    var lib = url.startsWith('https') ? require('https') : require('http');

    var request = lib.get(url, function (response) {

      if (response.statusCode < 200 || response.statusCode > 299) {
        reject(new APIError('Failed to access to API URL:' + url, response.statusCode));
      }

      var data = '';
      response.on('data', function (chunk) {
        data += chunk;
      });

      response.on('end', function () {
        resolve(JSON.parse(data));
      });
    });

    request.on('error', function (err) {
      reject(new APIError(JSON.stringify(err)));
    });

    request.end();
  });

};
