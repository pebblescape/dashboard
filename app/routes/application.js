import Ember from 'ember';
import ApplicationRouteMixin from 'simple-auth/mixins/application-route-mixin';

export default Ember.Route.extend(ApplicationRouteMixin, {
  model: function() {
    if (this.get('session.isAuthenticated')) {
      return Ember.RSVP.hash({
        favorites: this.store.find('favorite')
      });
    } else {
      return {};
    }
  }
});
