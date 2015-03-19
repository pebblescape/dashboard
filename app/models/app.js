import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  configVars: DS.attr(),
  buildSize: DS.attr(),
  webUrl: DS.attr(),
  createdAt: DS.attr(),
  updatedAt: DS.attr(),

  owner: DS.belongsTo('user', {async: true})
});
