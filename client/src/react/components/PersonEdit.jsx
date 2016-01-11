var EditActionCreator = require('../actions/EditActionCreator');

var PersonEdit = React.createClass({
	getInitialState: function() {
		return {
			firstname: '',
			secondname: '',
			roles: null
		};
	},
	handleFirstnameChange: function(event) {
		this.setState({firstname: event.target.value});
	},
	handleSecondnameChange: function(event) {
		this.setState({secondname: event.target.value});
	},
	handleEdit: function(){
		EditActionCreator.editPerson({
			id: this.props.person.id,
			firstname: this.state.firstname ? this.state.firstname : this.props.person.firstname,
			secondname: this.state.secondname ? this.state.secondname : this.props.person.secondname
		});
	},
	render: function() {
		return (
			<div className='u-full-width form'>
					<div className='form-row'>
						<label className='two columns'>Imię: </label><input className='ten columns' type="text" name="firstname" value={this.state.firstname} onChange={this.handleFirstnameChange}/>
					</div>
					<div className='form-row'>
						<label className='two columns'>Nazwisko: </label><input className='ten columns' type="text" name="secondname" value={this.state.secondname} onChange={this.handleSecondnameChange}/>
					</div>
					<div className='form-row'>
						<button className='button-primary' onClick={this.handleEdit}>Edytuj</button>
					</div>
			</div>
		);
	}
});

module.exports = PersonEdit;
