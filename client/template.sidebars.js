
Template.default_sidebar.random_quote = function() {
	return Random.choice(Quotes.find({}).fetch());
};