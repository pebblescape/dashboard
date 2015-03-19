import ProtectedRoute from 'dashboard/routes/protected';

export default ProtectedRoute.extend({
  model: function(params) {
    return this.store.find('app', { name: params.name });
  }
});
