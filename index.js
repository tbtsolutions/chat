
var port = process.env.PORT || 3000;
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
 res.writeHead(200, { 'Content-Type': 'text/plain' });
 res.end('Hello World\n');
});

io.on('connection', function(socket){
  io.emit("ibrahim");
});

http.listen(port, function(){
  console.log('listening on *:3000');
});
