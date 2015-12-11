var PersonRow = React.createClass({
	render: function() {
		return (
			<tr>
				<td>{this.props.index}</td>
				<td>{this.props.firstname}</td>
				<td>{this.props.secondname}</td>
				<td><a href={"/person/" + this.props.id}>Profil</a></td>
			</tr>
		);
	}
});

module.exports = PersonRow;
