//require express

var express = require('express');

//Create new app

var app = express();

app.use(express.static('Public'));

app.listen(3000, function(){
  console.log('Express server is up in port 3000.');
});
