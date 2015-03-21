import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),

  app: DS.belongsTo('app', {async: true})
});
