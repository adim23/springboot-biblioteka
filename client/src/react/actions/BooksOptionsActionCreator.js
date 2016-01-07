var Dispatcher = require('../core/Dispatcher'),
		ActionConstants = require('../constants/ActionConstants'),
		Promise = require('es6-promise').Promise,
		API = require('../services/API');

var BooksOptionsActionCreator = {
	setView: function(view) {
		Dispatcher.handleViewAction({
			actionType: ActionConstants.CHANGE_VIEW,
			view: view
		});
	}
};

module.exports = BooksOptionsActionCreator;
