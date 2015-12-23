var Dispatcher = require('../core/Dispatcher'),
		ActionConstants = require('../constants/ActionConstants'),
		EventEmitter = require('events').EventEmitter,
		assign = require('object-assign');

var _type = 'author',
		_message = '';

function setType(type) {
	_type = type;
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
		case ActionConstants.CHANGE_OPTION:
			setType(action.type);
			break;
		case ActionConstants.HANDLE_POST:
			setMessage("Dodano pomyślnie zasób. ");
			break;
		case ActionConstants.RECEIVE_ERROR:
			setMessage("Wystąpił błąd.");
			break;
	}
	ResourcesStore.emitChange();
	return true;
});

module.exports = ResourcesStore;
