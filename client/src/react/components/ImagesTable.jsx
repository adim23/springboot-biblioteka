var ImageRow = require('./ImageRow.jsx');

var ImagesTable = React.createClass({
	render: function() {
		var rows = this.props.images.map(function(image) {
			return (<ImageRow image={image}/>);
		});
		if (rows.length){
			return (
				<table className='u-full-width'>
					<thead>
						<tr>
							<th>ID</th>
							<th>Miniatura</th>
							<th>Ścieżka</th>
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

module.exports = ImagesTable;
