import Ember from 'ember';
import LoginControllerMixin from 'simple-auth/mixins/login-controller-mixin';

export default Ember.Controller.extend(LoginControllerMixin, {
  authenticator: 'simple-auth-authenticator:devise',
  error: null,

  isDisabled: function() {
    return Ember.isBlank(this.get('identification')) || Ember.isBlank(this.get('password'));
  }.property('identification', 'password'),

  clearError: function() {
    this.set('error', null);
  }.observes('identification', 'password')
});
