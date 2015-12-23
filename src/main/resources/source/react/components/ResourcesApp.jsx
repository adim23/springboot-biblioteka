var ResourcesStore = require('../stores/ResourcesStore'),
		ResourcesOptions = require('./ResourcesOptions.jsx'),
		AuthorForm = require('./AuthorForm.jsx'),
		BookForm = require('./BookForm.jsx');

var ResourcesApp = React.createClass({
	getInitialState: function() {
		return {
			type: 'author',
			message: ''
		};
	},
	componentWillMount: function() {
		ResourcesStore.addChangeListener(this.onChange);
	},
	componentWillUnmount: function() {
		ResourcesStore.removeChangeListener(this.onChange);
	},
	onChange: function() {
		this.setState({
			type: ResourcesStore.getType(),
			message: ResourcesStore.getMessage()
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
						<BookForm />
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
