
// - - - - - - - - - - - - - - - - - - - -
//               MAIN JS
//
// Setting up everything we need both
// client and server side in JS
//
// - - - - - - - - - - - - - - - - - - - -

// A list of Leifur members Facebook ID's
var FB_Allowed = ['637995708'];


// - - - - - - - - - - - - - - - - - - - -
//             COLLECTIONS
// - - - - - - - - - - - - - - - - - - - -

Newsfeed = new Meteor.Collection('newsfeed');
Quotes = new Meteor.Collection('quotes');
