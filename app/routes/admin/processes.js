import ProcessList from 'dashboard/models/process-list';
import ProtectedRoute from 'dashboard/routes/protected';

export default ProtectedRoute.extend({
  model: function() {
    return ProcessList.find();
  },

  deactivate: function() {
    this.controllerFor('admin.processes').stopRefresh();
  }
});
