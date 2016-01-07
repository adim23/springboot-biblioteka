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
						<option value="authors">Autorzy</option>
						<option value="books">Książki</option>
						<option value="copies">Egzemplarze</option>
						<option value="people" selected>Czytelnicy</option>
						<option value="loans">Wypożyczenia</option>
						<option value="images">Miniatury</option>
					</select>
				</div>
			</div>
		);
	}
});

module.exports = ManageOptions;
