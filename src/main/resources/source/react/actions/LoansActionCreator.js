var Dispatcher = require('../core/Dispatcher'),
		ActionConstants = require('../constants/ActionConstants'),
		Promise = require('es6-promise').Promise,
		API = require('../services/API');

var LoansActionCreator = {
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

module.exports = LoansActionCreator;
