var ActionCreator = require('../actions/ActionCreator'),
		ActionConstants = require('../constants/ActionConstants');

var SearchBar = React.createClass({
	getInitialState: function() {
		return {value: ''};
	},
	handleChange: function(event) {
		this.setState({value: event.target.value});
	},
	handleSearch: function() {
		ActionCreator.getBooksBy({
			title: this.state.value,
			author: ''
		});
	},
	render: function() {
		var value = this.state.value;
		return (
			<div className='u-full-width'>
				<div className='row'>
					<input className='eight columns' type='text' value={value} onChange={this.handleChange}/>
					<button className="four columns" onClick={this.handleSearch}>Wyszukaj</button>
				</div>
			</div>
		);
	}
});

module.exports = SearchBar;
