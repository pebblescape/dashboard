import Ember from 'ember';

export default Ember.ObjectController.extend({
  autoRefresh: false,
  timer: null,

  performRefresh: function() {
    this.get('model').refresh();
  },

  startRefresh:  function() {
    if (this.get('autoRefresh')) {
      let timer = window.setInterval(() => {
        this.performRefresh();
      }, 3000);
      this.set('timer', timer);
    }
  }.observes('autoRefresh'),

  stopRefresh: function() {
    clearInterval(this.get('timer'));
    this.set('timer', null);
    this.set('autoRefresh', false);
  },

  buttonText: function() {
    if (this.get('autoRefresh')) {
      return 'Stop refreshing';
    }

    return 'Refresh automatically';
  }.property('autoRefresh'),

  actions: {
    toggleRefresh: function() {
      this.toggleProperty('autoRefresh');
    }
  }
});
