
nids = Posts.find({}, {"node.nid": 1});

nids.forEach(function(nid) {
  console.log(nid.node.nid);
});
