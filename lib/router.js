Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading'
});

Router.map(function() {
  this.route('views_RenderController', {path: '/'});
});
