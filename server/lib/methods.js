Meteor.methods({
  // Accept post node inserts and updates from Drupal.
  Post: function (data) {
    if (data.node.is_new) {
      Posts.insert(data);
    }
    else {
      Posts.update({"node.nid": data.node.nid},{$set:{node:data.node}});
    }
  }
});
