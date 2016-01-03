var ManageActionCreator = require('../actions/ManageActionCreator');

var ImagesSearchBar = React.createClass({
	getInitialState: function() {
		return {
			path: ''
		};
	},
	componentDidMount: function() {
		ManageActionCreator.getImages();
		console.log("Mounted.");
	},
	handlePathChange: function(event) {
		this.setState({path: event.target.value});
	},
	handleKeyDown: function(event) {
		if (event.keyCode == 13){
			this.handleSearch();
		}
	},
	handleSearch: function() {
		ManageActionCreator.getImagesBy({
			path: this.state.path
		});
	},
	render: function() {
		return (
			<div className='u-full-width'>
				<div className='row'>
					<input className='ten columns' onKeyDown={this.handleKeyDown} placeholder="Ścieżka" type='text' value={this.state.path} onChange={this.handlePathChange}/>
					<button className="two columns" onClick={this.handleSearch}>Wyszukaj</button>
				</div>
			</div>
		);
	}
});

module.exports = ImagesSearchBar;
