Template.tTable.helpers({
  links: function () {
    return Links.find();
  },
  sEdit: function() {
    return Session.get('sEdit');
  }
});

Template.tTable.events({
  'click .remove': function () {
    Links.remove(this._id);
  },
  'click .edit': function() {
    Session.set('sEdit', true);
  },
  'click .btnUpdate': function(evt) {
    var urlForm = evt.target.url.value;
    var tagForm = evt.target.tag.value;
    Links.update(this._id, {url: urlForm, tag: tagForm});
    Session.set('sEdit', false);
  }
});