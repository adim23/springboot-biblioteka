var PeopleActionCreator = require('../actions/PeopleActionCreator');

var PeopleSearchBar = React.createClass({
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
		return (
			<div className='u-full-width'>
				<div className='row'>
					<input className='five columns' onKeyDown={this.handleKeyDown} placeholder="Imię" type='text' value={this.state.firstname} onChange={this.handleFirstnameChange}/>
					<input className='five columns' onKeyDown={this.handleKeyDown} placeholder="Nazwisko" type='text' value={this.state.secondname} onChange={this.handleSecondnameChange}/>
					<button className="two columns" onClick={this.handleSearch}>Wyszukaj</button>
				</div>
			</div>
		);
	}
});

module.exports = PeopleSearchBar;
