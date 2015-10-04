import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  host: 'https://controller.pebblesinspace.com'
  // headers: {
  //   'Accept': 'application/vnd.pebblescape+json; version=1'
  // }
});
