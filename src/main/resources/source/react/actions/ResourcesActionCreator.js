var Dispatcher = require('../core/Dispatcher'),
		ActionConstants = require('../constants/ActionConstants'),
		Promise = require('es6-promise').Promise,
		API = require('../services/API');

var ResourcesActionCreator = {
	getAuthors: function() {
		API
			.get('/api/authors/')
			.then(function(authors) {
				Dispatcher.handleViewAction({
					actionType: ActionConstants.RECEIVE_AUTHORS,
					authors: authors
				});
			})
			.catch(function(error) {
				Dispatcher.handleViewAction({
					actionType: ActionConstants.RECEIVE_ERROR,
					error: 'Wystąpił błąd przy pobieraniu listy autorów.',
					errorStack: error
				});
			});
	},
	getImages: function() {
		API
			.get('/api/images/')
			.then(function(images) {
				Dispatcher.handleViewAction({
					actionType: ActionConstants.RECEIVE_IMAGES,
					images: images
				});
			})
			.catch(function(error) {
				Dispatcher.handleViewAction({
					actionType: ActionConstants.RECEIVE_ERROR,
					error: 'Wystąpił błąd przy pobieraniu listy miniatur.',
					errorStack: error
				});
			});
	},
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
					error: 'Wystąpił błąd przy pobieraniu listy książek.'
				});
			});
	},
	getBooksByAuthorID: function(parameters) {
		API
			.get('/api/authors/' + parameters.authorID + '/books')
			.then(function(books) {
				Dispatcher.handleViewAction({
					actionType: ActionConstants.RECEIVE_BOOKS,
					books: books
				});
			})
			.catch(function() {
				Dispatcher.handleViewAction({
					actionType: ActionConstants.RECEIVE_ERROR,
					error: 'Wystąpił błąd przy pobieraniu listy książek.'
				});
			});
	},
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
					error: 'Wystąpił błąd przy dodawaniu autora.'
				});
			});
	},
	postCopy: function(data) {
		API
			.post('/api/copies', data)
			.then(function(receive) {
				Dispatcher.handleViewAction({
					actionType: ActionConstants.HANDLE_POST,
					receive: receive
				});
			})
			.catch(function() {
				Dispatcher.handleViewAction({
					actionType: ActionConstants.RECEIVE_ERROR,
					error: 'Wystąpił błąd przy dodawaniu egzemplarza.'
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
					error: 'Wystąpił błąd przy dodawaniu książki.'
				});
			});
	}
};

module.exports = ResourcesActionCreator;
