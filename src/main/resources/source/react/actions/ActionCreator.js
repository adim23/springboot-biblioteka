var Dispatcher = require('../core/Dispatcher'),
		ActionConstants = require('../constants/ActionConstants'),
		Store = require('../stores/Store'),
		Promise = require('es6-promise').Promise,
		API = require('../services/API');

var ActionCreator = {
	getBooks: function() {
		API
			.get('/api/books')
			.then(function(books) {
				Dispatcher.handleViewAction({
					actionType: ActionConstants.RECEIVE_BOOKS,
					books: books
				});
			})
			.catch(function() {
				Dispatcher.handleViewAction({
					actionType: ActionConstants.RECEIVE_ERROR,
					error: 'Wystąpił błąd.'
				});
			});
	},
	getBooksBy: function(parameters) {
		API
			.get('/api/books?title=' + parameters.title + '&author=' + parameters.author)
			.then(function(books) {
				Dispatcher.handleViewAction({
					actionType: ActionConstants.RECEIVE_BOOKS,
					books: books
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

module.exports = ActionCreator;
