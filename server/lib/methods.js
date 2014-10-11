Meteor.methods({
  addPost: function (data) {
    Posts.insert(data);
  }
});
