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
    this.route('addons');
    this.route('users');
    this.route('updates');
    this.route('update', { path: '/update/:id' });
    this.route('processes');
  });

  this.route('not_found', { path: '/*url' });
});

export default Router;
