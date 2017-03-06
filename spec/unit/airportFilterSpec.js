
var AirportFilter = require('../../controller/airportFilterCtrl');

describe('Test controller/airportFilterCtrl.js', function() {

  var req, res, next = function () {
  };

  beforeEach(function (done) {
    req = {query: {}, params: {}};
    res = {};
    done();
  });


  it("Should return airport data while calling AirportFilter.filterByQuery with airport code[CAN], country_code[CN], international_airport[true], regional_airport[false]", function (done) {
    var code = req.query.code = 'CAN';
    var country_code = req.query.country_code = 'CN';
    var international_airport = req.query.international_airport = 'true';
    var regional_airport = req.query.regional_airport = 'false';

    res.json = function (data) {
      expect(data.airports.length).toBe(1);
      expect(data.airports[0].code).toBe(code);
      expect(data.airports[0].country.code).toBe(country_code);
      expect(data.airports[0].international_airport).toBe(international_airport === 'true');
      expect(data.airports[0].regional_airport).toBe(regional_airport === 'true');
      done();
    };

    AirportFilter.filterByQuery(req, res, next);

  });


  it("Should return no data while calling AirportFilter.filterByQuery with invalid airport code[XXXX]", function (done) {
    var code = req.query.code = 'XXXX';

    res.json = function (data) {
      expect(data.airports.length).toBe(0);
      done();
    };

    AirportFilter.filterByQuery(req, res, next);

  });


  it("Should return data while calling AirportFilter.filterByCode with airport code[CAD]", function (done) {
    var code = req.params.code = 'CAD';

    res.json = function (data) {
      expect(data.airports.length).toBe(1);
      expect(data.airports[0].code).toBe(code);
      done();
    };

    AirportFilter.filterByCode(req, res, next);

  });


  it("Should return InvalidParameterError while calling AirportFilter.filterByCode without airport code", function (done) {
    res.status = function () {return res};
    res.json = function (err) {
      expect(err.name).toBe('InvalidParameterError');
      done();
    };

    AirportFilter.filterByCode(req, res, next);

  });


  afterEach(function (done) {
    // Do clean
    done();
  });

});
