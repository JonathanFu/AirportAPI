var getQantasData = require('../services/qantas').getAllData;
var ErrorHandler = require('../error/errorHandler');

exports.filterByQuery = function (req, res, next) {

  var internationalFlag = req.query.international_airport;
  var regionalFlag = req.query.regional_airport;
  if (internationalFlag && internationalFlag !== 'true' && internationalFlag !== 'false') return ErrorHandler.handleCheckedError(new ErrorHandler.InvalidParameterError('InternationalFlag should be `true` or `false` (Case insensitive)'), res);
  if (regionalFlag && regionalFlag !== 'true' && regionalFlag !== 'false') return ErrorHandler.handleCheckedError(new ErrorHandler.InvalidParameterError('RegionalFlag should be `true` or `false` (Case insensitive)'), res);

  getQantasData().then(function (data) {
    var code = req.query.code;
    var countryCode = req.query.country_code;

    var airports = data.airports.filter(function (airport) {
      return (code ? airport.code === code.toUpperCase() : true)
        && (countryCode ? airport.country.code === countryCode.toUpperCase() : true)
        && (internationalFlag ? airport.international_airport === (internationalFlag.toLowerCase() === 'true') : true)
        && (regionalFlag ? airport.regional_airport === (regionalFlag.toLowerCase() === 'true') : true);
    });

    res.json({airports: airports});
  }).catch(function (err) {
    return ErrorHandler.handleCheckedError(err, res);
  });

};

exports.filterByCode = function (req, res, next) {

  if(!req.params.code) return ErrorHandler.handleCheckedError(new ErrorHandler.InvalidParameterError('Airport code cannot be blank.'), res);

  getQantasData().then(function (data) {
    var airports = data.airports.filter(function (airport) {
      return airport.code === req.params.code.toUpperCase();
    });
    res.json({airports: airports});

  }).catch(function (err) {
    return ErrorHandler.handleCheckedError(err, res);
  });

};


exports.filterByCountry = function (req, res, next) {

  if(!req.params.countryCode) return ErrorHandler.handleCheckedError(new ErrorHandler.InvalidParameterError('Country code cannot be blank.'), res);

  getQantasData().then(function (data) {
    var airports = data.airports.filter(function (airport) {
      return airport.country.code === req.params.countryCode.toUpperCase();
    });
    res.json({airports: airports});

  }).catch(function (err) {
    return ErrorHandler.handleCheckedError(err, res);
  });

};

exports.filterByInternationalFlag = function (req, res, next) {

  if(!req.params.internationalFlag) return ErrorHandler.handleCheckedError(new ErrorHandler.InvalidParameterError('InternationalFlag (true/false) cannot be blank.'), res);

  var internationalFlag = req.params.internationalFlag.toLowerCase();
  if(internationalFlag !== 'true' && internationalFlag !== 'false') return ErrorHandler.handleCheckedError(new ErrorHandler.InvalidParameterError('InternationalFlag should be `true` or `false` (Case insensitive)'), res);

  getQantasData().then(function (data) {

    var airports = data.airports.filter(function (airport) {
      return airport.international_airport === (internationalFlag === 'true');
    });
    res.json({airports: airports});
  }).catch(function (err) {
    return ErrorHandler.handleCheckedError(err, res);
  });

};


exports.filterByRegionalFlag = function (req, res, next) {

  if(!req.params.regionalFlag) return ErrorHandler.handleCheckedError(new ErrorHandler.InvalidParameterError('RegionalFlag (true/false) cannot be blank.'), res);

  var regionalFlag = req.params.regionalFlag.toLowerCase();
  if(regionalFlag !== 'true' && regionalFlag !== 'false') return ErrorHandler.handleCheckedError(new ErrorHandler.InvalidParameterError('RegionalFlag should be `true` or `false` (Case insensitive)'), res);

  getQantasData().then(function (data) {

    var airports = data.airports.filter(function (airport) {
      return airport.regional_airport === (regionalFlag === 'true');
    });
    res.json({airports: airports});
  }).catch(function (err) {
    return ErrorHandler.handleCheckedError(err, res);
  });

};