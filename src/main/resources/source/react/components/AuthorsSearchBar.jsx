var ManageActionCreator = require('../actions/ManageActionCreator');

var AuthorsSearchBar = React.createClass({
	getInitialState: function() {
		return {
			author: ''
		};
	},
	componentDidMount: function() {
		ManageActionCreator.getAuthors();
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
		ManageActionCreator.getAuthorsBy({
			author: this.state.author
		});
	},
	render: function() {
		return (
			<div className='u-full-width'>
				<div className='row'>
					<input className='ten columns' onKeyDown={this.handleKeyDown} placeholder="Autor" type='text' value={this.state.author} onChange={this.handleAuthorChange}/>
					<button className="two columns" onClick={this.handleSearch}>Wyszukaj</button>
				</div>
			</div>
		);
	}
});

module.exports = AuthorsSearchBar;
