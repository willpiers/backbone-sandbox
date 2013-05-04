$(document).ready(function() {

	var Book = Backbone.Model.extend({
		
	});

	var a_book = new Book();
	a_book.url = '/api/1';

	a_book.fetch(
		success: function) {
			console.log(a_book)
		}
	);

});