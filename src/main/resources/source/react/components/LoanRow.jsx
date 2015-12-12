var LoanRow = React.createClass({
	render: function() {
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
					{this.props.loan.returned ?
						<i className="fa fa-check"></i>
					: <i className="fa fa-question"></i>}
				</td>
			</tr>
		);
	}
});

module.exports = LoanRow;
