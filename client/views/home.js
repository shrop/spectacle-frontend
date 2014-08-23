Session.setDefault('currentTemplate', 'content1');
Session.setDefault('currentTransition', 'opacity');
Session.setDefault('slideDefaultInterval', 5000);

Template.views_RenderController.currentTemplate = function() {
  return Session.get('currentTemplate');
};

Template.views_RenderController.helpers({
  'showTemplate': function() {
    return Template[this.name];
  },
  'getTransition': function() {
    return Session.get('currentTransition');
  }
});

Template.views_RenderController.rendered = function () {
  Deps.autorun(function () {
    var currentTemplate = Session.get('currentTemplate');
    changeImage(currentTemplate);
  });
};

function getContentNames() {
  return [
    'content1',
    'content2',
    'content3',
    'content4',
    'content5',
    'content6'
  ];
}

function getCustomIntervals() {
  return {
    content6: 15000 //5.5 * 60 * 1000
  };
}

function setCustomInterval(contentName) {
  var customIntervals = getCustomIntervals();
  if (contentName in customIntervals) {
    return customIntervals[contentName];
  }
  return 5000;
}

function getRandomTemplateName() {
  var textArray = getContentNames();
  var randomNumber = Math.floor(Math.random()*textArray.length);
  return textArray[randomNumber];
}

function changeImage(currentTemplate) {
  var randomTemplate = getRandomTemplateName();

  while (randomTemplate === currentTemplate) {
    randomTemplate = getRandomTemplateName();
  }
  var timeout = setCustomInterval(currentTemplate);
  setTimeout(function () { Session.set('currentTemplate', randomTemplate) }, timeout);
}
