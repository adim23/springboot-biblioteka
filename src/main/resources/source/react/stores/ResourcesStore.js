var Dispatcher = require('../core/Dispatcher'),
		ActionConstants = require('../constants/ActionConstants'),
		EventEmitter = require('events').EventEmitter,
		assign = require('object-assign');

var _type = 'author',
		_resources = {
			authors: [],
			books: [],
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

function setMessage(message) {
	_message = message;
};

var ResourcesStore = assign({}, EventEmitter.prototype, {
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

ResourcesStore.dispatchToken = Dispatcher.register(function(payload) {
	var action = payload.action;
	switch (action.actionType) {
		case ActionConstants.RECEIVE_AUTHORS:
			setAuthors(action.authors);
			setMessage('');
			break;
		case ActionConstants.RECEIVE_BOOKS:
			setBooks(action.books);
			setMessage('');
			break;
		case ActionConstants.RECEIVE_IMAGES:
			setImages(action.images);
			setMessage('');
			break;
		case ActionConstants.CHANGE_OPTION:
			setType(action.type);
			break;
		case ActionConstants.HANDLE_POST:
			setMessage("Dodano pomyślnie zasób.");
			break;
		case ActionConstants.RECEIVE_ERROR:
			setMessage(action.error);
			console.warning(action.error);
			console.error(action.errorStack);
			break;
	}
	ResourcesStore.emitChange();
	return true;
});

module.exports = ResourcesStore;
