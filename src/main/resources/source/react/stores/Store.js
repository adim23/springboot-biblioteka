var Dispatcher = require('../core/Dispatcher'),
		ActionConstants = require('../constants/ActionConstants'),
		EventEmitter = require('events').EventEmitter,
		assign = require('object-assign');

var _books = [];

function setBooks(books) {
	_books = books;
};

var Store = assign({}, EventEmitter.prototype, {
	emitChange: function() {
		this.emit('change')
	},
	addChangeListener: function(callback) {
		this.on('change', callback)
	},
	removeChangeListener: function(callback) {
		this.removeListener('change', callback);
	},
	getBooks: function() {
		return _books;
	}
});

Store.dispatchToken = Dispatcher.register(function(payload) {
	var action = payload.action;
	switch (action.actionType) {
		case ActionConstants.RECEIVE_BOOKS:
			setBooks(action.books);
			break;
		case ActionConstants.RECEIVE_ERROR:
			break;
		default:
			return true;
	}
	Store.emitChange();
	return true;
});

module.exports = Store;
