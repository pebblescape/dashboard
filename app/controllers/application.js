import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    xhrtest: function() {
      var posts = this.store.find('app');
    }
  }
});
