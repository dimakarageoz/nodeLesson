var mongoClient = require('mongodb').MongoClient;

var state ={
  db: null
}

exports.connect = function (url, done) {
  if(state.db)
    return done();
  mongoClient.connect(url, function(err, db){
    if(err){
      return done(err);
    } else {
      state.db = db;
      done();
    }
  })
}

exports.get = function() {
  return state.db;
}
