var PeopleTable = require('./PeopleTable.jsx'),
		LoansTable = require('./LoansTable.jsx'),
		ManageSearchBar = require('./ManageSearchBar.jsx'),
		ManageStore = require('../stores/ManageStore'),
		ManageActionCreator = require('../actions/ManageActionCreator');

var ManageApp = React.createClass({
	getInitialState: function() {
		return {
			people: [],
			loans: [],
			show: "people"
		};
	},
	componentWillMount: function() {
		ManageStore.addChangeListener(this.onChange);
	},
	componentDidMount: function() {
		ManageActionCreator.getPeople();
	},
	componentWillUnmount: function() {
		ManageStore.removeChangeListener(this.onChange);
	},
	onChange: function() {
		this.setState({
			people: ManageStore.getPeople(),
			loans: ManageStore.getLoans(),
			show: ManageStore.getShow()
		});
	},
	render: function() {
		if (this.state.show == "people"){
			return (
				<div className='u-full-width'>
					<ManageSearchBar />
					<PeopleTable people={this.state.people}/>
				</div>
			);
		}
		else {
			return (
				<div className='u-full-width'>
					<ManageSearchBar />
					<LoansTable loans={this.state.loans}/>
				</div>
			);
		}
	}
});

module.exports = ManageApp;
