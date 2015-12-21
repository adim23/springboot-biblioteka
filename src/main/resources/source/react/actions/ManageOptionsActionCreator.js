var Dispatcher = require('../core/Dispatcher'),
		ActionConstants = require('../constants/ActionConstants'),
		Promise = require('es6-promise').Promise,
		API = require('../services/API');

var ManageOptionsActionCreator = {
	setShow: function(show) {
		Dispatcher.handleViewAction({
			actionType: ActionConstants.CHANGE_OPTION,
			show: show
		});
	}
};

module.exports = ManageOptionsActionCreator;
