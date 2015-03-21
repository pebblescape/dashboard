export default function(){
  // Admin tabs
  this.transition(
    this.fromRoute('admin.addons'),
    this.toRoute('admin.upgrades'),
    this.use('toLeft'),
    this.reverse('toRight')
  );

  this.transition(
    this.fromRoute('admin.addons'),
    this.toRoute('admin.users'),
    this.use('toLeft'),
    this.reverse('toRight')
  );

  this.transition(
    this.fromRoute('admin.users'),
    this.toRoute('admin.upgrades'),
    this.use('toLeft'),
    this.reverse('toRight')
  );
};
