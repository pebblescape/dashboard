import Ember from 'ember';

export default Ember.Handlebars.makeBoundHelper(function(sha1, sha1latest, url) {
  if (Ember.isNone(url)) { return; }
  return new Ember.Handlebars.SafeString("(<a target='_blank' href='" + url + "/compare/"+sha1+"..."+sha1latest+"'>" + sha1latest + "</a>)");
});
