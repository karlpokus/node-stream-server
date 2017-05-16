# node-stream-server
One way data streamer over TCP. Implementation test. The idea was to go from tcp -> http -> websockets but browsers sadly do not speak tcp.

# usage
```bash
# start
$ node streamer.js
# listen
$ netcat [host] [port]
```

# TODOs
- [x] client and server TCP connection
- [x] graceful disconnect when client quits
- [ ] detect if protocol is `HTTP` or [websocket](http://stackoverflow.com/questions/26507959/how-do-i-connect-to-a-websocket-manually-with-netcat-socat-telnet)
- [ ] detect and handle growing `socket.bufferSize`
- [ ] connect to remote host
- [ ] node TCP client
- [ ] load test for n connections
- [ ] tls server with [encryption](https://nodejs.org/api/tls.html)
