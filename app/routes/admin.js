import Upgrade from 'dashboard/models/upgrade';
import ProtectedRoute from 'dashboard/routes/protected';

export default ProtectedRoute.extend({
  model: function(/*params*/) {
    return Upgrade.find();
  },

  afterModel: function(model) {
    var self = this;

    return model.findLatest().then(function() {
      return model.findProgress().then(function(progress) {
        self.set("progress", progress);
      });
    });
  },

  setupController: function(controller, model) {
    controller.reset();
    controller.setProperties({
      model: model,
      output: this.get('progress.logs'),
      percent: this.get('progress.percentage')
    });
    controller.startBus();
  },

  deactivate: function() {
    this.controllerFor('admin').stopBus();
  }
});
