const bookshelf = require('../bookshelf');
require('./user');
const userGroup = bookshelf.Model.extend(
    {
        tableName:     'user_group',
        users:         function () {
            return this.hasMany('User', 'userGroupId');
        }
    },
    {}
);

module.exports = userGroup;
