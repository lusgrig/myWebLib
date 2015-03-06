Template.tTable.helpers({
  links: function () {
    return Links.find();
  },

  sEdit : function() {
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

  'click .btnUpdate' : function() {
  	Link.update({this._id});
  	Session.set('sEdit', false);
  }
});