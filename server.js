var express = require('express');
var static  = require('express-static');

var app = express();

app.use(static(__dirname + '/'));

var server = app.listen(process.env.PORT || 3000, function(){
    console.log('server is running at %s', server.address().port);
});