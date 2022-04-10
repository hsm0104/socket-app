const express = require('express');
const socketio = require('socket.io');
const http = require('http');
const {addUser, removeUser, getUser, getUsersInRoom} = require("./users");

const PORT = process.env.PORT || 5000;

const router = require('./router');

const app = express();
const server = http.createServer(app);
const io = socketio(server, {cors: {
    origin: "http://localhost:3000",
    credentials: true
  }}); //making socket io server working

  io.on('connection', (socket) => {
    socket.emit('message', {user: 'admin', text: "환영합니다~ 회원 가입을 위해 닉네임을 적어주세요"});

     
    socket.on('join',  (callback) => {
        console.log("join join");
        if(error) return callback(error) //error msg is coming from addUser

        socket.emit('message', {user: 'admin', text: "환영합니다~ 회원 가입을 위해 닉네임을 적어주세요"});
        callback();
    })

    socket.on('disconnect', () =>{
        const user = removeUser(socket.id);
       // io.to(user.room).emit('message', {user: 'admin', text: `${user.name}님 다음에 또 봐요~`});

        console.log("user has left!");
    });
  })
  app.use(router);
  server.listen(PORT, () => console.log(`server has started on port ${PORT}`));