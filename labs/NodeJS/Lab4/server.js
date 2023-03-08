const express = require('express');
const { user } = require('fontawesome');
const app = express();

const http = require('http').createServer(app);
const io = require('socket.io')(http)

http.listen(process.env.PORT || 3000, ()=>{
  console.log("http://localhost:3000")
});

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(express.static(__dirname + '/assets'));
app.use(express.static(__dirname + '/node_modules/bootstrap/dist'));
app.use(express.static(__dirname + '/node_modules/fontawesome'));


const users = {}

io.on('connection', socket => {
  socket.on('new-user', username => {
    users[socket.id] = username;
    socket.broadcast.emit('user-connected', username);
  })
  socket.on('send-chat-message', message => {
    socket.broadcast.emit('chat-message', { message: message, username: users[socket.id] });
  })
  socket.on('disconnect', () => {
    socket.broadcast.emit('user-disconnected', users[socket.id])
    delete users[socket.id]
  })
});

app.get("/", (req,res)=>{
    res.sendFile(__dirname+"/index.html");
});

// app.get("/login.html", (req,res)=>{
//   res.sendFile(__dirname+"/assets/html/login.html");
// });

// app.get("/register.html", (req,res)=>{
//   res.sendFile(__dirname+"/assets/html/register.html");
// });
