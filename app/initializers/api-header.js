import Ember from 'ember';

export default {
  name: "api-header",
  initialize: function(container) {
    Ember.$.ajaxPrefilter(function(options, originalOptions, xhr) {
      if (!options.crossDomain) {
        options.accepts['*'] = 'application/vnd.pebblescape+json; version=1';
      }
    });
  }
};
