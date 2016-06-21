var Model = require('./Model.js');
var User = require('./User.js');


var AccountSchema = {
  user: User,
  accountNumber: Number,
  address: String,
  balance: Number
};

function User(){
  Model.call(this, UserSchema);
}

Model.extend(User);

module.exports = User;