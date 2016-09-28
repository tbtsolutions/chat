var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
   console.log("app içinde");
   document.write("app baglantı sağlandı");
});

io.on('connection', function(socket){
  console.log("baglantı");
  document.write("baglantı sağlandı");
    io.emit('ibrahim');
});

http.listen(process.env.PORT || 1337, function(){
  console.log('listening on *:3000');
});
