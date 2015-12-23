var BookThumbnail = React.createClass({
	render: function() {
		var image;
		if (this.props.book.image.path == ''){
			image = (
				<div className="placeholder">
					<a href={"/book/" + this.props.book.id}>
						{this.props.book.title}
					</a>
				</div>
			);
		}
		else {
			image = (
				<a href={"/book/" + this.props.book.id}>
					<img src={"/img/" + this.props.book.image.path}></img>
				</a>
			);
		}
		return (
			<div className="three columns">
				<div title={this.props.book.title} className="image">
					{image}
				</div>
			</div>
		);
	}
});

module.exports = BookThumbnail;
