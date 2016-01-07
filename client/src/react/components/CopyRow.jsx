var ResourcesActionCreator = require('../actions/ResourcesActionCreator'),
		ManageActionCreator = require('../actions/ManageActionCreator');

var CopyRow = React.createClass({
	handleDelete: function(){
		var thenFn = function(){
			ManageActionCreator.getCopies();
		};
		ResourcesActionCreator.deleteCopy({
			id: this.props.copy.id
		}).then(thenFn);
	},
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
				<td>
					<button className='button-primary' onClick={this.handleDelete}>Usuń</button>
				</td>
			</tr>
		);
	}
});

module.exports = CopyRow;
