var Dispatcher = require('../core/Dispatcher'),
		ActionConstants = require('../constants/ActionConstants'),
		Promise = require('es6-promise').Promise,
		API = require('../services/API');

var ResourcesActionCreator = {
	getAuthors: function() {
		return API
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
		return API
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
	getPeople: function() {
		return API
			.get('/api/people')
			.then(function(people) {
				Dispatcher.handleViewAction({
					actionType: ActionConstants.RECEIVE_PEOPLE,
					people: people
				});
			})
			.catch(function() {
				Dispatcher.handleViewAction({
					actionType: ActionConstants.RECEIVE_ERROR,
					error: 'Wystąpił błąd przy pobieraniu listy książek.'
				});
			});
	},
	getBooks: function() {
		return API
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
		return API
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
	getCopiesByBookID: function(parameters) {
		return API
			.get('/api/books/' + parameters.bookID + '/copies' +
				((parameters.type != 'all') ? (
					'?available=' + (parameters.type != 'available')
				): '')
			)
			.then(function(copies) {
				Dispatcher.handleViewAction({
					actionType: ActionConstants.RECEIVE_COPIES,
					copies: copies
				});
			})
			.catch(function() {
				Dispatcher.handleViewAction({
					actionType: ActionConstants.RECEIVE_ERROR,
					error: 'Wystąpił błąd przy pobieraniu listy egzemplarzy.'
				});
			});
	},
	postAuthor: function(data) {
		return API
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
		return API
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
	postImage: function(data) {
		console.log("postImage");
		console.log(data);
		return API
			.post('/api/images', data)
			.then(function(receive) {
				Dispatcher.handleViewAction({
					actionType: ActionConstants.HANDLE_POST,
					receive: receive
				});
			})
			.catch(function() {
				Dispatcher.handleViewAction({
					actionType: ActionConstants.RECEIVE_ERROR,
					error: 'Wystąpił błąd przy dodawaniu miniatury.'
				});
			});
	},
	postBook: function(data) {
		return API
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
	},
	postLoan: function(data) {
		return API
			.post('/api/loans', data)
			.then(function(receive) {
				Dispatcher.handleViewAction({
					actionType: ActionConstants.HANDLE_POST,
					receive: receive
				});
			})
			.catch(function() {
				Dispatcher.handleViewAction({
					actionType: ActionConstants.RECEIVE_ERROR,
					error: 'Wystąpił błąd przy wypożyczaniu.'
				});
			});
	},
	deleteAuthor: function(parameters) {
		return API
			.delete('/api/authors/' + parameters.id)
			.then(function(receive) {
				Dispatcher.handleViewAction({
					actionType: ActionConstants.HANDLE_DELETE,
					receive: receive
				});
			})
			.catch(function() {
				Dispatcher.handleViewAction({
					actionType: ActionConstants.RECEIVE_ERROR,
					error: 'Wystąpił błąd przy usuwaniu autora.'
				});
			});
	},
	deleteBook: function(parameters) {
		return API
			.delete('/api/books/' + parameters.id)
			.then(function(receive) {
				Dispatcher.handleViewAction({
					actionType: ActionConstants.HANDLE_DELETE,
					receive: receive
				});
			})
			.catch(function() {
				Dispatcher.handleViewAction({
					actionType: ActionConstants.RECEIVE_ERROR,
					error: 'Wystąpił błąd przy usuwaniu książki.'
				});
			});
	},
	deleteCopy: function(parameters) {
		return API
			.delete('/api/copies/' + parameters.id)
			.then(function(receive) {
				Dispatcher.handleViewAction({
					actionType: ActionConstants.HANDLE_DELETE,
					receive: receive
				});
			})
			.catch(function() {
				Dispatcher.handleViewAction({
					actionType: ActionConstants.RECEIVE_ERROR,
					error: 'Wystąpił błąd przy usuwaniu egzemplarza.'
				});
			});
	},
	returnLoan: function(parameters) {
		return API
			.put('/api/loans/' + parameters.id, {
				returned: true,
			})
			.then(function(receive) {
				Dispatcher.handleViewAction({
					actionType: ActionConstants.HANDLE_CHANGE,
					receive: receive
				});
			})
			.catch(function() {
				Dispatcher.handleViewAction({
					actionType: ActionConstants.RECEIVE_ERROR,
					error: 'Wystąpił błąd przy zwrocie egzemplarza.'
				});
			});
	}
};

module.exports = ResourcesActionCreator;
