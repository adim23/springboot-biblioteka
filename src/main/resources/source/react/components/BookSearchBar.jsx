var SearchBar = React.createClass({
	render: function() {
		return (
			<form className='u-full-width'>
				<div className='row'>
					<input className='eight columns' type='text' placeholder='Szukaj...'/>
					<input className="four columns" type="submit" value="Wyszukaj"/>
				</div>
			</form>
		);
	}
});

module.exports = SearchBar;
