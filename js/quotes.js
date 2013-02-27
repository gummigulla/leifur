
if (Meteor.is_server) {
    Meteor.publish('quotes', function() {
        return Quotes.find({});
    });
}

if (Meteor.is_client) {
    Meteor.subscribe('quotes');
}