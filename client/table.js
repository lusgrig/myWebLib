Template.tTable.helpers({
  links: function () {
    return Links.find();
  }
});

Template.tTable.events({
  'click .remove': function () {
    Links.remove(this._id);
  }
});