const bookshelf = require('../bookshelf');
require('./userGroup');
const user = bookshelf.Model.extend(
    {
        tableName:     'user',
        userGroup:     function () {
            return this.belongsTo('UserGroup', 'userGroupId');
        }
    },
    {
        byIdWithUserGroup: function (userId) {
            return this.forge()
                .query({ where: { id: userId } })
                .fetch({ withRelated: ['userGroup'] })
            ;
        }
    }
);

module.exports = user;
