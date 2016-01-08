var BookListRow = React.createClass({
	render: function() {
		return (
			<tr>
				<td>{this.props.index}</td>
				<td>
					<a href={"/book/" + this.props.book.id}>{this.props.book.title}</a>
				</td>
				<td>
					<a href={"/author/" + this.props.book.author.id}>{this.props.book.author.author}</a>
				</td>
			</tr>
		);
	}
});

module.exports = BookListRow;
