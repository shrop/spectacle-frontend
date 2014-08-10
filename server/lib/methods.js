Meteor.methods({
  addPost: function (title, body) {
    Posts.insert({title: title, body: body});
  }
});
