var ManageActionCreator = require('../actions/ManageActionCreator');

var LoansSearchBar = React.createClass({
	getInitialState: function() {
		return {
			firstname: '',
			secondname: '',
			type: 'loaned'
		};
	},
	componentDidMount: function() {
		ManageActionCreator.getLoansBy({
			firstname: this.state.firstname,
			secondname: this.state.secondname,
			type: this.state.type
		});
	},
	handleFirstnameChange: function(event) {
		this.setState({firstname: event.target.value});
	},
	handleSecondnameChange: function(event) {
		this.setState({secondname: event.target.value});
	},
	handleTypeChange: function(event) {
		this.setState({type: event.target.value});
		ManageActionCreator.getLoansBy({
			firstname: this.state.firstname,
			secondname: this.state.secondname,
			type: event.target.value
		});
	},
	handleKeyDown: function(event) {
		if (event.keyCode == 13){
			this.handleSearch();
		}
	},
	handleSearch: function() {
		ManageActionCreator.getLoansBy({
			firstname: this.state.firstname,
			secondname: this.state.secondname,
			type: this.state.type
		});
	},
	render: function() {
		return (
			<div className='u-full-width'>
				<div className='row'>
					<input className='three columns' onKeyDown={this.handleKeyDown} placeholder="Imię" type='text' value={this.state.firstname} onChange={this.handleFirstnameChange}/>
					<input className='three columns' onKeyDown={this.handleKeyDown} placeholder="Nazwisko" type='text' value={this.state.secondname} onChange={this.handleSecondnameChange}/>
					<select className="four columns" onChange={this.handleTypeChange}>
						<option value="all">Wszystkie</option>
						<option value="loaned" selected>Wypożyczone</option>
						<option value="returned">Zwrócone</option>
					</select>
					<button className="two columns" onClick={this.handleSearch}>Wyszukaj</button>
				</div>
			</div>
		);
	}
});

module.exports = LoansSearchBar;
