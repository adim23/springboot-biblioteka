var BookListRow = require('./BookListRow.jsx');

var BooksList = React.createClass({
	render: function() {
		var rows = this.props.books.map(function(book, index) {
			return (<BookListRow index={index+1} book={book}/>);
		});
		if (rows.length){
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
		return (
			<table className='u-full-width'>
				<tr>
					<td>Nie znaleziono wyników.</td>
				</tr>
			</table>
		);
	}
});

module.exports = BooksList;
