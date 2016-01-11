var Dispatcher = require('../core/Dispatcher'),
		ActionConstants = require('../constants/ActionConstants'),
		Promise = require('es6-promise').Promise,
		API = require('../services/API');

var EditActionCreator = {
	getResource: function() {
		var type = document.location.pathname.split('/')[1];
		var thenFn = function(){
			Dispatcher.handleViewAction({
				actionType: ActionConstants.EDIT_TYPE,
				type: type,
			});
		};
		var id = document.location.pathname.split('/')[2];
		switch (type){
			case 'author':
				EditActionCreator.getAuthorByID({id: id}).then(thenFn);
				break;
			case 'book':
				EditActionCreator.getBookByID({id: id}).then(thenFn);
				break;
			case 'person':
				EditActionCreator.getPersonByID({id: id}).then(thenFn);
				break;
		}
	},
	toggleEdit: function(view) {
		Dispatcher.handleViewAction({
			actionType: ActionConstants.TOGGLE_EDIT
		});
	},
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
	getAuthorByID: function(parameters) {
		return API
			.get('/api/authors/' + parameters.id)
			.then(function(author) {
				Dispatcher.handleViewAction({
					actionType: ActionConstants.RECEIVE_AUTHOR,
					author: author
				});
			})
			.catch(function(error) {
				Dispatcher.handleViewAction({
					actionType: ActionConstants.RECEIVE_ERROR,
					error: 'Wystąpił błąd przy pobieraniu danych autora.',
					errorStack: error
				});
			});
	},
	getBookByID: function(parameters) {
		return API
			.get('/api/books/' + parameters.id)
			.then(function(book) {
				Dispatcher.handleViewAction({
					actionType: ActionConstants.RECEIVE_BOOK,
					book: book
				});
			})
			.catch(function(error) {
				Dispatcher.handleViewAction({
					actionType: ActionConstants.RECEIVE_ERROR,
					error: 'Wystąpił błąd przy pobieraniu danych książki.',
					errorStack: error
				});
			});
	},
	getPersonByID: function(parameters) {
		return API
			.get('/api/people/' + parameters.id)
			.then(function(person) {
				Dispatcher.handleViewAction({
					actionType: ActionConstants.RECEIVE_PERSON,
					person: person
				});
			})
			.catch(function(error) {
				Dispatcher.handleViewAction({
					actionType: ActionConstants.RECEIVE_ERROR,
					error: 'Wystąpił błąd przy pobieraniu danych osoby.',
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
	editAuthor: function(parameters) {
		return API
			.put('/api/authors/' + parameters.id, parameters)
			.then(function(receive) {
				Dispatcher.handleViewAction({
					actionType: ActionConstants.HANDLE_PUT,
					receive: receive
				});
			})
			.catch(function() {
				Dispatcher.handleViewAction({
					actionType: ActionConstants.RECEIVE_ERROR,
					error: 'Wystąpił błąd przy edytowaniu zasobu.'
				});
			});
	},
	editPerson: function(parameters) {
		return API
			.put('/api/people/' + parameters.id, parameters)
			.then(function(receive) {
				Dispatcher.handleViewAction({
					actionType: ActionConstants.HANDLE_PUT,
					receive: receive
				});
			})
			.catch(function() {
				Dispatcher.handleViewAction({
					actionType: ActionConstants.RECEIVE_ERROR,
					error: 'Wystąpił błąd przy edytowaniu zasobu.'
				});
			});
	},
	editBook: function(parameters) {
		return API
			.put('/api/books/' + parameters.id, parameters)
			.then(function(receive) {
				Dispatcher.handleViewAction({
					actionType: ActionConstants.HANDLE_PUT,
					receive: receive
				});
			})
			.catch(function() {
				Dispatcher.handleViewAction({
					actionType: ActionConstants.RECEIVE_ERROR,
					error: 'Wystąpił błąd przy edytowaniu zasobu.'
				});
			});
	}
};

module.exports = EditActionCreator;
