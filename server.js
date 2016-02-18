var express = require('express')
var app = express();
var bodyParser = require('body-parser')
var server = require('http').Server(app);
var io = require('socket.io')(server);

app.use(bodyParser.json())
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.post('/hook', (req, res) => {
  io.emit('activity', {text: JSON.stringify(req.body) })
  res.status(200).end()
})

io.on('connection', function (socket) {
  socket.emit('activity', { text: 'hello there' });
  // socket.on('my other event', function (data) {
  //   console.log(data);
  // });
})

server.listen(3000, () => console.log('gitpu.sh listening on port 3000!'));