import Ember from 'ember';
import ProtectedRoute from 'dashboard/routes/protected';

export default ProtectedRoute.extend({
  model: function(params) {
    return new Ember.RSVP.Promise((resolve) => {
      this.store.find('app', {name: params.name}).then(function(result) {
        resolve(result.get('firstObject'));
      });
    });
  }
});
