// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

const { SpecReporter } = require('jasmine-spec-reporter');

exports.config = {
  allScriptsTimeout: 11000,
  specs: [
    './src/**/*.e2e-spec.ts'
  ],
  capabilities: {
    'browserName': 'chrome',
    'chromeOptions': {
      args: ['--disable-browser-side-navigation']
    }
    // 'browserName': 'firefox',
    // 'moz:firefoxOptions': {
    //   'args': ['--safe-mode']
    // }
  },
  seleniumAddress: 'http://192.168.99.100:4444/wd/hub',
  // seleniumAddress: 'http://localhost:4444/wd/hub',
  directConnect: false,
  // baseUrl: 'https://acquire.qa.altusplatform.com/',
  framework: 'jasmine',
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 60000,
    print: function () { }
  },
  onPrepare() {
    require('ts-node').register({
      project: require('path').join(__dirname, './tsconfig.e2e.json')
    });
    jasmine.getEnv().addReporter(new SpecReporter({ spec: { displayStacktrace: true } }));
  }
};