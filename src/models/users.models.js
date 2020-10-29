const bcrypt = require('bcrypt');



//User object create
var User = function(user) {
    this.name = user.name;
    this.lastname = user.lastname;
    this.email = user.email;
    this.role = user.role ? user.role : 'client';
    this.sede_idsede = user.sede;
    this.password = bcrypt.hashSync(user.password, 10);
};
module.exports = User;