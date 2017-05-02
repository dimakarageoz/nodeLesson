
var express = require ('express');
var bodyParser = require ('body-parser');
var db =require ('./db');
var artistController = require('./controllers/artists.js');

var app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended : true
}));
db.connect('mongodb://localhost:27017/myapi', function(err){
  if(err){
    return console.log(err);
  } else {
    app.listen(2731, function(){
      console.log('Start');
    })
  }
})

app.get('/' , function(req, res){
  res.send('Hellow API');
})
app.get('/artist', artistController.all);
app.get('/artist/:id', artistController.one);
app.post('/artist', artistController.addUser);
app.put('/artist/:id', artistController.upDate);
app.delete('/artist/:id', artistController.delete);
