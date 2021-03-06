## This project is a simple airport API application based on Qantas API.
Run `npm install` to install dependencies.

## Start Server
Run `npm start` to start server, then go to `http://localhost:3000/` to get the API specification shown as below.

```json
{
  "API Specification": {
    "/": "Show API Specification",
    "/api": "Show API Specification",
    "/api/v1": "Show API Specification",
    "/api/v1/airports?code={code}&country_code={country_code}&international_airport={true|false}&regional_airport={true|false}": "Return airport by filtered by request parameters (optional). Return all airports if there is no parameter",
    "/api/v1/airports/code/:code": "Return airports by filtering airport code",
    "/api/v1/airports/country/:countryCode": "Return airports by filtering country code",
    "/api/v1/airports/international/:internationalFlag": "Return airports by filtering international_airport flag",
    "/api/v1/airports/regional/:regionalFlag": "Return airports by filtering regional_airport flag"
  }
}
```


The API supports paths including both single parameter only and multiple parameters.

### Filtered by multiple parameters (optional): 
All parameters are optional. It will return all if there is no parameter.

```
http://localhost:3000/api/v1/airports?code=CAN&country_code=CN&international_airport=true&regional_airport=false
```

### Filtered by single parameter: 
* Get Airport list by filtering airport code[CAN] only.
```
http://localhost:3000/api/v1/airports/code/CAN
```
* Get Airport list by filtering country code[CN] only.
```
http://localhost:3000/api/v1/airports/country/CN
```
* Get Airport list by filtering international_airport[true] only.
```
http://localhost:3000/api/v1/airports/international/true
```
* Get Airport list by filtering regional_airport[true] only.
```
http://localhost:3000/api/v1/airports/regional/true
```


## Unit Test (Jasmine)
Rum `npm test` to start unit test, you can check the test result on console log.

```
  1 Test controller/airportFilter.js
    ✓ Should return airport data while calling AirportFilter.filterByQuery with airport code[CAN], country_code[CN], international_airport[true], regional_airport[false] (5 secs)
.    ✓ Should return no data while calling AirportFilter.filterByQuery with invalid airport code[XXXX] (4 secs)
.    ✓ Should return data while calling AirportFilter.filterByCode with airport code[CAD] (4 secs)
.    ✓ Should return InvalidParameterError while calling AirportFilter.filterByCode without airport code (0.001 sec)
```
