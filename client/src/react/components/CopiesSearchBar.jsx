var ManageActionCreator = require('../actions/ManageActionCreator');

var CopiesSearchBar = React.createClass({
	getInitialState: function() {
		return {
			title: '',
			author: '',
			type: 'all'
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
	handleTypeChange: function(event) {
		this.setState({type: event.target.value});
		ManageActionCreator.getCopiesBy({
			title: this.state.title,
			author: this.state.author,
			type: event.target.value
		});
	},
	handleKeyDown: function(event) {
		if (event.keyCode == 13){
			this.handleSearch();
		}
	},
	handleSearch: function() {
		ManageActionCreator.getCopiesBy({
			title: this.state.title,
			author: this.state.author,
			type: this.state.type
		});
	},
	render: function() {
		return (
			<div className='u-full-width'>
				<div className='row'>
					<input className='three columns' onKeyDown={this.handleKeyDown} placeholder="Tytuł" type='text' value={this.state.title} onChange={this.handleTitleChange}/>
					<input className='three columns' onKeyDown={this.handleKeyDown} placeholder="Autor" type='text' value={this.state.author} onChange={this.handleAuthorChange}/>
					<select className="four columns" onChange={this.handleTypeChange}>
						<option value="all" selected>Wszystkie</option>
						<option value="available">Dostępne</option>
						<option value="notavailable">Niedostępne</option>
					</select>
					<button className="two columns" onClick={this.handleSearch}>Wyszukaj</button>
				</div>
			</div>
		);
	}
});

module.exports = CopiesSearchBar;
