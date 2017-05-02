var artist = require ('../models/artistsData.js');

exports.all = function(req, res){
  artist.all(function(err, docs){
    if(err) {
      console.log(err);
      return res.sendStatus(500);
    } else {
      return res.send(docs);
    }
  })
}
exports.one = function(req, res){
  artist.one(req.params.id, function(err, doc){
    if (err) {
      console.log(err);
      return res.sendStatus(500);
    }
    return res.send(doc);

  })
}
exports.addUser = function(req, res) {
  artist.addUser({name: req.body.name}, function(err, result){
    if(err){
      console.log(err);
      res.sendStatus(500);
    } else {
      res.send(result);
    }
  })
}

exports.delete = function(req, res) {
  artist.delete(req.params.id, function(err, result){
    if(err){
      console.log(err);
      res.sendStatus(500);
    } else {
      res.sendStatus(200);
    }
  })
}
