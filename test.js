
var Jasmine = require('jasmine');
var SpecReporter = require('jasmine-spec-reporter');

var jrunner  = new Jasmine();
jrunner.env.addReporter(new SpecReporter({
    displaySpecDuration: true,
    displaySuiteNumber: true
}));

jrunner.loadConfigFile('spec/support/jasmine.json'); // load jasmine json configuration

jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
jrunner.execute();