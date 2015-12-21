var PeopleTable = require('./PeopleTable.jsx'),
		LoansTable = require('./LoansTable.jsx'),
		PeopleSearchBar = require('./PeopleSearchBar.jsx'),
		LoansSearchBar = require('./LoansSearchBar.jsx'),
		ManageStore = require('../stores/ManageStore'),
		ManageOptions = require('./ManageOptions.jsx'),
		PeopleActionCreator = require('../actions/PeopleActionCreator'),
		LoansActionCreator = require('../actions/LoansActionCreator');

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
		PeopleActionCreator.getPeople();
		LoansActionCreator.getLoans();
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
					<ManageOptions />
					<PeopleSearchBar />
					<PeopleTable people={this.state.people}/>
				</div>
			);
		}
		else {
			return (
				<div className='u-full-width'>
					<ManageOptions />
					<LoansSearchBar />
					<LoansTable loans={this.state.loans}/>
				</div>
			);
		}
	}
});

module.exports = ManageApp;
