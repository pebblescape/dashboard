import ProtectedRoute from 'dashboard/routes/protected';

export default ProtectedRoute.extend({
  model: function() {
    return this.store.find('app');
  }
});
