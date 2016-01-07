var ImageRow = React.createClass({
	render: function() {
		var image;
		if (this.props.image.path == ''){
			image = (
				<div className="placeholder">
					<i className="fa fa-question"></i>
				</div>
			);
		}
		else {
			image = (
				<img src={"/img/" + this.props.image.path}></img>
			);
		}
		return (
			<tr>
				<td>
					{this.props.image.id}
				</td>
				<td>
					<div className="image">
						{image}
					</div>
				</td>
				<td>
					<a href={"/img/" + this.props.image.path}>{this.props.image.path}</a>
				</td>
			</tr>
		);
	}
});

module.exports = ImageRow;
