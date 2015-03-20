import Ember from 'ember';

export default {
  name: "api-header",
  initialize: function() {
    Ember.$.ajaxPrefilter(function(options) {
      if (!options.crossDomain) {
        options.accepts['*'] = 'application/vnd.pebblescape+json; version=1';
      }
    });
  }
};
