var ResourcesActionCreator = require('../actions/ResourcesActionCreator');

var CopyForm = React.createClass({
	getInitialState: function() {
		return {
			book: '',
		};
	},
	handleBookChange: function(event) {
		this.setState({book: event.target.value});
	},
	handlePost: function(){
		ResourcesActionCreator.postCopy({
			book: {
				id: this.state.book
			}
		});
	},
	render: function() {
		return (
			<div className='u-full-width form'>
					<div className='form-row'>
						<label className='two columns'>Książka: </label><input className='ten columns' type="text" name="book" value={this.state.book} onChange={this.handleBookChange}/>
					</div>
					<div className='form-row'>
						<button className='button-primary' onClick={this.handlePost}>Dodaj</button>
					</div>
			</div>
		);
	}
});

module.exports = CopyForm;
