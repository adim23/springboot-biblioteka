var Dispatcher = require('../core/Dispatcher'),
		ActionConstants = require('../constants/ActionConstants'),
		EventEmitter = require('events').EventEmitter,
		assign = require('object-assign');

var _people = [];

function setPeople(people) {
	_people = people;
};

var PeopleStore = assign({}, EventEmitter.prototype, {
	emitChange: function() {
		this.emit('change')
	},
	addChangeListener: function(callback) {
		this.on('change', callback)
	},
	removeChangeListener: function(callback) {
		this.removeListener('change', callback);
	},
	getPeople: function() {
		return _people;
	}
});

PeopleStore.dispatchToken = Dispatcher.register(function(payload) {
	var action = payload.action;
	switch (action.actionType) {
		case ActionConstants.RECEIVE_PEOPLE:
			setPeople(action.people);
			break;
		case ActionConstants.RECEIVE_ERROR:
			break;
		default:
			return true;
	}
	PeopleStore.emitChange();
	return true;
});

module.exports = PeopleStore;
