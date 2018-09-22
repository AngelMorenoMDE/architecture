var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
var app = express();

app.use(express.static('public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(session({
  secret: 'mysecretpassword',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false,
            maxAge:600000}
}));
var sess;
app.get('/',function(req,res){

  var result = {"id":req.query.id};
  res.send(result);

});
app.post('/',function(req,res){

  res.send("Request id: " + JSON.stringify(req.body));

});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
