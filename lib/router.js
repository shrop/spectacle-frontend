Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading'
});

Router.map(function() {
  this.route('rotate', {path: '/'});
  this.route('nids', {path: 'nids'});
});
