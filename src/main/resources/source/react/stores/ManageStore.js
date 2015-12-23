var Dispatcher = require('../core/Dispatcher'),
		ActionConstants = require('../constants/ActionConstants'),
		EventEmitter = require('events').EventEmitter,
		assign = require('object-assign');

var _people = [],
		_loans = [],
		_show = "people",
		_current = 0;

function setPeople(people) {
	_people = people;
};

function setLoans(loans) {
	_loans = loans;
};

function setShow(show) {
	_show = show;
};

function setCurrent(current) {
	_current = current;
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
	},
	getCurrent: function() {
		return _current;
	}
});

ManageStore.dispatchToken = Dispatcher.register(function(payload) {
	var action = payload.action;
	switch (action.actionType) {
		case ActionConstants.RECEIVE_PEOPLE:
			setPeople(action.people);
			setCurrent(0);
			break;
		case ActionConstants.RECEIVE_LOANS:
			setLoans(action.loans);
			setCurrent(0);
			break;
		case ActionConstants.CHANGE_OPTION:
			setShow(action.show);
			setCurrent(0);
			break;
		case ActionConstants.CHANGE_PAGE:
			setCurrent(action.page);
			break;
		case ActionConstants.RECEIVE_ERROR:
			break;
	}
	ManageStore.emitChange();
	return true;
});

module.exports = ManageStore;
