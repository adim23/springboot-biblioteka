var ResourcesStore = require('../stores/ResourcesStore'),
		ResourcesOptions = require('./ResourcesOptions.jsx'),
		ResourcesActionCreator = require('../actions/ResourcesActionCreator'),
		AuthorForm = require('./AuthorForm.jsx'),
		BookForm = require('./BookForm.jsx'),
		CopyForm = require('./CopyForm.jsx');

var ResourcesApp = React.createClass({
	getInitialState: function() {
		return {
			resources: {
				authors: [],
				images: [],
				books: []
			},
			type: 'author',
			message: ''
		};
	},
	componentWillMount: function() {
		ResourcesStore.addChangeListener(this.onChange);
	},
	componentDidMount: function() {
		ResourcesActionCreator.getAuthors();
		ResourcesActionCreator.getImages();
		ResourcesActionCreator.getBooks();
	},
	componentWillUnmount: function() {
		ResourcesStore.removeChangeListener(this.onChange);
	},
	onChange: function() {
		this.setState({
			type: ResourcesStore.getType(),
			message: ResourcesStore.getMessage(),
			resources: ResourcesStore.getResources()
		});
	},
	render: function() {
		var form;
		switch (this.state.type) {
			case 'author': {
					form = (
						<AuthorForm />
					);
					break;
				}
			case 'book': {
					form = (
						<BookForm authors={this.state.resources.authors} images={this.state.resources.images}/>
					);
					break;
				}
			case 'copy': {
					form = (
						<CopyForm authors={this.state.resources.authors} books={this.state.resources.books}/>
					);
					break;
				}
		};

		var message;
		if (this.state.message != ''){
			message = (
				<h5 className='message'>
					{this.state.message}
				</h5>
			);
		}

		return (
			<div className='u-full-width'>
				{message}
				<ResourcesOptions />
				{form}
			</div>
		);
	}
});

module.exports = ResourcesApp;
