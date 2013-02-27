
// Make sure only members of Leifur can login / join
Accounts.validateNewUser(function (user) {
    if (user.services.facebook.id && _.contains(FB_Allowed, user.services.facebook.id))
        return true;
    return false;
});

// Save extra Facebook information about the user
Accounts.onCreateUser(function(options, user) {
    if (options.profile) { // maintain the default behavior
        user.profile = options.profile;
    }

    // get profile data from Facebook
    var result = Meteor.http.get("https://graph.facebook.com/me", {
        params: {
            access_token: user.services.facebook.accessToken
        }
    });

    console.log(result);

    if ( !result.error && result.data ) {
        // if successfully obtained facebook profile, save it off
        user.profile.facebook = result.data;
    }

    return user;
});