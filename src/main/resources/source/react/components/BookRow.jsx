var ResourcesActionCreator = require('../actions/ResourcesActionCreator'),
		ManageActionCreator = require('../actions/ManageActionCreator');

var BookRow = React.createClass({
	handleDelete: function(){
		var thenFn = function(){
			ResourcesActionCreator.getBooks();
		};
		ResourcesActionCreator.deleteBook({
			id: this.props.book.id
		}).then(thenFn);
	},
	render: function() {
		var image;
		if (!this.props.book.image || this.props.book.image.path == ''){
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
				<td>{this.props.book.id}</td>
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
				<td>
					<button className='button-primary' onClick={this.handleDelete}>Usuń</button>
				</td>
			</tr>
		);
	}
});

module.exports = BookRow;
