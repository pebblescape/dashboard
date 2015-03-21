import Ember from 'ember';

export default Ember.View.extend({
  classNames: ['adminnav'],
  templateName: 'adminnav',

  click: function() {
    this.get('controller').send('closeAdminnav');
  }
});
