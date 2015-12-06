var BookRow = require('./BookRow.jsx');

var BooksTable = React.createClass({
	render: function() {
		var rows = this.props.books.map(function(book, index) {
			return (<BookRow index={index+1} title={book.title} author={book.author} id={book.id}/>);
		});
		return (
			<table className='u-full-width'>
				<thead>
					<tr>
						<th></th>
						<th>Tytuł</th>
						<th>Autor</th>
					</tr>
				</thead>
				<tbody>{rows}</tbody>
			</table>
		);
	}
});

module.exports = BooksTable;
