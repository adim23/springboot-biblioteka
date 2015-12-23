var CopyRow = React.createClass({
	render: function() {
		return (
			<tr>
				<td>
					<a href={"/copy/" + this.props.copy.id}>{this.props.copy.id}</a>
				</td>
				<td>
					<a href={"/book/" + this.props.copy.book.id}>{this.props.copy.book.title}</a>
				</td>
				<td>
					<a href={"/author/" + this.props.copy.book.author.id}>{this.props.copy.book.author.author}</a>
				</td>
			</tr>
		);
	}
});

module.exports = CopyRow;
