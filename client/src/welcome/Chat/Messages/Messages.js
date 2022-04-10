import React, { useEffect, useState } from 'react'
import io from 'socket.io-client';


let socket;

function Messages() {
const ENDPOINT = 'localhost:5000';
const [message, setMessage] = useState("");
const [messages, setMessages] = useState("");


useEffect(() => {
  socket = io(ENDPOINT);
  
  socket.on('message', (message) => {
    setMessage(message) //adding Msg from admin or any msgs
  })
}, [message])
  return (
    <div style={{color: "#fff"}}>{message}</div>
  )
}

export default Messages