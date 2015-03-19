import DS from 'ember-data';

export default DS.ActiveModelAdapter.extend({
  headers: {
    'Accept': 'application/vnd.pebblescape+json; version=1'
  }
});
