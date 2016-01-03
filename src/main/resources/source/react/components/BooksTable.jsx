var BookRow = require('./BookRow.jsx');

var BooksTable = React.createClass({
	render: function() {
		var rows = this.props.books.map(function(book, index) {
			return (<BookRow book={book}/>);
		});
		if (rows.length){
			return (
				<table className='u-full-width'>
					<thead>
						<tr>
							<th>ID</th>
							<th>Okładka</th>
							<th>Tytuł</th>
							<th>Autor</th>
							<th></th>
						</tr>
					</thead>
					<tbody>{rows}</tbody>
				</table>
			);
		}
		return (
			<table className='u-full-width'>
				<tr>
					<td>Nie znaleziono wyników.</td>
				</tr>
			</table>
		);
	}
});

module.exports = BooksTable;
