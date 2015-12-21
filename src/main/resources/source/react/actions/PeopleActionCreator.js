var Dispatcher = require('../core/Dispatcher'),
		ActionConstants = require('../constants/ActionConstants'),
		Promise = require('es6-promise').Promise,
		API = require('../services/API');

var PeopleActionCreator = {
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
	}
};

module.exports = PeopleActionCreator;
