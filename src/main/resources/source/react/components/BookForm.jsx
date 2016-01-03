var ResourcesActionCreator = require('../actions/ResourcesActionCreator');

var BookForm = React.createClass({
	getInitialState: function() {
		return {
			author: null,
			title: '',
			image: null
		};
	},
	handleAuthorChange: function(event) {
		this.setState({author: event.target.value});
	},
	handleImageChange: function(event) {
		this.setState({image: event.target.value});
	},
	handleTitleChange: function(event) {
		this.setState({title: event.target.value});
	},
	handlePost: function(){
		if (!this.state.author){
			return;
		}
		if (this.state.image){
			ResourcesActionCreator.postBook({
				author: {
					id: this.state.author
				},
				title: this.state.title,
				image: {
					id: this.state.image
				}
			});
		}
		else {
			ResourcesActionCreator.postBook({
				author: {
					id: this.state.author
				},
				title: this.state.title
			});
		}
	},
	render: function() {
		var authors = this.props.authors.map(function(author) {
			return (<option value={author.id}>{author.author}</option>);
		});
		var images = this.props.images.map(function(image) {
			return (<option value={image.id}>{image.path}</option>);
		});
		images.unshift(
			<option value={null}>Brak okładki</option>
		);
		return (
			<div className='u-full-width form'>
					<div className='form-row'>
						<label className='two columns'>Autor: </label>
						<select className="ten columns" onChange={this.handleAuthorChange}>
							{authors}
						</select>
					</div>
					<div className='form-row'>
						<label className='two columns'>Tytuł: </label>
						<input className='ten columns' type="text" name="title" value={this.state.title} onChange={this.handleTitleChange}/>
					</div>
					<div className='form-row'>
						<label className='two columns'>Miniatura: </label>
						<select className="ten columns" onChange={this.handleImageChange}>
							{images}
						</select>
					</div>
					<div className='form-row'>
						<button className='button-primary' onClick={this.handlePost}>Dodaj</button>
					</div>
			</div>
		);
	}
});

module.exports = BookForm;
