Meteor.publish('posts', function () {
  return Posts.find({}, {fields: {
    'node.title': true,
    'node.field_post_image.und.title': true,
    'node.original.field_post_image.und.filename': true,
    'node.field_post_youtube': true,
    'node.field_post_text': true
  }});
});