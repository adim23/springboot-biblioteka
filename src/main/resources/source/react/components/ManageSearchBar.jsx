var ManageActionCreator = require('../actions/ManageActionCreator'),
		ActionConstants = require('../constants/ActionConstants');

var SearchBar = React.createClass({
	getInitialState: function() {
		return {
			firstname: '',
			secondname: '',
			show: 'people'
		};
	},
	handleFirstnameChange: function(event) {
		this.setState({firstname: event.target.value});
	},
	handleSecondnameChange: function(event) {
		this.setState({secondname: event.target.value});
	},
	handleChange: function(event) {
		this.setState({show: event.target.value});
	},
	handleKeyDown: function(event) {
		if (event.keyCode == 13){
			this.handleSearch();
		}
	},
	handleSearch: function() {
		switch (this.state.show){
			case "people":
				ManageActionCreator.getPeopleBy({
					firstname: this.state.firstname,
					secondname: this.state.secondname
				});
				break;
			case "loans":
				ManageActionCreator.getLoansBy({
					firstname: this.state.firstname,
					secondname: this.state.secondname
				});
				break;
		}
	},
	render: function() {
		return (
			<div className='u-full-width'>
				<div className='row'>
					<select className="three columns" onChange={this.handleChange}>
						<option value="people">Czytelnicy</option>
						<option value="loans">Wypożyczenia</option>
					</select>
					<input className='three columns' onKeyDown={this.handleKeyDown} placeholder="Imię" type='text' value={this.state.firstname} onChange={this.handleFirstnameChange}/>
					<input className='four columns' onKeyDown={this.handleKeyDown} placeholder="Nazwisko" type='text' value={this.state.secondname} onChange={this.handleSecondnameChange}/>
					<button className="two columns" onClick={this.handleSearch}>Wyszukaj</button>
				</div>
			</div>
		);
	}
});

module.exports = SearchBar;
