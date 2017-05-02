var db = require('../db/index.js');
db.connect();
function User (props){
  this. name = props;
}
User.prototype.present = function (){
  console.log(`${db.getPhrases("Hellow")} my name is ${this.name}`);
}
module.exports = User;
