module.exports = function(environment) {
  var ENV = {
    // modulePrefix: '<%= appname %>',
    // podModulePrefix: '<%= appname %>/routes',
    modulePrefix: 'dummy',
    podModulePrefix: 'dummy/routes',
    environment: environment,
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    ENV.apiURL = 'http://localhost:1776';
    ENV['ember-devtools'] = { global: true };
    ENV['ember-cli-mirage'] = { enabled: true };
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';
    ENV.apiURL = 'http://localhost:1776';
    ENV['ember-cli-mirage'] = { enabled: true };

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {
    // ENV.apiURL = "http://localhost:1776";
    ENV['ember-cli-mirage'] = { enabled: false };
  }

  return ENV;
};
