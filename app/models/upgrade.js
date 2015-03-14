import ajax from "ic-ajax";
import Ember from 'ember';

var loaded = null;

var Upgrade = Ember.Object.extend({

  upToDate: function() {
    return !this.get('upgrading') & (this.get('version') === this.get('latest.version'));
  }.property('upgrading', 'version', 'latest.version'),

  shouldCheck: function() {
    if (Ember.isNone(this.get('version'))) { return false; }
    if (this.get('checking')) { return false; }

    // Only check once every minute
    var lastCheckedAt = this.get('lastCheckedAt');
    if (lastCheckedAt) {
      var ago = new Date().getTime() - lastCheckedAt;
      return ago > 60 * 1000;
    }
    return true;
  }.property().volatile(),

  repoAjax: function(url, args) {
    args = args || {};
    args.data = this.getProperties('version', 'branch');
    return ajax(url, args);
  },

  findLatest: function() {
    var self = this;

    return new Ember.RSVP.Promise(function(resolve, reject) {
      if (!self.get('shouldCheck')) { return resolve(); }

      self.set('checking', true);
      self.repoAjax('/api/admin/latest').then(function(result) {
        self.setProperties({
          checking: false,
          lastCheckedAt: new Date().getTime(),
          latest: Ember.Object.create(result.latest)
        });
        resolve();
      }).catch(function(result) {
        reject(result);
      });
    });
  },

  findProgress: function() {
    return this.repoAjax('/api/admin/progress').then(function(result) {
      return result.progress;
    });
  },

  resetUpgrade: function() {
    var self = this;
    return this.repoAjax('/api/admin/upgrade', { type: 'DELETE' }).then(function() {
      self.set('upgrading', false);
    });
  },

  startUpgrade: function() {
    var self = this;
    this.set('upgrading', true);

    return this.repoAjax('/api/admin/upgrade', { type: 'POST' }).catch(function() {
      self.set('upgrading', false);
    });
  }
});

Upgrade.reopenClass({
  find: function() {
    return new Ember.RSVP.Promise(function (resolve, reject) {
      if (loaded) { return resolve(loaded); }

      ajax("/api/admin/gitinfo").then(function(result) {
        loaded = Upgrade.create(result.repo);
        resolve(loaded);
      }).catch(function(result) {
        reject(result);
      });
    });
  },

});

export default Upgrade;
