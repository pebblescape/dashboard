import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('login');
  this.route('index', {path: '/'});
  this.route('apps');
  this.route('addons');
  this.route('users');
  this.route('admin');
});

export default Router;
