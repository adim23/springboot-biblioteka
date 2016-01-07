var ManageActionCreator = require('../actions/ManageActionCreator');

var CopiesSearchBar = React.createClass({
	getInitialState: function() {
		return {
			title: '',
			author: ''
		};
	},
	componentDidMount: function() {
		ManageActionCreator.getCopies();
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
		ManageActionCreator.getCopiesBy({
			title: this.state.title,
			author: this.state.author
		});
	},
	render: function() {
		return (
			<div className='u-full-width'>
				<div className='row'>
					<input className='five columns' onKeyDown={this.handleKeyDown} placeholder="Tytuł" type='text' value={this.state.title} onChange={this.handleTitleChange}/>
					<input className='five columns' onKeyDown={this.handleKeyDown} placeholder="Autor" type='text' value={this.state.author} onChange={this.handleAuthorChange}/>
					<button className="two columns" onClick={this.handleSearch}>Wyszukaj</button>
				</div>
			</div>
		);
	}
});

module.exports = CopiesSearchBar;
