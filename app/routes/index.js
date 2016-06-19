'use strict';

var path = process.cwd();
var ImageHandler = require(path + '/app/controllers/imageHandler.server.js');

module.exports = function (app) {

	var imageHandler = new ImageHandler();
	
	app.route('/')
		.get(function (req, res) {
			res.sendFile(path + '/public/index.html');
		});

	app.route('/imagesearch/:keywords')
		.get(imageHandler.getQuery);
		
	app.route('/latest/imagesearch/')
		.get(imageHandler.getLatest);

};
