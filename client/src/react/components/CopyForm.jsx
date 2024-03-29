var ResourcesActionCreator = require('../actions/ResourcesActionCreator');

var CopyForm = React.createClass({
	getInitialState: function() {
		return {
			author: null,
			book: null,
		};
	},
	componentDidMount: function() {
		ResourcesActionCreator.getAuthors();
		ResourcesActionCreator.getBooks();
	},
	handleAuthorChange: function(event) {
		this.setState({author: event.target.value});
		ResourcesActionCreator.getBooksByAuthorID({
			authorID: event.target.value
		});
	},
	handleBookChange: function(event) {
		this.setState({book: event.target.value});
	},
	handlePost: function(){
		if (!this.state.book){
			return;
		}
		ResourcesActionCreator.postCopy({
			book: {
				id: this.state.book
			}
		});
	},
	render: function() {
		var authors = this.props.authors.map(function(author) {
			return (<option value={author.id}>{author.author}</option>);
		});
		authors.unshift(
			<option value={null}>-</option>
		);
		var books = this.props.books.map(function(book) {
			return (<option value={book.id}>{book.title}</option>);
		});
		books.unshift(
			<option value={null}>-</option>
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
					<label className='two columns'>Książka: </label>
					<select className="ten columns" onChange={this.handleBookChange}>
						{books}
					</select>
				</div>
					<div className='form-row'>
						<button className='button-primary' onClick={this.handlePost}>Dodaj</button>
					</div>
			</div>
		);
	}
});

module.exports = CopyForm;
