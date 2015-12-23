var BookRow = React.createClass({
	render: function() {
		var image;
		if (this.props.book.image.path == ''){
			image = (
				<div className="placeholder">
					<i className="fa fa-question"></i>
				</div>
			);
		}
		else {
			image = (
				<img src={"/img/" + this.props.book.image.path}></img>
			);
		}
		return (
			<tr>
				<td>{this.props.index}</td>
				<td>
					<div className="image">
						{image}
					</div>
				</td>
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

module.exports = BookRow;
