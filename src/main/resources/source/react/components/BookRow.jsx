var BookRow = React.createClass({
	render: function() {
		return (
			<tr>
				<td>{this.props.index}</td>
				<td><a href="/book/{this.props.id}">{this.props.title}</a></td>
				<td>{this.props.author}</td>
			</tr>
		);
	}
});

module.exports = BookRow;
