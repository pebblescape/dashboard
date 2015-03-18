import ApplicationRoute from 'dashboard/routes/application';

export default ApplicationRoute.extend({
  actions: {
    sessionAuthenticationFailed: function(err){
      if (err.error) {
        this.controllerFor('login').set('error', err.error);
      }
    }
  }
});
