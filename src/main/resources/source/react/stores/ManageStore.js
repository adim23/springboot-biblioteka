var Dispatcher = require('../core/Dispatcher'),
		ActionConstants = require('../constants/ActionConstants'),
		EventEmitter = require('events').EventEmitter,
		assign = require('object-assign');

var _people = [],
		_loans = [],
		_copies = [],
		_show = "people",
		_message = "",
		_current = 0;

function setPeople(people) {
	_people = people;
};

function setLoans(loans) {
	_loans = loans;
};

function setCopies(copies) {
	_copies = copies;
};

function setShow(show) {
	_show = show;
};

function setMessage(message) {
	_message = message;
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
	getCopies: function() {
		return _copies;
	},
	getShow: function() {
		return _show;
	},
	getMessage: function() {
		return _message;
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
			setMessage('');
			setCurrent(0);
			break;
		case ActionConstants.RECEIVE_LOANS:
			setLoans(action.loans);
			setMessage('');
			setCurrent(0);
			break;
		case ActionConstants.RECEIVE_COPIES:
			setCopies(action.copies);
			setMessage('');
			setCurrent(0);
			break;
		case ActionConstants.CHANGE_OPTION:
			setShow(action.show);
			setMessage('');
			setCurrent(0);
			break;
		case ActionConstants.CHANGE_PAGE:
			setCurrent(action.page);
			setMessage('');
			break;
		case ActionConstants.RECEIVE_ERROR:
			setMessage('Wystąpił błąd.');
			break;
	}
	ManageStore.emitChange();
	return true;
});

module.exports = ManageStore;
