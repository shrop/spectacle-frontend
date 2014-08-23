Meteor.methods({
  addPost: function (text) {
    Posts.insert({text: text});
  }
});
