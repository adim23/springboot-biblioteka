var LoanRow = require('./LoanRow.jsx');

var LoansTable = React.createClass({
	render: function() {
		var rows = this.props.loans.map(function(loan) {
			return (<LoanRow loan={loan}/>);
		});
		if (rows.length){
			return (
				<table className='u-full-width'>
					<thead>
						<tr>
							<th>ID</th>
							<th>Egzemplarz</th>
							<th>Czytelnik</th>
							<th>Data wypożyczenia</th>
							<th>Status</th>
							<th>Zwróć</th>
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

module.exports = LoansTable;
