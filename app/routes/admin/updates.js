import Repo from 'dashboard/models/repo';
import ProtectedRoute from 'dashboard/routes/protected';

export default ProtectedRoute.extend({
  model: function() {
    return Repo.findAll();
  },

  setupController: function(controller, model) {
    controller.setProperties({ model: model, upgrading: null });

    model.forEach(function(repo) {
      repo.findLatest();
      if (repo.get('upgrading')) {
        controller.set('upgrading', repo);
      }
    });
  },

  actions: {
    upgrade: function(repo) {
      if (repo.get('name') == 'dashboard') {
        if (repo.get('upgrading')) { return; }
        repo.startUpgrade().then(function(){
          repo.set('upgrading', false);

          bootbox.dialog({
            message: "Reloading page to finish upgrading",
            title: "Upgrade complete",
            buttons: {
              success: {
                label: "OK",
                className: "btn-success",
                callback: function() {
                  location.reload();
                }
              }
            }
          });
        });
        return;
      }

      this.transitionTo('admin.update', repo);
    }
  }
});
