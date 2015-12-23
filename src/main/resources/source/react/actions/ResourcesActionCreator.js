var Dispatcher = require('../core/Dispatcher'),
		ActionConstants = require('../constants/ActionConstants'),
		Promise = require('es6-promise').Promise,
		API = require('../services/API');

var ResourcesActionCreator = {
	postAuthor: function(data) {
		API
			.post('/api/authors', data)
			.then(function(receive) {
				Dispatcher.handleViewAction({
					actionType: ActionConstants.HANDLE_POST,
					receive: receive
				});
			})
			.catch(function() {
				Dispatcher.handleViewAction({
					actionType: ActionConstants.RECEIVE_ERROR,
					error: 'Wystąpił błąd.'
				});
			});
	},
	postBook: function(data) {
		API
			.post('/api/books', data)
			.then(function(receive) {
				Dispatcher.handleViewAction({
					actionType: ActionConstants.HANDLE_POST,
					receive: receive
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

module.exports = ResourcesActionCreator;
