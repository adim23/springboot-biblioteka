var BookMainRow = require('./BookMainRow.jsx');

var BooksMainTable = React.createClass({
	render: function() {
		var rows = this.props.books.map(function(book, index) {
			return (<BookMainRow index={index+1} book={book}/>);
		});
		if (rows.length){
			return (
				<table className='u-full-width'>
					<thead>
						<tr>
							<th></th>
							<th>Okładka</th>
							<th>Tytuł</th>
							<th>Autor</th>
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

module.exports = BooksMainTable;
