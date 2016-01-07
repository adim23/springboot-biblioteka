var LoanRow = React.createClass({
	render: function() {
		var dateLoaned = new Date(this.props.loan.loaned);
		var loaned = dateLoaned.getDay() + "/" +
			dateLoaned.getMonth() + "/" +
			dateLoaned.getFullYear();
		return (
			<tr>
				<td>
					<a href={"/loan/" + this.props.loan.id}>{this.props.loan.id}</a>
				</td>
				<td>
					<a href={"/copy/" + this.props.loan.copy.id}>{this.props.loan.copy.book.title} id. {this.props.loan.copy.id}</a>
				</td>
				<td>
					<a href={"/person/" + this.props.loan.person.id}>{this.props.loan.person.firstname + " " + this.props.loan.person.secondname}</a>
				</td>
				<td>
					{loaned}
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
