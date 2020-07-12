console.log("Тест");
let express = require("express");
let app = express();
let port = 3000;
let http = require('http').Server(app);
let io = require('socket.io')(http);

app.use(express.static('accept'));

app.get('/', function(request, response) {
    response.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
    socket.on('send message', function(msg) {
        io.emit('receive message', msg);
    });
});

http.listen(port, () => {
    console.log('ok');
});