import Ember from 'ember';

export default Ember.Controller.extend({
  userGravatar: function() {
    if (this.get('session.isAuthenticated')) {
      return 'http://www.gravatar.com/avatar/' + md5(this.get('session.content.email')) + '?d=retro&s=30';
    }
  }.property('session.content').readOnly()
});
