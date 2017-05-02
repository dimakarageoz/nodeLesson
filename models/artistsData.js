var db = require('../db');
var objectID = require ('mongodb').ObjectID;

exports.all = function(cb) {
  db.get().collection('artists').find().toArray(function (err, docs){
    cb(err, docs);
  })
}

exports.one = function(id, cb) {
  db.get().collection('artists').findOne( { _id: objectID(id) },  function (err, doc) {
    cb(err, doc);
  })
}

exports.addUser = function(artist, cb) {
  db.get().collection('artists').insert(artist, function (err, result){
    cb(err, result);
  })
}
exports.delete = function(idDelete, cb) {
  console.log(objectID(idDelete));
  db.get().collection('artists').deleteOne({ _id: objectID(idDelete) }, function(err, result){
    cb(err, result);
  })
}
