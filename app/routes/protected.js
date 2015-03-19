/* global Raven */
import Ember from 'ember';
import ApplicationRoute from 'dashboard/routes/application';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';

export default ApplicationRoute.extend(AuthenticatedRouteMixin, {
  actions: {
    error: function(err, transition){
      // When API token is invalidated, flush session and force login
      if (err.status === 403 || err.errorThrown === "Forbidden") {
        this.get('session').invalidate();
        return;
      }

      return true;
    }
  }
});
