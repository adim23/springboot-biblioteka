var ManageOptionsActionCreator = require('../actions/ManageOptionsActionCreator');

var ManageOptions = React.createClass({
	getInitialState: function() {
		return {
			show: 'people'
		};
	},
	handleChange: function(event) {
		this.setState({show: event.target.value});
		ManageOptionsActionCreator.setShow(event.target.value);
	},
	render: function() {
		return (
			<div className='u-full-width'>
				<div className='row'>
          <label className="two columns">
            Szukaj
          </label>
					<select className="ten columns" onChange={this.handleChange}>
						<option value="people">Czytelnicy</option>
						<option value="loans">Wypożyczenia</option>
					</select>
				</div>
			</div>
		);
	}
});

module.exports = ManageOptions;
