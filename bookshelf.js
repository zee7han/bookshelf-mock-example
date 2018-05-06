var db = require('./db.js')

var bookshelf = require('bookshelf')(db);
bookshelf.plugin = jest.fn();   // Here we are mock the plugin function with the jest mock function
module.exports = bookshelf;
