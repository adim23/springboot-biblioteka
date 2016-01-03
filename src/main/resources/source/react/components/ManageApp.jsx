var PeopleTable = require('./PeopleTable.jsx'),
		LoansTable = require('./LoansTable.jsx'),
		CopiesTable = require('./CopiesTable.jsx'),
		AuthorsTable = require('./AuthorsTable.jsx'),
		BooksTable = require('./BooksTable.jsx'),
		ImagesTable = require('./ImagesTable.jsx'),
		PeopleSearchBar = require('./PeopleSearchBar.jsx'),
		LoansSearchBar = require('./LoansSearchBar.jsx'),
		CopiesSearchBar = require('./CopiesSearchBar.jsx'),
		AuthorsSearchBar = require('./AuthorsSearchBar.jsx'),
		BooksSearchBar = require('./BooksSearchBar.jsx'),
		ImagesSearchBar = require('./ImagesSearchBar.jsx'),
		ManageStore = require('../stores/ManageStore'),
		ManageOptions = require('./ManageOptions.jsx'),
		ManageActionCreator = require('../actions/ManageActionCreator'),
		Pagination = require('./Pagination.jsx');

var ManageApp = React.createClass({
	getInitialState: function() {
		return {
			resources: {
				people: [],
				loans: [],
				copies: [],
				authors: [],
				images: [],
				books: []
			},
			show: "people",
			page: 0,
			items: 8,
			message: ''
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
			resources: ManageStore.getResources(),
			show: ManageStore.getShow(),
			page: ManageStore.getCurrent(),
			message: ManageStore.getMessage()
		});
		("App: Images: ");
		(this.state.resources.images);
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

		switch (this.state.show){
			case 'people':
				return (
					<div className='u-full-width'>
						{message}
						<ManageOptions />
						<PeopleSearchBar />
						<PeopleTable people={this.getSlicedItems(this.state.resources.people)}/>
						<Pagination pages={this.getPages(this.state.resources.people)} current={this.state.page} />
					</div>
				);
			case 'loans':
				return (
					<div className='u-full-width'>
						{message}
						<ManageOptions />
						<LoansSearchBar />
						<LoansTable loans={this.getSlicedItems(this.state.resources.loans)}/>
						<Pagination pages={this.getPages(this.state.resources.loans)} current={this.state.page} />
					</div>
				);
			case 'copies':
				return (
					<div className='u-full-width'>
						{message}
						<ManageOptions />
						<CopiesSearchBar />
						<CopiesTable copies={this.getSlicedItems(this.state.resources.copies)}/>
						<Pagination pages={this.getPages(this.state.resources.copies)} current={this.state.page} />
					</div>
				);
			case 'books':
				return (
					<div className='u-full-width'>
						{message}
						<ManageOptions />
						<BooksSearchBar />
						<BooksTable books={this.getSlicedItems(this.state.resources.books)}/>
						<Pagination pages={this.getPages(this.state.resources.books)} current={this.state.page} />
					</div>
				);
			case 'authors':
				return (
					<div className='u-full-width'>
						{message}
						<ManageOptions />
						<AuthorsSearchBar />
						<AuthorsTable authors={this.getSlicedItems(this.state.resources.authors)}/>
						<Pagination pages={this.getPages(this.state.resources.authors)} current={this.state.page} />
					</div>
				);
			case 'images':
				return (
					<div className='u-full-width'>
						{message}
						<ManageOptions />
						<ImagesSearchBar />
						<ImagesTable images={this.getSlicedItems(this.state.resources.images)}/>
						<Pagination pages={this.getPages(this.state.resources.images)} current={this.state.page} />
					</div>
				);
			default:
				return (
					<div className='u-full-width'>
						{message}
						<ManageOptions />
					</div>
				);
		}
	}
});

module.exports = ManageApp;
