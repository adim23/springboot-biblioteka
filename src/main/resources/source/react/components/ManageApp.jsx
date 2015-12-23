var PeopleTable = require('./PeopleTable.jsx'),
		LoansTable = require('./LoansTable.jsx'),
		PeopleSearchBar = require('./PeopleSearchBar.jsx'),
		LoansSearchBar = require('./LoansSearchBar.jsx'),
		ManageStore = require('../stores/ManageStore'),
		ManageOptions = require('./ManageOptions.jsx'),
		PeopleActionCreator = require('../actions/PeopleActionCreator'),
		LoansActionCreator = require('../actions/LoansActionCreator'),
		Pagination = require('./Pagination.jsx');

var ManageApp = React.createClass({
	getInitialState: function() {
		return {
			people: [],
			loans: [],
			show: "people",
			page: 0,
			items: 8
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
			show: ManageStore.getShow(),
			page: ManageStore.getCurrent()
		});
	},
	getSlicedItems: function(items) {
		return items.slice(
			(this.state.page+1) * this.state.items - this.state.items,
			(this.state.page+1) * this.state.items
		);
	},
	getPages: function(items) {
		return Math.ceil(items.length / this.state.items);
	},
	render: function() {
		if (this.state.show == "people"){
			return (
				<div className='u-full-width'>
					<ManageOptions />
					<PeopleSearchBar />
					<PeopleTable people={this.getSlicedItems(this.state.people)}/>
					<Pagination pages={this.getPages(this.state.people)} current={this.state.page} />
				</div>
			);
		}
		else {
			return (
				<div className='u-full-width'>
					<ManageOptions />
					<LoansSearchBar />
					<LoansTable loans={this.getSlicedItems(this.state.loans)}/>
					<Pagination pages={this.getPages(this.state.loans)} current={this.state.page} />
				</div>
			);
		}
	}
});

module.exports = ManageApp;
