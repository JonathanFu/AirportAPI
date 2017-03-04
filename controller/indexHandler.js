
var apiSpec = {
  'API Specification': {
    '/': 'Show API Specification',
    '/airports': 'Show API Specification',
    '/api/airports': 'Return all airports or filtered by request parameters. E.g. /api/airports?code=CAN&currency_code=CN&international_airport=true&regional_airport=false',
    '/api/airports/code/:code': 'Return airports by filtering airport code',
    '/api/airports/country/:countryCode': 'Return airports by filtering country code',
    '/api/airports/international/:internationalFlag': 'Return airports by filtering international_airport flag',
    '/api/airports/regional/:regionalFlag': 'Return airports by filtering regional_airport flag'
  }
};


module.exports = function (req, res, next) {
  res.json(apiSpec);
};