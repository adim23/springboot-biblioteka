var Dispatcher = require('../core/Dispatcher'),
		ActionConstants = require('../constants/ActionConstants'),
		EventEmitter = require('events').EventEmitter,
		assign = require('object-assign');

var _type = 'author',
		_resources = {
			authors: [],
			books: [],
			copies: [],
			people: [],
			images: []
		},
		_message = '';

function setType(type) {
	_type = type;
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
function setCopies(copies) {
	_resources.copies = copies;
};
function setPeople(people) {
	_resources.people = people;
};


function setMessage(message) {
	_message = message;
};

var ResourcesOptions = assign({}, EventEmitter.prototype, {
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
	getBooks: function() {
		return _resources.books;
	},
	getImages: function() {
		return _resources.images;
	},
	getPeople: function() {
		return _resources.people;
	},
	getCopies: function() {
		return _resources.copies;
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

ResourcesOptions.dispatchToken = Dispatcher.register(function(payload) {
	var action = payload.action;
	switch (action.actionType) {
		case ActionConstants.RECEIVE_AUTHORS:
			setAuthors(action.authors);
			break;
		case ActionConstants.RECEIVE_BOOKS:
			setBooks(action.books);
			break;
		case ActionConstants.RECEIVE_IMAGES:
			setImages(action.images);
			break;
		case ActionConstants.RECEIVE_COPIES:
			setCopies(action.copies);
			break;
		case ActionConstants.RECEIVE_PEOPLE:
			setPeople(action.people);
			break;
		case ActionConstants.CHANGE_OPTION:
			setType(action.type);
			setMessage('');
			break;
		case ActionConstants.HANDLE_POST:
			setMessage("Pomyślnie dodano zasoby.");
			break;
		case ActionConstants.RECEIVE_ERROR:
			setMessage(action.error);
			console.warning(action.error);
			console.error(action.errorStack);
			break;
	}
	ResourcesOptions.emitChange();
	return true;
});

module.exports = ResourcesOptions;
