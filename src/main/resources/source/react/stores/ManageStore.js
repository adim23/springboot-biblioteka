var Dispatcher = require('../core/Dispatcher'),
		ActionConstants = require('../constants/ActionConstants'),
		EventEmitter = require('events').EventEmitter,
		assign = require('object-assign');

var _people = [],
		_loans = [],
		_show = "people";

function setPeople(people) {
	_people = people;
};

function setLoans(loans) {
	_loans = loans;
};

function setShow(show) {
	_show = show;
};


var ManageStore = assign({}, EventEmitter.prototype, {
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
	},
	getLoans: function() {
		return _loans;
	},
	getShow: function() {
		return _show;
	}
});

ManageStore.dispatchToken = Dispatcher.register(function(payload) {
	var action = payload.action;
	switch (action.actionType) {
		case ActionConstants.RECEIVE_PEOPLE:
			setPeople(action.people);
			break;
		case ActionConstants.RECEIVE_LOANS:
			setLoans(action.loans);
			break;
		case ActionConstants.CHANGE_OPTION:
			setShow(action.show);
			break;
		case ActionConstants.RECEIVE_ERROR:
			break;
	}
	ManageStore.emitChange();
	return true;
});

module.exports = ManageStore;
