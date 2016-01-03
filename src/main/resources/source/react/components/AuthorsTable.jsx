var AuthorRow = require('./AuthorRow.jsx');

var AuthorsTable = React.createClass({
	render: function() {
		var rows = this.props.authors.map(function(author) {
			return (<AuthorRow author={author}/>);
		});
		if (rows.length){
			return (
				<table className='u-full-width'>
					<thead>
						<tr>
							<th>ID</th>
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

module.exports = AuthorsTable;
