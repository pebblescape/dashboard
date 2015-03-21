/* global $ */
import Ember from 'ember';

export default Ember.View.extend({
  classNames: ['dashboard-wrapper'],
  classNameBindings: ['controller.adminnav:adminnav-visible'],

  removeLoader: function() {
    $("#app-loader").remove();
  }.on("didInsertElement")
});
