var BookRow = React.createClass({
	render: function() {
		return (
			<tr>
				<td>{this.props.index}</td>
				<td>
					<a href={"/book/" + this.props.id}>{this.props.title}</a>
				</td>
				<td>
					<a href={"/author/" + this.props.author.id}>{this.props.author.author}</a>
				</td>
			</tr>
		);
	}
});

module.exports = BookRow;
