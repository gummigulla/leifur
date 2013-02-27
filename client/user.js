
// - - - - - - - - - - - - - - - - - - - - - - -
//
//                :: User.js ::
//
// Manipulation and handling of the user object
// including functions to retrieve avatar, info
// and such.
//
// @author: trymbill
//
// - - - - - - - - - - - - - - - - - - - - - - -

// - - - - - -
// USER OBJECT
// - - - - - -

var currentUser = null; // holds the currentUser object when aplicable

function User(fb_id) {
    var self   = this;

    self.fb_id = fb_id,
    self.obj   = Meteor.users.find({"profile.facebook.id": fb_id}).fetch()[0];
}

// - - - - - - -
// USER FUNCTIONS
// - - - - - - -

User.prototype = {

    // FB graph calling handler
    fb: function(query) {
        $.extend(query, {access_token: Meteor.user().services.facebook.accessToken});

        Meteor.http.get(
            'https://graph.facebook.com/' + this.fb_id,
            { params: query },
            function(error, result) {
                console.log(error, result);
            }
        );
    },

    // Get users avatar
    getAvatar: function() {
        return '//graph.facebook.com/' + this.fb_id + '/picture';
    }

};

// - - - - - - -
// USER PUBLICS
// - - - - - - -

$.getAvatar = function(fb_id) {
    return new User(fb_id).getAvatar();
};

Meteor.autorun(function() {
    if (Meteor.user()) {
        currentUser = new User(Meteor.user().profile.facebook.id);
    }

    Meteor.subscribe('currentAccessToken');
});