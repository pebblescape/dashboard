import Ember from 'ember';

export default Ember.Controller.extend({
  needs: ['admin'],

  upgradingRepo: Ember.computed.alias('controllers.admin.upgrading'),
  managerRepo: Ember.computed.alias('controllers.admin.managerRepo'),

  upgradeDisabled: function() {
    var upgradingRepo = this.get('upgradingRepo');

    if (Ember.isNone(upgradingRepo)) {
      var managerRepo = this.get('managerRepo');
      if (!managerRepo) { return false; }
      return (!managerRepo.get('upToDate')) && managerRepo !== this.get('model');
    }
    return true;
  }.property('upgradingRepo', 'model', 'managerRepo', 'managerRepo.upToDate')

});
