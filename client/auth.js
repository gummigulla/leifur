
// - - - - - - - - - - - -
// Logging in functionality
// - - - - - - - - - - - -

Template.login.events = {
    'click #login': function() {
        Meteor.loginWithFacebook({
            requestPermissions: [
                'email',
                'user_about_me',
                'user_birthday',
                'user_groups',
                'user_hometown',
                'user_location',
                'user_relationships',
                'user_relationship_details',
                'user_events',
                'user_photos',
                'user_videos',
                'publish_actions',
                'user_online_presence',
                'publish_stream',
                'read_mailbox',
                'read_stream',
                'offline_access',
                'status_update',
                'photo_upload',
                'video_upload',
                'create_event',
                'rsvp_event',
                'read_friendlists'
            ],
            requestOfflineToken: true
        }, function (err) {
            if (err) {
                console.error(err);
            }
        });
    }
};