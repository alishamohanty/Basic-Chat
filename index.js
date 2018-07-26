var express = require('express')
const app = express()
var http = require('http').Server(app);
var io = require('socket.io')(http);
app.use(express.static('public'))
app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
    });
io.on('connection', function(socket){
    console.log('Made a connection of Socket-id ', socket.id)
    socket.on('chat message', function(msg){
        io.emit('chat message', msg);
    });
    socket.on('disconnect', function(){
        console.log('user disconnected of Socket id',socket.id);
        });
    });
http.listen(3001, function(){
  console.log('listening on :3001');
});
