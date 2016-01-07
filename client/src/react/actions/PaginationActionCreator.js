var Dispatcher = require('../core/Dispatcher'),
		ActionConstants = require('../constants/ActionConstants'),
		Promise = require('es6-promise').Promise,
		API = require('../services/API');

var PaginationActionCreator = {
	setPage: function(page) {
		Dispatcher.handleViewAction({
			actionType: ActionConstants.CHANGE_PAGE,
			page: page
		});
	}
};

module.exports = PaginationActionCreator;
