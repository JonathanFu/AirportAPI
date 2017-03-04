var AirportFilter = require('../controller/airportFilter');
var IndexHandler = require('../controller/indexHandler');
var DownloadHandler = require('../controller/download');

module.exports = function(app){

  app.get('/', IndexHandler);
  app.get('/api', IndexHandler);
  app.get('/api/download', DownloadHandler.download);

  app.get('/api/airports/', AirportFilter.filterByQuery); // Return all airports or filtered by request parameters (req.query)
  app.get('/api/airports/:code/:countryCode/:internationFlag/:regionalFlag', AirportFilter.filterByQuery); // Return all airports or filtered by request parameters (req.query)

  app.get('/api/airports/code/:code', AirportFilter.filterByCode); // Return airports by airport code
  app.get('/api/airports/country/:countryCode', AirportFilter.filterByCountry); // Return airports by country code
  app.get('/api/airports/international/:internationalFlag', AirportFilter.filterByInternationalFlag); // Return airports by international_airport flag
  app.get('/api/airports/regional/:regionalFlag', AirportFilter.filterByRegionalFlag); // Return airports by regional_airport flag
};