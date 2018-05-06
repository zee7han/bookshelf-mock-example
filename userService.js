const User = require('./models/user');
module.exports.findAll = () => {
    return User.fetchAll();  //fetchAll: base method on any model
};

module.exports.find = (userId) => {
    return User.byIdWithUserGroup(userId);
};
