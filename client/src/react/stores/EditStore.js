var Dispatcher = require('../core/Dispatcher'),
		ActionConstants = require('../constants/ActionConstants'),
		EventEmitter = require('events').EventEmitter,
		assign = require('object-assign');

var _type = '',
		_edit = false,
		_resources = {
			authors: [],
			images: [],
			author: null,
			book: null,
			person: null
		},
		_message = '';

function setType(type) {
	_type = type;
};

function setEdit(edit) {
	_edit = edit;
};

function setAuthors(authors) {
	_resources.authors = authors;
};
function setImages(images) {
	_resources.images = images;
};

function setAuthor(author) {
	_resources.author = author;
};
function setBook(book) {
	_resources.book = book;
};
function setPerson(person) {
	_resources.person = person;
};

function setMessage(message) {
	_message = message;
};

var EditStore = assign({}, EventEmitter.prototype, {
	emitChange: function() {
		this.emit('change')
	},
	addChangeListener: function(callback) {
		this.on('change', callback)
	},
	removeChangeListener: function(callback) {
		this.removeListener('change', callback);
	},
	getAuthors: function() {
		return _resources.authors;
	},
	getImages: function() {
		return _resources.images;
	},
	getAuthor: function() {
		return _resources.author;
	},
	getBook: function() {
		return _resources.book;
	},
	getPerson: function() {
		return _resources.person;
	},
	getEdit: function() {
		return _edit;
	},
	getResources: function() {
		return _resources;
	},
	getType: function() {
		return _type;
	},
	getMessage: function() {
		return _message;
	},
});

EditStore.dispatchToken = Dispatcher.register(function(payload) {
	var action = payload.action;
	switch (action.actionType) {
		case ActionConstants.RECEIVE_AUTHORS:
			setAuthors(action.authors);
			break;
		case ActionConstants.RECEIVE_IMAGES:
			setImages(action.images);
			break;
		case ActionConstants.RECEIVE_AUTHOR:
			setAuthor(action.author);
			break;
		case ActionConstants.RECEIVE_BOOK:
			setBook(action.book);
			break;
		case ActionConstants.RECEIVE_PERSON:
			setPerson(action.person);
			break;
		case ActionConstants.HANDLE_PUT:
			setMessage("Pomyślnie zmieniono zasoby.");
			break;
		case ActionConstants.EDIT_TYPE:
			setType(action.type);
			break;
		case ActionConstants.TOGGLE_EDIT:
			setEdit(true);
			break;
		case ActionConstants.RECEIVE_ERROR:
			setMessage(action.error);
			console.warning(action.error);
			console.error(action.errorStack);
			break;
	}
	EditStore.emitChange();
	return true;
});

module.exports = EditStore;
