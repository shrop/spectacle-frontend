Session.setDefault('currentTemplate', 'content6');
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
    'content1',
    'content2',
    'content3',
    'content4',
    'content5',
    'content6'
  ];

  var currentTemplate = Session.get('currentTemplate');
  var randomNumber = Math.floor(Math.random()*textArray.length);

  while (textArray[randomNumber] === currentTemplate) {
    var randomNumber = Math.floor(Math.random()*textArray.length);
  }

  return Session.set('currentTemplate', textArray[randomNumber]);
}

var slideDefaultInterval = Session.get('slideDefaultInterval');
Meteor.setInterval(changeImage, slideDefaultInterval);
