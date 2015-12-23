var PaginationActionCreator = require('../actions/PaginationActionCreator');

var Pagination = React.createClass({
	handleClick: function(event) {
		PaginationActionCreator.setPage(event.target.value - 1);
	},
	render: function() {
		var buttonsFn = (function(that){
			return function(element, index){
				if (index == that.props.current) {
					return (
						<input type="button" className="two columns button-primary" onClick={that.handleClick} value={index+1}></input>
					);
				}
				return (
					<input type="button" className="two columns" onClick={that.handleClick} value={index+1}></input>
				);
			};
		})(this);
		var buttons = Array
			.apply(this, new Array(this.props.pages))
			.map(buttonsFn)
			.map(function(button, index, buttons) {
				if (index % 6 == 0){
					var row = buttons.slice(index, index + 6);
					return (
						<div className="row">
							{row}
						</div>
					)
				}
				return false;
			}).filter(function(row){
			return row != false;
			});
		return (
			<div className='u-full-width pagination'>
				<div className='row'>
					{buttons}
				</div>
			</div>
		);
	}
});

module.exports = Pagination;
