var BookView = Backbone.View.extend({
	bookview: _.template($('#book').html()),

	render: function() {
		this.$el.html(this.bookview(this.model.toJSON()))
	}
});