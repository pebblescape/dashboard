import Ember from 'ember';

export default {
  name: "api-header",
  initialize: function() {
    Ember.$.ajaxPrefilter(function(options, originalOptions, jqXHR) {
      jqXHR.setRequestHeader('Authorization', 'Basic OjhiZmU1ZTdkYjlmZWI4NDI0NDdjZjA5ZjY3ZDhiNzVi')
    });
  }
};
