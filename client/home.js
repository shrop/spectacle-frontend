Session.setDefault('currentTemplate', 'home1');
Session.setDefault('currentTransition', 'opacity');

Template.views_RenderController.currentTemplate = function() {
  return Session.get('currentTemplate');
}

Template.views_RenderController.helpers({
  'showTemplate': function() {
    return Template[this.name];
  },
  'getTransition': function() {
    return Session.get('currentTransition');
  },
});

function changeImage() {
  var textArray = [
    'home1',
    'home2',
    'home3',
    'home4',
    'home5',
    'home6'
  ];

  var currentTemplate = Session.get('currentTemplate');
  var randomNumber = Math.floor(Math.random()*textArray.length);

  while (textArray[randomNumber] === currentTemplate) {
    var randomNumber = Math.floor(Math.random()*textArray.length);
  }

  return Session.set('currentTemplate', textArray[randomNumber]);
}

Meteor.setInterval(changeImage, 5000);
