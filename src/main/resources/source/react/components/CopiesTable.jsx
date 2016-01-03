var CopyRow = require('./CopyRow.jsx');

var CopiesTable = React.createClass({
	render: function() {
		var rows = this.props.copies.map(function(copy) {
			return (<CopyRow copy={copy}/>);
		});
		if (rows.length){
			return (
				<table className='u-full-width'>
					<thead>
						<tr>
							<th>ID</th>
							<th>Książka</th>
							<th>Autor</th>
							<th>Czytelnik</th>
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

module.exports = CopiesTable;
