var PersonRow = require('./PersonRow.jsx');

var PeopleTable = React.createClass({
	render: function() {
		var rows = this.props.people.map(function(person, index) {
			return (<PersonRow index={index+1} firstname={person.firstname} secondname={person.secondname} id={person.id}/>);
		});
		if (rows.length){
			return (
				<table className='u-full-width'>
					<thead>
						<tr>
							<th></th>
							<th>Imię</th>
							<th>Nazwisko</th>
							<th>Profil</th>
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
