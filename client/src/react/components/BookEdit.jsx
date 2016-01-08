var EditActionCreator = require('../actions/EditActionCreator');

var BookEdit = React.createClass({
	getInitialState: function() {
		return {
			author: null,
			title: '',
			image: null,
			changedImage: false
		};
	},
	componentDidMount: function() {
		EditActionCreator.getAuthors();
		EditActionCreator.getImages();
	},
	handleAuthorChange: function(event) {
		this.setState({author: event.target.value});
	},
	handleImageChange: function(event) {
		this.setState({image: event.target.value});
		this.setState({changedImage: true});
	},
	handleTitleChange: function(event) {
		this.setState({title: event.target.value});
	},
	handleEdit: function(){
		var book = {
			id: this.props.book.id,
			author: {
				id: this.state.author ? this.state.author : this.props.book.author.id
			},
			title: this.state.title ? this.state.title : this.props.book.title
		};
		if (this.state.changedImage){
			book.image = {
				id: this.state.image
			}
		}
		EditActionCreator.editBook(book);
	},
	render: function() {
		var authors = this.props.authors.map(function(author) {
			return (<option value={author.id}>{author.author}</option>);
		});
		authors.unshift(
			<option value={null}>-</option>
		);
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
						<button className='button-primary' onClick={this.handleEdit}>Edytuj</button>
					</div>
			</div>
		);
	}
});

module.exports = BookEdit;
