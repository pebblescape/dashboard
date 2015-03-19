import config from 'dashboard/config/environment';
import Ember from 'ember';

export default Ember.Controller.extend({
  devEnv: config.environment === 'development',

  status: function() {
    return this.get('model.status') || this.get('model.jqXHR.status');
  }.property('model.status', 'model.jqXHR.status'),

  detail: function() {
    return this.get('model.responseText') || this.get('model.jqXHR.responseText');
  }.property('model.responseText', 'model.jqXHR.responseText'),

  showUnhandled: function() {
    return this.devEnv && [400, 500].indexOf(this.get('status')) > -1;
  }.property('model.status', 'model.jqXHR.status'),

  errorMsg: function() {
    var status = this.get('status');
    switch (status) {
      case 500:
        return 'Pebbblescape API internal server error';
      case 400:
        return 'Bad request made to Pebbblescape API';
    }
  }.property('status')
});
