var ResourcesActionCreator = require('../actions/ResourcesActionCreator'),
		ManageActionCreator = require('../actions/ManageActionCreator');

var LoanForm = React.createClass({
	getInitialState: function() {
		return {
			author: null,
			book: null,
			copy: null,
			person: null
		};
	},
	componentDidMount: function() {
		ResourcesActionCreator.getAuthors();
		ResourcesActionCreator.getPeople();
	},
	handleAuthorChange: function(event) {
		this.setState({author: event.target.value});
		ResourcesActionCreator.getBooksByAuthorID({
			authorID: event.target.value,
			available: true
		});
	},
	handleBookChange: function(event) {
		this.setState({book: event.target.value});
		ResourcesActionCreator.getCopiesByBookID({
			bookID: event.target.value
		});
	},
	handleCopyChange: function(event) {
		this.setState({copy: event.target.value});
	},
	handlePersonChange: function(event) {
		this.setState({person: event.target.value});
	},
	handlePost: function(){
		if (!this.state.copy || !this.state.person){
			return;
		}
		var thenFn = function(){
			ResourcesActionCreator.getCopiesByBookID({
				bookID: this.state.book,
				available: true
			});
		};
		ResourcesActionCreator.postLoan({
			copy: {
				id: this.state.copy
			},
			person: {
				id: this.state.person
			}
		}).then(thenFn);
	},
	render: function() {
		var authors = this.props.authors.map(function(author) {
			return (<option value={author.id}>{author.author}</option>);
		});
		authors.unshift(<option value={null}>-</option>);
		var books = this.props.books.map(function(book) {
			return (<option value={book.id}>{book.title}</option>);
		});
		books.unshift(<option value={null}>-</option>);
		var copies = this.props.copies.map(function(copy) {
			return (<option value={copy.id}>Egzemplarz id. {copy.id}</option>);
		});
		copies.unshift(<option value={null}>-</option>);
		var people = this.props.people.map(function(person) {
			return (<option value={person.id}>{person.firstname + " " + person.secondname}</option>);
		});
		people.unshift(<option value={null}>-</option>);
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
						<label className='two columns'>Egzemplarz: </label>
						<select className="ten columns" onChange={this.handleCopyChange}>
							{copies}
						</select>
					</div>
					<div className='form-row'>
						<label className='two columns'>Czytelnik: </label>
						<select className="ten columns" onChange={this.handlePersonChange}>
							{people}
						</select>
					</div>
					<div className='form-row'>
						<button className='button-primary' onClick={this.handlePost}>Dodaj</button>
					</div>
			</div>
		);
	}
});

module.exports = LoanForm;
