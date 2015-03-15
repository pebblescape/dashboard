/* global Raven */
import Ember from 'ember';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  actions: {
    error: function(err){
      // When API token is invalidated, flush session and force login
      if (err.status === 403 || err.errorThrown === "Forbidden") {
        this.get('session').invalidate();
        return;
      }

      Raven.captureException(err);
    }
  }
});
