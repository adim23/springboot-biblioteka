var Dispatcher = require('../core/Dispatcher'),
		ActionConstants = require('../constants/ActionConstants'),
		Promise = require('es6-promise').Promise,
		API = require('../services/API');

var ResourcesOptionsActionCreator = {
	setType: function(type) {
		Dispatcher.handleViewAction({
			actionType: ActionConstants.CHANGE_OPTION,
			type: type
		});
	}
};

module.exports = ResourcesOptionsActionCreator;
