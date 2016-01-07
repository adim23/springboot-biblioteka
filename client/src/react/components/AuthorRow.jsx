var ResourcesActionCreator = require('../actions/ResourcesActionCreator'),
		ManageActionCreator = require('../actions/ManageActionCreator');

var AuthorRow = React.createClass({
	handleDelete: function(){
		var thenFn = function(){
			ManageActionCreator.getAuthors();
		};
		ResourcesActionCreator.deleteAuthor({
			id: this.props.author.id
		}).then(thenFn);
	},
	render: function() {
		return (
			<tr>
				<td>
					{this.props.author.id}
				</td>
				<td>
					<a href={"/author/" + this.props.author.id}>{this.props.author.author}</a>
				</td>
				<td>
					<button className='button-primary' onClick={this.handleDelete}>Usuń</button>
				</td>
			</tr>
		);
	}
});

module.exports = AuthorRow;
