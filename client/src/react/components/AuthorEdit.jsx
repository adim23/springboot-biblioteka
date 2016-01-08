var EditActionCreator = require('../actions/EditActionCreator');

var AuthorEdit = React.createClass({
	getInitialState: function() {
		return {
			author: '',
		};
	},
	handleAuthorChange: function(event) {
		this.setState({author: event.target.value});
	},
	handleEdit: function(){
		if (this.state.author.length == 0){
			return;
		}
		EditActionCreator.editAuthor({
			id: this.props.author.id,
			author: this.state.author ? this.state.author : this.props.author.author
		});
	},
	render: function() {
		return (
			<div className='u-full-width form'>
					<div className='form-row'>
						<label className='two columns'>Autor: </label><input className='ten columns' type="text" name="author" value={this.state.author} onChange={this.handleAuthorChange}/>
					</div>
					<div className='form-row'>
						<button className='button-primary' onClick={this.handleEdit}>Edytuj</button>
					</div>
			</div>
		);
	}
});

module.exports = AuthorEdit;
