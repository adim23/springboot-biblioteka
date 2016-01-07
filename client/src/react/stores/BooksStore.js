var Dispatcher = require('../core/Dispatcher'),
		ActionConstants = require('../constants/ActionConstants'),
		EventEmitter = require('events').EventEmitter,
		assign = require('object-assign');

var _books = [],
		_view = 'list',
		_message = '',
		_current = 0;

function setBooks(books) {
	_books = books;
};

function setView(view) {
	_view = view;
};

function setMessage(message) {
	_message = message;
};

function setCurrent(current) {
	_current = current;
};

var BooksStore = assign({}, EventEmitter.prototype, {
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
	},
	getView: function() {
		return _view;
	},
	getMessage: function() {
		return _message;
	},
	getCurrent: function() {
		return _current;
	}
});

BooksStore.dispatchToken = Dispatcher.register(function(payload) {
	var action = payload.action;
	switch (action.actionType) {
		case ActionConstants.RECEIVE_BOOKS:
			setBooks(action.books);
			setMessage('');
			setCurrent(0);
			break;
		case ActionConstants.CHANGE_VIEW:
			setView(action.view);
			setMessage('');
			break;
		case ActionConstants.CHANGE_PAGE:
			setCurrent(action.page);
			setMessage('');
			break;
		case ActionConstants.RECEIVE_ERROR:
			setMessage('Wystąpił błąd.');
			break;
		default:
			return true;
	}
	BooksStore.emitChange();
	return true;
});

module.exports = BooksStore;
