var ResourcesActionCreator = require('../actions/ResourcesActionCreator');

var BookForm = React.createClass({
	getInitialState: function() {
		return {
			author: '',
			title: '',
			image: ''
		};
	},
	handleAuthorChange: function(event) {
		this.setState({author: event.target.value});
	},
	handleTitleChange: function(event) {
		this.setState({title: event.target.value});
	},
	handleImageChange: function(event) {
		this.setState({image: event.target.value});
	},
	handlePost: function(){
		ResourcesActionCreator.postBook({
			author: {
				id: this.state.author
			},
			title: this.state.title,
			image: {
				id: this.state.image
			}
		});
	},
	render: function() {
		return (
			<div className='u-full-width form'>
					<div className='form-row'>
						<label className='two columns'>Tytuł: </label><input className='ten columns' type="text" name="title" value={this.state.title} onChange={this.handleTitleChange}/>
					</div>
					<div className='form-row'>
						<label className='two columns'>Autor: </label><input className='ten columns' type="text" name="author" value={this.state.author} onChange={this.handleAuthorChange}/>
					</div>
					<div className='form-row'>
						<label className='two columns'>Miniatura: </label><input className='ten columns' type="text" name="image" value={this.state.image} onChange={this.handleImageChange}/>
					</div>
					<div className='form-row'>
						<button className='button-primary' onClick={this.handlePost}>Dodaj</button>
					</div>
			</div>
		);
	}
});

module.exports = BookForm;
