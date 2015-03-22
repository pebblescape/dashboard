import ajax from "ic-ajax";
import Ember from 'ember';

var ProcessList = Ember.Object.extend({
  refresh: function() {
    var self = this;
    return ajax("/admin/ps").then(function(result) {
      self.set('output', result);
      return self;
    });
  }
});

ProcessList.reopenClass({
  find: function() {
    var list = ProcessList.create();
    return list.refresh();
  }
});

export default ProcessList;
