var request = require('superagent'),
		Promise = require('es6-promise').Promise;

var API = {
	get: function(url) {
		return new Promise(function(resolve, reject) {
			request
				.get(url)
				.end(function(err, res) {
					if (res.status === 404) {
						reject();
					} else {
						resolve(JSON.parse(res.text));
					}
				});
		});
	},
	post: function(url, data) {
		return new Promise(function(resolve, reject) {
			request
				.post(url)
				.send(data)
				.end(function(err, res) {
					if (res.status === 404) {
						reject();
					} else {
						try {
							resolve(JSON.parse(res.text));
						}
						catch (err){
							reject();
						}
					}
				});
		});
	},
	put: function(url, data) {
		return new Promise(function(resolve, reject) {
			request
				.put(url)
				.send(data)
				.end(function(err, res) {
					if (res.status === 404) {
						reject();
					} else {
						try {
							resolve(JSON.parse(res.text));
						}
						catch (err){
							reject();
						}
					}
				});
		});
	},
	delete: function(url) {
		return new Promise(function(resolve, reject) {
			request
				.del(url)
				.end(function(err, res) {
					if (res.status === 404) {
						reject();
					} else {
						try {
							resolve(JSON.parse(res.text));
						}
						catch (err){
							reject();
						}
					}
				});
		});
	}
};

module.exports = API;
