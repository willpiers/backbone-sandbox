var BookList = Backbone.Collection.extend({
	url: '/api/books',
	model: Book
});