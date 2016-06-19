'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Search = new Schema({
	term: {
		type: String,
		required: true,
		trim: true
	},
    when: {
      type: Date,
      required: true
    }
});

module.exports = mongoose.model('Search', Search);
