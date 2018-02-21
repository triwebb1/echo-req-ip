var express = require('express');
var app = express();
var listenPort = 80;
var listenIP = "0.0.0.0";

var ips = {};

app.listen(listenPort, listenIP);
console.log('Server listening at http://' + listenIP + ':' + listenPort);

app.get('/:id', function(req, res) {
	var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
	if (typeof ips[req.params.id] !== 'string')
		ips[req.params.id] = ip;

	console.log(ip + " requested '" + req.params.id + "', returned '" + ips[req.params.id] + "'");
	res.send(ips[req.params.id]);  
});
