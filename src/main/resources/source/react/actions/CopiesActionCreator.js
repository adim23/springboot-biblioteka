var Dispatcher = require('../core/Dispatcher'),
		ActionConstants = require('../constants/ActionConstants'),
		Promise = require('es6-promise').Promise,
		API = require('../services/API');

var CopiesActionCreator = {
	getCopies: function() {
		API
			.get('/api/copies')
			.then(function(copies) {
				Dispatcher.handleViewAction({
					actionType: ActionConstants.RECEIVE_COPIES,
					copies: copies
				});
			})
			.catch(function() {
				Dispatcher.handleViewAction({
					actionType: ActionConstants.RECEIVE_ERROR,
					error: 'Wystąpił błąd.'
				});
			});
	},
	getCopiesBy: function(parameters) {
		API
			.get('/api/copies?title=' + parameters.title + '&author=' + parameters.author)
			.then(function(copies) {
				Dispatcher.handleViewAction({
					actionType: ActionConstants.RECEIVE_COPIES,
					copies: copies
				});
			})
			.catch(function() {
				Dispatcher.handleViewAction({
					actionType: ActionConstants.RECEIVE_ERROR,
					error: 'Wystąpił błąd.'
				});
			});
	}
};

module.exports = CopiesActionCreator;
