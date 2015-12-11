var PeopleActionCreator = require('../actions/PeopleActionCreator'),
		ActionConstants = require('../constants/ActionConstants');

var SearchBar = React.createClass({
	getInitialState: function() {
		return {
			firstname: '',
			secondname: ''
		};
	},
	handleFirstnameChange: function(event) {
		this.setState({firstname: event.target.value});
	},
	handleSecondnameChange: function(event) {
		this.setState({secondname: event.target.value});
	},
	handleKeyDown: function(event) {
		if (event.keyCode == 13){
			this.handleSearch();
		}
	},
	handleSearch: function() {
		PeopleActionCreator.getPeopleBy({
			firstname: this.state.firstname,
			secondname: this.state.secondname
		});
	},
	render: function() {
		var value = this.state.value;
		return (
			<div className='u-full-width'>
				<div className='row'>
					<input className='four columns' onKeyDown={this.handleKeyDown} placeholder="Imię" type='text' value={value} onChange={this.handleFirstnameChange}/>
					<input className='four columns' onKeyDown={this.handleKeyDown} placeholder="Nazwisko" type='text' value={value} onChange={this.handleSecondnameChange}/>
					<button className="four columns" onClick={this.handleSearch}>Wyszukaj</button>
				</div>
			</div>
		);
	}
});

module.exports = SearchBar;
