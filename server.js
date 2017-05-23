var express = require('express');
var app = express();

app.use('/', function(req,res){
	res.sendFile(__dirname + '/views/index.html');
});

app.listen(3000,function(){
	console.log('App is listening on %s',process.env.PORT);
});

