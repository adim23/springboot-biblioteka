var PersonRow = React.createClass({
	render: function() {
		return (
			<tr>
				<td><a href={"/person/" + this.props.person.id}>{this.props.person.id}</a></td>
				<td>{this.props.person.firstname}</td>
				<td>{this.props.person.secondname}</td>
			</tr>
		);
	}
});

module.exports = PersonRow;
