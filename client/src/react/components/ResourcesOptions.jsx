var ResourcesOptionsActionCreator = require('../actions/ResourcesOptionsActionCreator');

var ResourcesOptions = React.createClass({
	getInitialState: function() {
		return {
			type: 'author'
		};
	},
	handleChange: function(event) {
		this.setState({type: event.target.value});
		ResourcesOptionsActionCreator.setType(event.target.value);
	},
	render: function() {
		return (
			<div className='u-full-width'>
				<div className='row'>
          <label className="two columns">
            Zasób
          </label>
					<select className="ten columns" onChange={this.handleChange}>
						<option value="author">Autor</option>
						<option value="book">Książka</option>
						<option value="copy">Egzemplarz</option>
						<option value="loan">Wypożyczenie</option>
						<option value="image">Miniatura</option>
					</select>
				</div>
			</div>
		);
	}
});

module.exports = ResourcesOptions;
