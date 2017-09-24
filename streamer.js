var net = require('net'),
    server = net.createServer(),
    PORT = 9876,
    HOST = 'localhost';

function log(socket) {
  console.log('NEW TCP CONNECTION', socket.address());
  server.getConnections(function(err, count){
    if (!err) {
      console.log(count, 'sockets connected');
    }
  });
}

server
  .on('connection', function(socket){
    log(socket);
    var timer;

    socket.on('close', function(data) {
      clearInterval(timer);
      console.log('TCP CONNECTION CLOSED');
    });

    function payload() {
      var ts = Date.now();
      socket.write(ts + '\r\n');
    }

    //timer = setInterval(payload, 2000);
    socket.pipe(socket);
  })
  .on('error', function(err){
    console.error(err);
  })
  .listen(PORT, HOST, function(){
    console.log('server listening on', HOST, PORT);
  });
