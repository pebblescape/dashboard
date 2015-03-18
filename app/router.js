import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('login');
  this.route('index', {path: '/'});

  this.resource('apps', function() {
    this.route('app', { path: '/:name' });
  });

  this.resource('admin', function() {
    this.route('upgrades');
    this.route('upgrade', { path: '/upgrade/:id' });
  });

  this.route('addons');
  this.route('users');

  this.route('not_found', { path: '/*url' });
});

export default Router;
