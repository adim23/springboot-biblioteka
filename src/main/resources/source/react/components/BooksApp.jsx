var BooksTable = require('./BooksTable.jsx'),
		BooksSearchBar = require('./BooksSearchBar.jsx'),
		BooksStore = require('../stores/BooksStore'),
		BooksActionCreator = require('../actions/BooksActionCreator');

var BooksApp = React.createClass({
	getInitialState: function() {
		return {
			books: []
		};
	},
	componentWillMount: function() {
		BooksStore.addChangeListener(this.onChange);
	},
	componentDidMount: function() {
		BooksActionCreator.getBooks();
	},
	componentWillUnmount: function() {
		BooksStore.removeChangeListener(this.onChange);
	},
	onChange: function() {
		this.setState({
			books: BooksStore.getBooks()
		});
	},
	render: function() {
		return (
			<div className='u-full-width'>
				<BooksSearchBar />
				<BooksTable books={this.state.books}/>
			</div>
		);
	}
});

module.exports = BooksApp;
