var Dispatcher = require('../core/Dispatcher'),
		ActionConstants = require('../constants/ActionConstants'),
		ManageStore = require('../stores/ManageStore'),
		Promise = require('es6-promise').Promise,
		API = require('../services/API');

var ManageActionCreator = {
	getPeople: function() {
		API
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
		API
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
	},
	getLoans: function() {
		API
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
		API
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
	}
};

module.exports = ManageActionCreator;
