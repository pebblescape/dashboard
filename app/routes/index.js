import ApplicationRoute from 'dashboard/routes/application';

export default ApplicationRoute.extend({
  beforeModel: function() {
    this.transitionTo('apps');
  }
});
