var PeopleTable = require('./PeopleTable.jsx'),
		PeopleSearchBar = require('./PeopleSearchBar.jsx'),
		PeopleStore = require('../stores/PeopleStore'),
		PeopleActionCreator = require('../actions/PeopleActionCreator');

var PeopleApp = React.createClass({
	getInitialState: function() {
		return {
			people: []
		};
	},
	componentWillMount: function() {
		PeopleStore.addChangeListener(this.onChange);
	},
	componentDidMount: function() {
		PeopleActionCreator.getPeople();
	},
	componentWillUnmount: function() {
		PeopleStore.removeChangeListener(this.onChange);
	},
	onChange: function() {
		this.setState({
			people: PeopleStore.getPeople()
		});
	},
	render: function() {
		return (
			<div className='u-full-width'>
				<PeopleSearchBar />
				<PeopleTable people={this.state.people}/>
			</div>
		);
	}
});

module.exports = PeopleApp;
