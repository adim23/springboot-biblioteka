var LoanRow = React.createClass({
	render: function() {
		var dateLoaned = new Date(this.props.loan.loaned);
		var loaned = dateLoaned.getDay() + "/" +
			dateLoaned.getMonth() + "/" +
			dateLoaned.getFullYear();
		return (
			<tr>
				<td>{this.props.index}</td>
				<td>
					<a href={"/copy/" + this.props.loan.copy.id}>{this.props.loan.copy.book.title}</a>
				</td>
				<td>
					<a href={"/person/" + this.props.loan.person.id}>{this.props.loan.person.firstname + " " + this.props.loan.person.secondname}</a>
				</td>
				<td>
					<a href={"/loan/" + this.props.loan.id}>{loaned}</a>
				</td>
				<td>
					{this.props.loan.returned ?
						<span>Zwrócony <i className="fa fa-check"></i></span>
					: <span>Wypożyczony <i className="fa fa-question"></i></span>}
				</td>
			</tr>
		);
	}
});

module.exports = LoanRow;
