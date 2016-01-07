var PersonRow = require('./PersonRow.jsx');

var PeopleTable = React.createClass({
	render: function() {
		var rows = this.props.people.map(function(person) {
			return (<PersonRow person={person}/>);
		});
		if (rows.length){
			return (
				<table className='u-full-width'>
					<thead>
						<tr>
							<th>ID</th>
							<th>Imię</th>
							<th>Nazwisko</th>
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

module.exports = PeopleTable;
