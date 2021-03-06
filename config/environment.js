/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'dashboard',
    environment: environment,
    baseURL: '/',
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
    },

    contentSecurityPolicy: {
      "img-src": "'self' data: app.getsentry.com *",
      "script-src": "'self' 'unsafe-eval' http://*:35729 //cdn.ravenjs.com ",
      "font-src": "'self' http://fonts.gstatic.com",
      "style-src": "'self' 'unsafe-inline' http://fonts.googleapis.com",
      "connect-src": "'self' ws://localhost:35729 ws://0.0.0.0:35729 http://0.0.0.0:4200/csp-report *"
    },

    sentry: {
      skipCdn: false, // skip loading from cdn
      cdn: '//cdn.ravenjs.com',
      dsn: process.env.RAVEN_DSN,
      version: '1.1.16',
      whitelistUrls: [ 'api.pebblesinspace.com' ],
      development: true // Set to true, to disable while developing
    },

    sassOptions: {
      sourceMap: true
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  ENV['simple-auth'] = {
    authorizer: 'simple-auth-authorizer:devise'
  }

  ENV['simple-auth-devise'] = {
    serverTokenEndpoint: '/login',
    tokenAttributeName: 'api_key',
    identificationAttributeName: 'email'
  }

  if (environment === 'production') {

  }

  return ENV;
};
