Links = new Mongo.Collection('links');

if (Meteor.isClient) {
  Template.tAddTableForm.events({
    'submit form': function (evt) {
      evt.preventDefault();
      
      var urlForm = evt.target.url.value;
      var tagForm = evt.target.tag.value;
      
      Links.insert({
        url : urlForm,
        tag : tagForm
      });

      evt.target.url.value = "";
      evt.target.tag.value = "";
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}

