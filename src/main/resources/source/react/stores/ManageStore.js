var Dispatcher = require('../core/Dispatcher'),
		ActionConstants = require('../constants/ActionConstants'),
		EventEmitter = require('events').EventEmitter,
		assign = require('object-assign');

var _resources = {
			people: [],
			loans: [],
			copies: [],
			authors: [],
			images: [],
			books: []
		},
		_show = "people",
		_message = "",
		_current = 0;

function setPeople(people) {
	_resources.people = people;
};

function setLoans(loans) {
	_resources.loans = loans;
};

function setCopies(copies) {
	_resources.copies = copies;
};

function setAuthors(authors) {
	_resources.authors = authors;
};

function setBooks(books) {
	_resources.books = books;
};

function setImages(images) {
	_resources.images = images;
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
		return _resources.people;
	},
	getLoans: function() {
		return _resources.loans;
	},
	getCopies: function() {
		return _resources.copies;
	},
	getBooks: function() {
		return _resources.books;
	},
	getAuthors: function() {
		return _resources.authors;
	},
	getImages: function() {
		return _resources.images;
	},
	getResources: function() {
		return _resources;
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
			setCurrent(0);
			break;
		case ActionConstants.RECEIVE_LOANS:
			setLoans(action.loans);
			setCurrent(0);
			break;
		case ActionConstants.RECEIVE_COPIES:
			setCopies(action.copies);
			setCurrent(0);
			break;
		case ActionConstants.RECEIVE_BOOKS:
			setBooks(action.books);
			setCurrent(0);
			break;
		case ActionConstants.RECEIVE_AUTHORS:
			setAuthors(action.authors);
			setCurrent(0);
			break;
		case ActionConstants.RECEIVE_IMAGES:
			("Store: Got images:");
			(action.images);
			setImages(action.images);
			setCurrent(0);
			break;
		case ActionConstants.CHANGE_OPTION:
			setShow(action.show);
			setMessage('');
			setCurrent(0);
			break;
		case ActionConstants.CHANGE_PAGE:
			setCurrent(action.page);
			break;
		case ActionConstants.HANDLE_DELETE:
			setMessage('Pomyślnie usunięto zasoby.');
			setCurrent(0);
			break;
		case ActionConstants.RECEIVE_ERROR:
			setMessage(action.error);
			console.warning(action.error);
			console.error(action.errorStack);
			break;
	}
	ManageStore.emitChange();
	return true;
});

module.exports = ManageStore;
