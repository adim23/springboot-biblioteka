var BookThumbnail = require('./BookThumbnail.jsx');

var BooksThumbnails = React.createClass({
	render: function() {
		var rows = this.props.books.map(function(book, index, books) {
			if (index % 4 == 0){
				var row = books.slice(index, index + 4).map(function(book){
					if (book){
						return (<BookThumbnail book={book} />);
					}
					return false;
				});
				return (
					<div className="row">
						{row}
					</div>
				)
			}
			return false;
		}).filter(function(thumbnail){
			return thumbnail != false;
		});
		if (rows.length){
			return (
				<div>
					{rows}
				</div>
			);
		}
		return (
			<div className="three columns">
				<p>Nie znaleziono wyników.</p>
			</div>
		);
	}
});

module.exports = BooksThumbnails;
