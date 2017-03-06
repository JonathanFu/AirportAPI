var AirportFilterCtrl = require('../controller/airportFilterCtrl');
var IndexCtrl= require('../controller/indexCtrl');

module.exports = function(app){

  app.get('/', IndexCtrl);
  app.get('/api', IndexCtrl);
  app.get('/api/v1', IndexCtrl);

  app.get('/api/v1/airports/', AirportFilterCtrl.filterByQuery); // Return all airports or filtered by request parameters (req.query)
  app.get('/api/v1/airports/:code/:countryCode/:internationFlag/:regionalFlag', AirportFilterCtrl.filterByQuery); // Return all airports or filtered by request parameters (req.query)

  app.get('/api/v1/airports/code/:code', AirportFilterCtrl.filterByCode); // Return airports by airport code
  app.get('/api/v1/airports/country/:countryCode', AirportFilterCtrl.filterByCountry); // Return airports by country code
  app.get('/api/v1/airports/international/:internationalFlag', AirportFilterCtrl.filterByInternationalFlag); // Return airports by international_airport flag
  app.get('/api/v1/airports/regional/:regionalFlag', AirportFilterCtrl.filterByRegionalFlag); // Return airports by regional_airport flag
};