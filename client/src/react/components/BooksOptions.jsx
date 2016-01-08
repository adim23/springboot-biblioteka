var BooksOptionsActionCreator = require('../actions/BooksOptionsActionCreator');

var BooksOptions = React.createClass({
	getInitialState: function() {
		return {
			view: 'list'
		};
	},
	handleChange: function(event) {
		this.setState({view: event.target.value});
		BooksOptionsActionCreator.setView(event.target.value);
	},
	render: function() {
		return (
			<div className='u-full-width'>
				<div className='row'>
          <label className="two columns">
            Widok
          </label>
					<select className="ten columns" onChange={this.handleChange}>
						<option value="list">Lista</option>
						<option value="both">Lista i miniatury</option>
						<option value="thumbnails">Miniatury</option>
					</select>
				</div>
			</div>
		);
	}
});

module.exports = BooksOptions;
