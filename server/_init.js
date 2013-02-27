
// When we are ready, we should add all the collections in use on the website
// so that it won't be possible to insert, update or remove straight from the
// client end.

Meteor.startup(function() {
    var collections = [];

    _.each(collections, function(collection) {
        _.each(['insert', 'update', 'remove'], function(method) {
            Meteor.default_server.method_handlers['/' + collection + '/' + method] = function() {};
        });
    });

    // TMP FIX FOR OLD ID TO FB ID
    /* TMP = new Meteor.Collection('old_to_fb');
    loop = TMP.find({}).forEach(function(u) {
        Quotes.update({user_id: u.old_id}, {$set: {fb_id: u.fb_id}}, {multi: true});
        Quotes.update({user_id: u.old_id}, {$unset: { id: 1, user_id: 1}}, {multi: true});
    }); */

});

// Get current access token
Meteor.publish("currentAccessToken", function(){
    return Meteor.users.find(this.userId, {fields: {'services.facebook.accessToken': 1}});
});