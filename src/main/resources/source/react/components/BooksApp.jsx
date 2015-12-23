var BooksTable = require('./BooksTable.jsx'),
		BooksThumbnails = require('./BooksThumbnails.jsx'),
		BooksSearchBar = require('./BooksSearchBar.jsx'),
		BooksStore = require('../stores/BooksStore'),
		BooksActionCreator = require('../actions/BooksActionCreator'),
		BooksOptions = require('./BooksOptions.jsx'),
		Pagination = require('./Pagination.jsx');

var BooksApp = React.createClass({
	getInitialState: function() {
		return {
			books: [],
			view: 'list',
			page: 0,
			items: 8
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
			view: BooksStore.getView(),
			page: BooksStore.getCurrent()
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
		switch (this.state.view){
			case 'list': {
					return (
						<div className='u-full-width'>
							<BooksOptions />
							<BooksSearchBar />
							<BooksTable books={this.getSlicedItems(this.state.books)} />
							<Pagination pages={this.getPages(this.state.books)} current={this.state.page} />
						</div>
					);
				}
			case 'thumbnails': {
					return (
						<div className='u-full-width'>
							<BooksOptions />
							<BooksSearchBar />
							<BooksThumbnails books={this.getSlicedItems(this.state.books)}/>
							<Pagination pages={this.getPages(this.state.books)} current={this.state.page} />
						</div>
					);
				}
		}
	}
});

module.exports = BooksApp;
