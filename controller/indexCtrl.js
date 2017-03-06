
var apiSpec = {
  'API Specification': {
    '/': 'Show API Specification',
    '/api': 'Show API Specification',
    '/api/v1': 'Show API Specification',
    '/api/v1/airports': 'Return all airports or filtered by request parameters. E.g. /api/v1/airports?code=CAN&currency_code=CN&international_airport=true&regional_airport=false',
    '/api/v1/airports/code/:code': 'Return airports by filtering airport code',
    '/api/v1/airports/country/:countryCode': 'Return airports by filtering country code',
    '/api/v1/airports/international/:internationalFlag': 'Return airports by filtering international_airport flag',
    '/api/v1/airports/regional/:regionalFlag': 'Return airports by filtering regional_airport flag'
  }
};


module.exports = function (req, res, next) {
  res.json(apiSpec);
};