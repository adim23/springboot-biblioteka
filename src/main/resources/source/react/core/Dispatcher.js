var Flux = require('flux'),
		assign = require('object-assign');

var Dispatcher = assign(new Flux.Dispatcher(), {
	handleViewAction: function(action) {
		this.dispatch({action: action});
	}
});

module.exports = Dispatcher;
