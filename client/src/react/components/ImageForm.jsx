var ResourcesActionCreator = require('../actions/ResourcesActionCreator');

var ImageForm = React.createClass({
	getInitialState: function() {
		return {
			name: '',
			image: null
		};
	},
	handlePathChange: function(event) {
		this.setState({name: event.target.value});
	},
	handleImageChange: function(event) {
		console.log(event.target.files);
		this.setState({image: event.target.files});
	},
	handlePost: function(){
		if (!this.state.name || !this.state.image){
			return;
		}
		var thenFn = function(){
			ResourcesActionCreator.getImages();
		};
		var imageData = new FormData(document.getElementById('imageForm'));
		ResourcesActionCreator.postImage(imageData).then(thenFn);
	},
	render: function() {
		return (
			<div className='u-full-width form'>
					<form name="imageForm" id="imageForm" method="post" enctype="multipart/form-data" >
						<div className='form-row'>
							<label className='two columns'>Ścieżka: </label>
							<input name='name' type='text' form='imageForm' className='ten columns' onChange={this.handlePathChange}></input>
						</div>
						<div className='form-row'>
							<label className='two columns'>Miniatura: </label>
							<input name='file' form='imageForm' className='ten columns' type="file" onChange={this.handleImageChange}></input>
						</div>
						</form>
						<div className='form-row'>
							<button className='button-primary' onClick={this.handlePost}>Dodaj</button>
						</div>
			</div>
		);
	}
});

module.exports = ImageForm;
