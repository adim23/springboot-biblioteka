var AuthorRow = React.createClass({
	render: function() {
		return (
			<tr>
				<td>
					{this.props.author.id}
				</td>
				<td>
					<a href={"/author/" + this.props.author.id}>{this.props.author.author}</a>
				</td>
			</tr>
		);
	}
});

module.exports = AuthorRow;
