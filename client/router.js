
// - - - -
// Routing
// - - - -

var Router = Backbone.Router.extend({
    routes: {
        "":                     "index",
        "logout":               "logout",

        "forum(/:thread_id)":   "forum",

        "*path":                "page_not_found"
    },

    index: function() {
        Session.set('currentPage', 'index');
    },

    logout: function() {
        console.log('im runnin');
        Meteor.logout(function(err) {
            if (!err) {
                window.location.href = '/';
            } else {
                console.error(err);
            }
        });
    },

    forum: function(thread_id) {
        Session.set('currentPage', 'forum');
        if (thread_id) {
            Session.set('currentThread', thread_id);
        }
    },

    page_not_found: function() {
        Session.set('currentPage', 'page_not_found');
    }
});

var app = new Router;
Meteor.startup(function () {
    Backbone.history.start({pushState: true});
});

Template.page_controller.display_page = function() {
    var index = Session.get('currentPage');
    if (Template[index]) {
        return Template[index]();
    } else {
        return Template['page_not_found']();
    }
};

Template.menu_bar.events = {
    'click a': function(event) {
        event.preventDefault();

        var $this = $(event.currentTarget),
            href = $this.data('href');

        if (href) {
            app.navigate(href, true);
        }
    }
};