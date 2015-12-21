var BooksActionCreator = require('../actions/BooksActionCreator');

var SearchBar = React.createClass({
	getInitialState: function() {
		return {
			title: '',
			author: ''
		};
	},
	handleTitleChange: function(event) {
		this.setState({title: event.target.value});
	},
	handleAuthorChange: function(event) {
		this.setState({author: event.target.value});
	},
	handleKeyDown: function(event) {
		if (event.keyCode == 13){
			this.handleSearch();
		}
	},
	handleSearch: function() {
		BooksActionCreator.getBooksBy({
			title: this.state.title,
			author: this.state.author
		});
	},
	render: function() {
		var value = this.state.value;
		return (
			<div className='u-full-width'>
				<div className='row'>
					<input className='six columns' onKeyDown={this.handleKeyDown} placeholder='Tytuł' type='text' value={value} onChange={this.handleTitleChange}/>
					<input className='four columns' onKeyDown={this.handleKeyDown} placeholder='Autor' type='text' value={value} onChange={this.handleAuthorChange}/>
					<button className="two columns" onClick={this.handleSearch}>Wyszukaj</button>
				</div>
			</div>
		);
	}
});

module.exports = SearchBar;
