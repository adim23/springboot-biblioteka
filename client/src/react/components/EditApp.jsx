var EditStore = require('../stores/EditStore'),
		EditActionCreator = require('../actions/EditActionCreator'),
		AuthorEdit = require('./AuthorEdit.jsx'),
		BookEdit = require('./BookEdit.jsx');

var EditApp = React.createClass({
	getInitialState: function() {
		return {
			resources: {
				authors: [],
				images: [],
				author: null,
				book: null
			},
			edit: false,
			type: '',
			message: ''
		};
	},
	toggleEdit: function() {
		EditActionCreator.toggleEdit();
	},
	componentDidMount: function() {
		EditActionCreator.getResource();
	},
	componentWillMount: function() {
		EditStore.addChangeListener(this.onChange);
	},
	componentWillUnmount: function() {
		EditStore.removeChangeListener(this.onChange);
	},
	onChange: function() {
		this.setState({
			type: EditStore.getType(),
			edit: EditStore.getEdit(),
			message: EditStore.getMessage(),
			resources: EditStore.getResources()
		});
	},
	render: function() {
		if (!this.state.edit){
			return (
				<div className='u-full-width'>
					<button className='twelve columns button-primary' onClick={this.toggleEdit}>Edytuj</button>
				</div>
			)
		}
		var form;
		switch (this.state.type) {
			case 'author': {
					form = (
						<AuthorEdit author={this.state.resources.author}/>
					);
					break;
				}
			case 'book': {
					form = (
						<BookEdit book={this.state.resources.book} authors={this.state.resources.authors} images={this.state.resources.images}/>
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
				{form}
			</div>
		);
	}
});

module.exports = EditApp;
