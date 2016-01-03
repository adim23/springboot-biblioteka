var BooksMainTable = require('./BooksMainTable.jsx'),
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
			items: 8,
			message: ''
		};
	},
	componentWillMount: function() {
		BooksStore.addChangeListener(this.onChange);
	},
	componentWillUnmount: function() {
		BooksStore.removeChangeListener(this.onChange);
	},
	onChange: function() {
		this.setState({
			books: BooksStore.getBooks(),
			view: BooksStore.getView(),
			page: BooksStore.getCurrent(),
			message: BooksStore.getMessage()
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
		var message;
		if (this.state.message != ''){
			message = (
				<h5 className='message'>
					{this.state.message}
				</h5>
			);
		}

		switch (this.state.view){
			case 'list': {
					return (
						<div className='u-full-width'>
							{message}
							<BooksOptions />
							<BooksSearchBar />
							<BooksMainTable books={this.getSlicedItems(this.state.books)} />
							<Pagination pages={this.getPages(this.state.books)} current={this.state.page} />
						</div>
					);
				}
			case 'thumbnails': {
					return (
						<div className='u-full-width'>
							{message}
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
