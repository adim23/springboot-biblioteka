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
					error: 'Wystąpił błąd.'
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
					error: 'Wystąpił błąd.'
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
					error: 'Wystąpił błąd.'
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
					error: 'Wystąpił błąd.'
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
					error: 'Wystąpił błąd.'
				});
			});
	},
	getLoansBy: function(parameters) {
		return API
			.get('/api/loans?firstname=' + parameters.firstname + '&secondname=' + parameters.secondname)
			.then(function(loans) {
				Dispatcher.handleViewAction({
					actionType: ActionConstants.RECEIVE_LOANS,
					loans: loans
				});
			})
			.catch(function() {
				Dispatcher.handleViewAction({
					actionType: ActionConstants.RECEIVE_ERROR,
					error: 'Wystąpił błąd.'
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
				resolve(copies);
			})
			.catch(function() {
				Dispatcher.handleViewAction({
					actionType: ActionConstants.RECEIVE_ERROR,
					error: 'Wystąpił błąd.'
				});
				reject('Wystąpił błąd.');
			});
	},
	getCopiesBy: function(parameters) {
		return API
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
					error: 'Wystąpił błąd.'
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
					error: 'Wystąpił błąd.'
				});
			});
	}
};

module.exports = ManageActionCreator;
