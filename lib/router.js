Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound',
  waitOn: function(){ return Meteor.subscribe('posts'); }
});

Router.map(function() {
  this.route('views_RenderController', {
    path: '/',
    onBeforeAction: function() {
      $('body').addClass('home');
    },
    onStop: function() {
      $('body').removeClass('home');
    }
  });
  this.route('postsList', {
    path: '/posts',
    onBeforeAction: function() {
      $('body').addClass('posts');
    },
    onStop: function() {
      $('body').removeClass('posts');
    }
  });
  this.route('postPage', {
    path: '/posts/:_id',
    data: function() { return Posts.findOne(this.params._id); },
    onBeforeAction: function() {
      $('body').addClass('post-page');
    },
    onStop: function() {
      $('body').removeClass('post-page');
    }
  });
});

Router.onBeforeAction('dataNotFound', {only: 'postPage'});