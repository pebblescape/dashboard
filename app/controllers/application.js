/* global md5 */
import Ember from 'ember';

export default Ember.Controller.extend({
  adminnav: false,

  refreshFavorites: function() {
    this.set('model.favorites', this.store.find('favorite'));
  },

  userGravatar: function() {
    if (this.get('session.isAuthenticated')) {
      return 'http://www.gravatar.com/avatar/' + md5(this.get('session.content.email')) + '?d=retro&s=30';
    }
  }.property('session.content').readOnly(),

  actions: {
    closeAdminnav: function() {
      this.set('adminnav', false);
    },

    toggleAdminnav: function() {
      this.toggleProperty('adminnav');
    }
  }
});
