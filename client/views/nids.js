Template.nids.helpers({
  nids: function () {
    return Posts.find({}, {"node.nid": 1});
  }
});
