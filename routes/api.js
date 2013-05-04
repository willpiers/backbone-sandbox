
/*
 * GET users listing.
 */

exports.books = function(req, res) {
  res.send(
  	[
  	{	id: '1',
  		title: 'the book',
  		author: 'the author',
  		pub_date: 'january 1st, 1991' },

  	{	id: '2',
  		title: 'my favorite book',
  		author: 'my favorite author',
  		pub_date: 'yesterday' },

  	{	id: '3',
  		title: 'the giving tree',
  		author: 'shel silversteen',
  		pub_date: '1/5/1884' },

  	{	id: '4',
  		title: 'holes',
  		author: 'louis sachar',
  		pub_date: '1/5/1884' }
  	]);
};

exports.one_book = function(req, res) {
	var id = req.params.id;
	switch(id)
	{
	case '1':
	  res.send( {	id: '1',
  		title: 'the book',
  		author: 'the author',
  		pub_date: 'january 1st, 1991' } );
	  break;
	case '2':
	  res.send( {   id: '2',
  		title: 'my favorite book',
  		author: 'my favorite author',
  		pub_date: 'yesterday' } );
	  break;
	case '3':
	  res.send( {	id: '3',
  		title: 'the giving tree',
  		author: 'shel silversteen',
  		pub_date: '1/5/1884' } );
	  break;
	case '4':
	res.send( {	id: '4',
  		title: 'holes',
  		author: 'louis sachar',
  		pub_date: '1/5/1884' } );
	  break;
	default:
	  {'no can dosville baby doll'}
	}
};