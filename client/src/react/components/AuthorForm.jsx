var ResourcesActionCreator = require('../actions/ResourcesActionCreator');

var AuthorForm = React.createClass({
	getInitialState: function() {
		return {
			author: '',
		};
	},
	handleAuthorChange: function(event) {
		this.setState({author: event.target.value});
	},
	handlePost: function(){
		if (this.state.author.length == 0){
			return;
		}
		var thenFn = function(){
			ResourcesActionCreator.getAuthors();
		};
		ResourcesActionCreator.postAuthor({
			author: this.state.author
		}).then(thenFn);
	},
	render: function() {
		return (
			<div className='u-full-width form'>
					<div className='form-row'>
						<label className='two columns'>Autor: </label><input className='ten columns' type="text" name="author" value={this.state.author} onChange={this.handleAuthorChange}/>
					</div>
					<div className='form-row'>
						<button className='button-primary' onClick={this.handlePost}>Dodaj</button>
					</div>
			</div>
		);
	}
});

module.exports = AuthorForm;
