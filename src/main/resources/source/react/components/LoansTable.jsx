var LoanRow = require('./LoanRow.jsx');

var LoansTable = React.createClass({
	render: function() {
		var rows = this.props.loans.map(function(loan, index) {
			return (<LoanRow index={index+1} loan={loan}/>);
		});
		if (rows.length){
			return (
				<table className='u-full-width'>
					<thead>
						<tr>
							<th></th>
							<th>Egzemplarz</th>
							<th>Czytelnik</th>
							<th>Zwrócone</th>
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
