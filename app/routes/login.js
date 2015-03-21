import Ember from 'ember';
import ApplicationRouteMixin from 'simple-auth/mixins/application-route-mixin';

export default Ember.Route.extend(ApplicationRouteMixin, {
  beforeModel: function() {
    if (this.get('session.isAuthenticated')) {
      this.transitionTo('apps');
    }
  },

  actions: {
    sessionAuthenticationSucceeded: function() {
      let appController = this.controllerFor('application');

      if (Ember.isEmpty(appController.get('model.favorites'))) {
        appController.refreshFavorites();
      }

      this._super();
    },

    sessionAuthenticationFailed: function(err){
      if (err.error) {
        this.controllerFor('login').set('error', err.error);
      }
    }
  }
});
