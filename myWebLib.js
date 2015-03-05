urlCollection = new Mongo.Collection('urlCollection');

if (Meteor.isClient) {
  Template.taddTableForm.events({
    'submit form': function (e) {
      e.preventDefault();
      
      var urlForm = event.target.url.value;
      var tagForm = event.target.tag.value;
      
      urlCollection.insert({
        url : urlForm,
        tag : tagForm
      });
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
