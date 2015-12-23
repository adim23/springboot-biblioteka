var BooksTable = require('./BooksTable.jsx'),
		BooksThumbnails = require('./BooksThumbnails.jsx'),
		BooksSearchBar = require('./BooksSearchBar.jsx'),
		BooksStore = require('../stores/BooksStore'),
		BooksActionCreator = require('../actions/BooksActionCreator'),
		BooksOptions = require('./BooksOptions.jsx');

var BooksApp = React.createClass({
	getInitialState: function() {
		return {
			books: [],
			view: 'list'
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
			books: BooksStore.getBooks(),
			view: BooksStore.getView()
		});
	},
	render: function() {
		switch (this.state.view){
			case 'list': {
					return (
						<div className='u-full-width'>
							<BooksOptions />
							<BooksSearchBar />
							<BooksTable books={this.state.books}/>
						</div>
					);
				}
			case 'thumbnails': {
					return (
						<div className='u-full-width'>
							<BooksOptions />
							<BooksSearchBar />
							<BooksThumbnails books={this.state.books}/>
						</div>
					);
				}
		}
	}
});

module.exports = BooksApp;
