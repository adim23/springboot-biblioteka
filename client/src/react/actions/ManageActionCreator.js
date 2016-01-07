var Dispatcher = require('../core/Dispatcher'),
		ActionConstants = require('../constants/ActionConstants'),
		Promise = require('es6-promise').Promise,
		API = require('../services/API');

var ManageActionCreator = {
	getImages: function() {
		return API
			.get('/api/images')
			.then(function(images) {
				Dispatcher.handleViewAction({
					actionType: ActionConstants.RECEIVE_IMAGES,
					images: images
				});
			})
			.catch(function() {
				Dispatcher.handleViewAction({
					actionType: ActionConstants.RECEIVE_ERROR,
					error: 'Wystąpił błąd przy odbieraniu danych miniatur.'
				});
			});
	},
	getImagesBy: function(parameters) {
		return API
			.get('/api/images?path=' + parameters.path)
			.then(function(images) {
				Dispatcher.handleViewAction({
					actionType: ActionConstants.RECEIVE_IMAGES,
					images: images
				});
			})
			.catch(function() {
				Dispatcher.handleViewAction({
					actionType: ActionConstants.RECEIVE_ERROR,
					error: 'Wystąpił błąd przy odbieraniu danych miniatur.'
				});
			});
	},
	getAuthors: function() {
		return API
			.get('/api/authors')
			.then(function(authors) {
				Dispatcher.handleViewAction({
					actionType: ActionConstants.RECEIVE_AUTHORS,
					authors: authors
				});
			})
			.catch(function() {
				Dispatcher.handleViewAction({
					actionType: ActionConstants.RECEIVE_ERROR,
					error: 'Wystąpił błąd przy odbieraniu danych autorów.'
				});
			});
	},
	getAuthorsBy: function(parameters) {
		return API
			.get('/api/authors?author=' + parameters.author)
			.then(function(authors) {
				Dispatcher.handleViewAction({
					actionType: ActionConstants.RECEIVE_AUTHORS,
					authors: authors
				});
			})
			.catch(function() {
				Dispatcher.handleViewAction({
					actionType: ActionConstants.RECEIVE_ERROR,
					error: 'Wystąpił błąd przy odbieraniu danych autorów.'
				});
			});
	},
	getLoans: function() {
		return API
			.get('/api/loans')
			.then(function(loans) {
				Dispatcher.handleViewAction({
					actionType: ActionConstants.RECEIVE_LOANS,
					loans: loans
				});
			})
			.catch(function() {
				Dispatcher.handleViewAction({
					actionType: ActionConstants.RECEIVE_ERROR,
					error: 'Wystąpił błąd przy odbieraniu danych wypożyczeń.'
				});
			});
	},
	getLoansBy: function(parameters) {
		return API
			.get('/api/loans?firstname=' + parameters.firstname + '&secondname=' + parameters.secondname +
				((parameters.type != 'all') ? (
					'&loaned=' + (parameters.type == 'loaned')
				): '')
			)
			.then(function(loans) {
				Dispatcher.handleViewAction({
					actionType: ActionConstants.RECEIVE_LOANS,
					loans: loans
				});
			})
			.catch(function() {
				Dispatcher.handleViewAction({
					actionType: ActionConstants.RECEIVE_ERROR,
					error: 'Wystąpił błąd przy odbieraniu danych wypożyczeń.'
				});
			});
	},
	getCopies: function() {
		return API
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
					error: 'Wystąpił błąd przy odbieraniu danych egzemplarzy.'
				});
			});
	},
	getCopiesBy: function(parameters) {
		return API
			.get('/api/copies?title=' + parameters.title + '&author=' + parameters.author +
				((parameters.type != 'all') ? (
					'&available=' + (parameters.type == 'available')
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
					error: 'Wystąpił błąd przy odbieraniu danych egzemplarzy.'
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
					error: 'Wystąpił błąd przy odbieraniu danych czytelników.'
				});
			});
	},
	getPeopleBy: function(parameters) {
		return API
			.get('/api/people?firstname=' + parameters.firstname + '&secondname=' + parameters.secondname)
			.then(function(people) {
				Dispatcher.handleViewAction({
					actionType: ActionConstants.RECEIVE_PEOPLE,
					people: people
				});
			})
			.catch(function() {
				Dispatcher.handleViewAction({
					actionType: ActionConstants.RECEIVE_ERROR,
					error: 'Wystąpił błąd przy odbieraniu danych czytelników.'
				});
			});
	}
};

module.exports = ManageActionCreator;
